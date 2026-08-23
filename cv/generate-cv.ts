import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "../src/data/profile.ts";
import { papers } from "../src/data/papers.ts";
import { projects } from "../src/data/projects.ts";
import { courses } from "../src/data/teaching.ts";
import {
  reviewingActivities,
  conferenceParticipations,
  otherActivities,
} from "../src/data/activities.ts";

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
    .replace(/·/g, "\\textbar{}")
    .replace(/×/g, "\\ensuremath{\\times}");
}

function link(url: string, label: string): string {
  return `\\href{${escapeLatex(url)}}{${escapeLatex(label)}}`;
}

function descendingByYear<T extends { year: number }>(items: T[]): T[] {
  return [...items].sort((left, right) => right.year - left.year);
}

function generateMetadata(): string {
  const keywords = profile.researchInterests.join(", ");

  return [
    `\\newcommand{\\cvname}{${escapeLatex(profile.name)}}`,
    "\\hypersetup{",
    `  pdftitle={Curriculum Vitae - ${escapeLatex(profile.name)}},`,
    `  pdfauthor={${escapeLatex(profile.name)}},`,
    `  pdfsubject={AI research curriculum vitae for ${escapeLatex(profile.name)}},`,
    `  pdfkeywords={${escapeLatex(keywords)}},`,
    "  pdfcreator={LaTeX with Tectonic},",
    "  pdfdisplaydoctitle=true",
    "}",
  ].join("\n");
}

function generateHeader(): string {
  const contacts = [
    link(`mailto:${profile.social.email}`, profile.social.email),
    link(profile.social.website, "Website"),
    link(profile.social.github, "GitHub"),
    link(profile.social.scholar, "Google Scholar"),
    link(profile.social.linkedin, "LinkedIn"),
  ];

  return [
    "\\begin{center}",
    `{\\Huge\\bfseries\\color{accent} ${escapeLatex(profile.name)}}\\\\[5pt]`,
    `{\\large ${escapeLatex(profile.title)} --- ${escapeLatex(profile.affiliation.university)}}\\\\[7pt]`,
    `{\\small ${contacts.join("\\quad\\textcolor{rule}{|}\\quad ")}}`,
    "\\end{center}",
    "\\vspace{0.1em}",
  ].join("\n");
}

function generateProfile(): string {
  return [
    "\\section{AI Research Profile}",
    `\\noindent ${escapeLatex(profile.cv.summary)}\\par`,
    "\\vspace{0.35em}",
    `\\noindent\\textbf{Research interests:} ${profile.researchInterests.map(escapeLatex).join(" \\textbar{} ")}`,
  ].join("\n");
}

function generateExpertise(): string {
  const lines = ["\\section{Technical Expertise}"];

  for (const expertise of profile.expertise) {
    lines.push(
      `\\cvitem{${escapeLatex(expertise.area)}}{${expertise.topics.map(escapeLatex).join(" \\textbar{} ")}}{${escapeLatex(expertise.description)}}`
    );
  }

  return lines.join("\n");
}

function generateEducation(): string {
  const lines = ["\\section{Education}"];

  for (const education of profile.education) {
    const honors = education.honors
      ? ` --- \\textit{${escapeLatex(education.honors)}}`
      : "";
    const focus = education.focus ? escapeLatex(education.focus) : "";
    const subtitle = [escapeLatex(education.institution), focus]
      .filter(Boolean)
      .join(" --- ");

    lines.push(
      `\\cventry{${escapeLatex(education.degree)}${honors}}{${escapeLatex(education.years)}}{${subtitle}}{}`
    );
  }

  return lines.join("\n");
}

function formatAuthors(authors: string[]): string {
  return authors
    .map((author) => {
      const escapedAuthor = escapeLatex(author);
      return profile.publicationNames.includes(author)
        ? `\\textbf{${escapedAuthor}}`
        : escapedAuthor;
    })
    .join(", ");
}

