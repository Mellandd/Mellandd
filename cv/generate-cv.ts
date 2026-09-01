import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "../src/data/profile.ts";
import { papers, type Paper } from "../src/data/papers.ts";
import { projects } from "../src/data/projects.ts";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = join(currentDirectory, "sections");
mkdirSync(outputDirectory, { recursive: true });

function escapeLatex(value: string): string {
  return value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[&%$#_{}]/g, (character) => `\\${character}`)
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/—/g, "---")
    .replace(/–/g, "--")
    .replace(/·/g, "\\textbullet{}")
    .replace(/×/g, "\\ensuremath{\\times}");
}

function richText(value: string): string {
  return value
    .split(/(\*\*.*?\*\*)/g)
    .filter(Boolean)
    .map((fragment) =>
      fragment.startsWith("**") && fragment.endsWith("**")
        ? `\\textbf{${escapeLatex(fragment.slice(2, -2))}}`
        : escapeLatex(fragment)
    )
    .join("");
}

function link(url: string, label: string): string {
  return `\\href{${escapeLatex(url)}}{${escapeLatex(label)}}`;
}

function itemize(items: string[]): string {
  return [
    "\\begin{itemize}",
    ...items.map((item) => `  \\item ${richText(item)}`),
    "\\end{itemize}",
  ].join("\n");
}

function paperLinks(paper: Paper): string {
  const links: string[] = [];
  if (paper.links.arxiv && paper.links.arxiv !== "#") {
    links.push(link(paper.links.arxiv, "Paper"));
  } else if (paper.links.pdf) {
    links.push(link(paper.links.pdf, "Paper"));
  }
  if (paper.links.code && paper.links.code !== "#") {
    links.push(link(paper.links.code, "Code"));
  }
  return links.map((entry) => `[${entry}]`).join(" ");
}

function requiredPaper(id: string): Paper {
  const paper = papers.find((candidate) => candidate.id === id);
  if (!paper) throw new Error(`Missing paper data for ${id}`);
  return paper;
}

function generateMetadata(): string {
  return [
    `\\newcommand{\\cvname}{${escapeLatex(profile.name)}}`,
    "\\hypersetup{",
    `  pdftitle={Industry CV - ${escapeLatex(profile.name)}},`,
    `  pdfauthor={${escapeLatex(profile.name)}},`,
    "  pdfsubject={Machine learning research engineering curriculum vitae},",
    `  pdfkeywords={${escapeLatex(profile.skills.flatMap((group) => group.skills).join(", "))}},`,
    "  pdfcreator={LaTeX with Tectonic},",
    "  pdfdisplaydoctitle=true",
    "}",
  ].join("\n");
}

function generateHeader(): string {
  const contacts = [
    "Murcia, Spain",
    link(`mailto:${profile.social.email}`, profile.social.email),
    link(profile.social.website, "Portfolio"),
    link(profile.social.github, "GitHub"),
    link(profile.social.linkedin, "LinkedIn"),
  ];

  return [
    "\\noindent{\\color{accent}\\rule{4pt}{2.05cm}}\\hspace{0.7em}%",
    "\\begin{minipage}[b]{\\dimexpr\\linewidth-4pt-0.7em\\relax}",
    `{\\fontsize{27}{29}\\selectfont\\bfseries\\color{ink} ${escapeLatex(profile.name)}}\\\\[3pt]`,
    `{\\large\\bfseries\\color{accent} ${escapeLatex(profile.cv.industryTitle)}}\\\\[8pt]`,
    `\\contactbar{${contacts.join("\\quad\\textcolor{rule}{|}\\quad ")}}`,
    "\\end{minipage}",
    "\\vspace{0.35em}",
  ].join("\n");
}

function generateSummary(): string {
  return `\\profilebox{${escapeLatex(profile.cv.summary)}}`;
}

