import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { profile } from "../src/data/profile.ts";
import { papers } from "../src/data/papers.ts";
import { projects } from "../src/data/projects.ts";
import { courses } from "../src/data/teaching.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "sections");
mkdirSync(OUT, { recursive: true });

function escape(s: string): string {
  return s
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[&%$#_{}]/g, (m) => `\\${m}`)
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

// ── Header ──────────────────────────────────────────────────────────────────
function generateHeader(): string {
  const lines: string[] = [];

  // Name
  lines.push(`\\begin{center}`);
  lines.push(`{\\Huge\\bfseries\\color{accent} ${escape(profile.name)}}\\\\[6pt]`);
  lines.push(`{\\large ${escape(profile.title)} --- ${escape(profile.affiliation.university)}}\\\\[8pt]`);

  // Contact row with icons
  const contacts: string[] = [];
  contacts.push(
    `\\faIcon{envelope}\\;\\href{mailto:${profile.social.email}}{${escape(profile.social.email)}}`
  );
  contacts.push(
    `\\faIcon{github}\\;\\href{${profile.social.github}}{${escape("Mellandd")}}`
  );
  contacts.push(
    `\\faIcon{graduation-cap}\\;\\href{${profile.social.scholar}}{Google Scholar}`
  );

  lines.push(`{\\small ${contacts.join("\\quad\\textcolor{rule}{|}\\quad ")}}`);
  lines.push(`\\end{center}`);
  lines.push(`\\vspace{0.2em}`);

  return lines.join("\n");
}

// ── Education ───────────────────────────────────────────────────────────────
function generateEducation(): string {
  const lines: string[] = [];
  lines.push(`\\section{Education}`);

  for (const ed of profile.education) {
    const honors = ed.honors ? ` --- \\textit{${escape(ed.honors)}}` : "";
    const focus = "focus" in ed && (ed as any).focus
      ? escape((ed as any).focus)
      : "";
    const subtitle = [escape(ed.institution), focus].filter(Boolean).join(" --- ");

    lines.push(
      `\\cventry{${escape(ed.degree)}${honors}}{${escape(ed.years)}}{${subtitle}}{}`
    );
  }

  return lines.join("\n");
}

// ── Papers ──────────────────────────────────────────────────────────────────
function generatePapers(): string {
  const lines: string[] = [];
  lines.push(`\\section{Publications}`);

  for (const p of papers) {
    const authors = p.authors.map(escape).join(", ");
    const title = escape(p.title);
    const venue = escape(p.venue);

    const links: string[] = [];
    if (p.links.arxiv && p.links.arxiv !== "#")
      links.push(`\\href{${p.links.arxiv}}{\\faIcon{external-link-alt}\\,link}`);
    if (p.links.code)
      links.push(`\\href{${p.links.code}}{\\faIcon{code}\\,code}`);

    const linkStr =
      links.length > 0
        ? `\\ {\\footnotesize\\color{accent}${links.join("\\;\\textcolor{rule}{|}\\;")}}`
        : "";

    lines.push(`\\cvpub{${authors}}{${title}}{${venue}}{${p.year}}{${linkStr}}`);
  }

  return lines.join("\n");
}

// ── Projects ────────────────────────────────────────────────────────────────
function generateProjects(): string {
  const lines: string[] = [];
  lines.push(`\\section{Projects}`);

  for (const proj of projects) {
    const tech = proj.technologies.map(escape).join(", ");
    const ghLink = proj.links.github
      ? `\\ \\href{${proj.links.github}}{\\faIcon{github}}`
      : "";

    lines.push(
      `\\cvitem{${escape(proj.title)}${ghLink}}{${tech}}{${escape(proj.description)}}`
    );
  }

  return lines.join("\n");
}

// ── Teaching ────────────────────────────────────────────────────────────────
function generateTeaching(): string {
  const lines: string[] = [];
  lines.push(`\\section{Teaching}`);

  for (const c of courses) {
    lines.push(
      `\\cvitem{${escape(c.title)} {\\normalfont(${escape(c.code)})}}{${escape(c.semester)} ${c.year}}{${escape(c.role)} --- ${escape(c.description)}}`
    );
  }

  return lines.join("\n");
}

// ── Write files ─────────────────────────────────────────────────────────────
const sections: Record<string, () => string> = {
  header: generateHeader,
  education: generateEducation,
  papers: generatePapers,
  projects: generateProjects,
  teaching: generateTeaching,
};

for (const [name, fn] of Object.entries(sections)) {
  const path = join(OUT, `${name}.tex`);
  writeFileSync(path, fn() + "\n");
  console.log(`  wrote ${path}`);
}

console.log("CV sections generated.");