function generatePapers(): string {
  const lines = ["\\section{Publications}"];

  for (const paper of descendingByYear(papers)) {
    const links: string[] = [];
    if (paper.links.arxiv && paper.links.arxiv !== "#") {
      links.push(link(paper.links.arxiv, "paper"));
    } else if (paper.links.pdf) {
      links.push(link(paper.links.pdf, "paper"));
    }
    if (paper.links.code && paper.links.code !== "#") {
      links.push(link(paper.links.code, "code"));
    }

    const linkText =
      links.length > 0
        ? `\\ {\\footnotesize\\color{accent}[${links.join("] [")}]}`
        : "";

    lines.push(
      `\\cvpub{${formatAuthors(paper.authors)}}{${escapeLatex(paper.title)}}{${escapeLatex(paper.venue.trim())}}{${paper.year}}{${linkText}}`
    );
  }

  return lines.join("\n");
}

function generateProjects(): string {
  const lines = ["\\section{Selected AI Research \\& Engineering}"];
  const projectGroups = [
    {
      title: "Research Projects",
      items: projects.filter((project) => project.category === "research"),
    },
    {
      title: "Software & Tools",
      items: projects.filter((project) => project.category === "software"),
    },
  ];

  for (const group of projectGroups) {
    if (group.items.length === 0) continue;

    lines.push(`\\subsection{${escapeLatex(group.title)}}`);
    for (const project of group.items) {
      const technologies = project.technologies.map(escapeLatex).join(", ");
      const projectLink = project.links.github
        ? `\\ {\\footnotesize\\color{accent}[${link(project.links.github, "GitHub")}]}`
        : "";
      const metadata: string[] = [];
      if (project.role) metadata.push(escapeLatex(project.role));
      if (project.duration) metadata.push(escapeLatex(project.duration));
      if (project.funding) {
        metadata.push(`Funded by ${escapeLatex(project.funding)}`);
      }
      const metadataText =
        metadata.length > 0
          ? ` {\\footnotesize\\color{light}(${metadata.join("; ")})}`
          : "";

      lines.push(
        `\\cvitem{${escapeLatex(project.title)}${projectLink}${metadataText}}{${technologies}}{${escapeLatex(project.description)}}`
      );
    }
  }

  return lines.join("\n");
}

function generateTeaching(): string {
  const lines = ["\\section{Teaching}"];

  for (const course of descendingByYear(courses)) {
    const topics = course.topics?.map(escapeLatex).join(" \\textbar{} ") ?? "";
    const topicText = topics
      ? ` {\\small\\color{light}Topics: ${topics}}`
      : "";
    lines.push(
      `\\noindent{\\small\\textbf{${escapeLatex(course.title)}} (${escapeLatex(course.code)}) --- ${escapeLatex(course.role)}, ${escapeLatex(course.semester)} ${course.year}.${topicText}}\\par\\vspace{0.15em}`
    );
  }

  return lines.join("\n");
}

function generateActivities(): string {
  const lines = ["\\section{Academic Service \\& Presentations}"];

  if (reviewingActivities.length > 0 || conferenceParticipations.length > 0) {
    lines.push("\\begin{itemize}");
    for (const review of reviewingActivities) {
      lines.push(
        `\\item \\textbf{${escapeLatex(review.role)}} --- \\textit{${escapeLatex(review.venue)}} (${review.years.join(", ")})`
      );
    }
    for (const conference of descendingByYear(conferenceParticipations)) {
      const details = [conference.role, conference.location]
        .filter(Boolean)
        .map((detail) => escapeLatex(detail))
        .join(", ");
      lines.push(
        `\\item \\textbf{${escapeLatex(conference.shortName ?? conference.name)}} --- ${details} (${conference.year})`
      );
    }
    lines.push("\\end{itemize}");
  }

  if (otherActivities.length > 0) {
    lines.push("\\subsection{Memberships \\& Service}");
    lines.push("\\begin{itemize}");
    for (const activity of otherActivities) {
      lines.push(
        `\\item ${escapeLatex(activity.title)}, ${escapeLatex(activity.organization)} (${escapeLatex(activity.years)})`
      );
    }
    lines.push("\\end{itemize}");
  }

  return lines.join("\n");
}

const sections: Record<string, () => string> = {
  metadata: generateMetadata,
  header: generateHeader,
  profile: generateProfile,
  expertise: generateExpertise,
  education: generateEducation,
  papers: generatePapers,
  projects: generateProjects,
  teaching: generateTeaching,
  activities: generateActivities,
};

for (const [name, generate] of Object.entries(sections)) {
  const path = join(outputDirectory, `${name}.tex`);
  writeFileSync(path, `${generate()}\n`);
  console.log(`wrote ${path}`);
}

console.log("CV sections generated.");