function generateSkills(): string {
  return [
    "\\section{Core Skills}",
    ...profile.skills.map(
      (group) =>
        `\\cvskill{${escapeLatex(group.area)}}{${group.skills.map(escapeLatex).join(" \\textbullet{} ")}}`
    ),
  ].join("\n");
}

function generateExperience(): string {
  const lines = ["\\section{Experience}"];
  for (const experience of profile.experience) {
    const organization = experience.url
      ? link(experience.url, experience.organization)
      : escapeLatex(experience.organization);
    lines.push(
      `\\experienceentry{${escapeLatex(experience.role)}}{${escapeLatex(experience.years)}}{${organization}}{${escapeLatex(experience.location)}}{%
${itemize(experience.highlights)}
}`
    );
  }
  return lines.join("\n");
}

function generateImpact(): string {
  const go3 = projects.find((project) => project.id === "go3-project");
  if (!go3?.cvHighlights) throw new Error("Missing GO3 CV highlights");

  const go3Paper = requiredPaper("go3");
  const selectedPapers = [
    requiredPaper("structure-aware-biomedical-embeddings"),
    requiredPaper("phenolinker"),
  ];

  const lines = ["\\section{Selected Technical Impact}"];
  lines.push(
    `\\impactentry{${escapeLatex(go3.title)}}{${go3.technologies.map(escapeLatex).join(" \\textbullet{} ")}}{${paperLinks(go3Paper)}}{%
${itemize(go3.cvHighlights)}
}`
  );
  lines.push("\\newpage", "\\section{Selected Technical Impact}");

  for (const paper of selectedPapers) {
    if (!paper.cvHighlights) throw new Error(`Missing CV highlights for ${paper.id}`);
    lines.push(
      `\\impactentry{${escapeLatex(paper.title)}}{${paper.tags.map(escapeLatex).join(" \\textbullet{} ")}}{${paperLinks(paper)}}{%
${itemize(paper.cvHighlights)}
}`
    );
  }
  return lines.join("\n");
}

function generateEducation(): string {
  const lines = ["\\section{Education}"];
  for (const education of profile.education) {
    const details = [education.institution, education.focus].filter(Boolean).join(", ");
    lines.push(
      `\\educationentry{${escapeLatex(education.degree)}}{${escapeLatex(education.years)}}{${escapeLatex(details)}}`
    );
  }
  lines.push(
    "\\noindent{\\small\\color{muted}M.Sc. thesis: 10/10; Computer Science and Mathematics capstones: 9.8/10 and 9.7/10, all awarded Highest Honours.}"
  );
  return lines.join("\n");
}

function generatePublications(): string {
  const selected = [
    "structure-aware-biomedical-embeddings",
    "go3",
    "phenolinker",
    "deibo",
  ].map(requiredPaper);

  return [
    "\\section{Selected Publications}",
    ...selected.map(
      (paper) =>
        `\\publicationentry{${escapeLatex(paper.title)}}{${escapeLatex(paper.venue.trim())}, ${paper.year}}{${paperLinks(paper)}}`
    ),
    `\\noindent{\\footnotesize\\color{muted}Four first-author works selected from six peer-reviewed publications. Full list on ${link(profile.social.scholar, "Google Scholar")}.}`,
  ].join("\n");
}

function generateAdditional(): string {
  const languages = profile.languages
    .map((entry) => `\\textbf{${escapeLatex(entry.language)}}: ${escapeLatex(entry.level)}`)
    .join("\\qquad");
  return ["\\section{Languages}", `\\noindent ${languages}`].join("\n");
}

const sections: Record<string, () => string> = {
  metadata: generateMetadata,
  header: generateHeader,
  profile: generateSummary,
  skills: generateSkills,
  experience: generateExperience,
  impact: generateImpact,
  education: generateEducation,
  papers: generatePublications,
  additional: generateAdditional,
};

for (const [name, generate] of Object.entries(sections)) {
  const path = join(outputDirectory, `${name}.tex`);
  writeFileSync(path, `${generate()}\n`);
  console.log(`wrote ${path}`);
}

console.log("Industry CV sections generated.");
