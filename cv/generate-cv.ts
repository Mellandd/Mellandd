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
  lines.push(`\\begin{center}`);
  lines.push(`{\\LARGE\\bfseries ${escape(profile.name)}}\\\\[4pt]`);
  lines.push(`${escape(profile.title)} — ${escape(profile.affiliation.university)}\\\\[2pt]`);
  lines.push(
    `\\href{mailto:${profile.social.email}}{${escape(profile.social.email)}}` +
      ` \\quad ` +
      `\\href{${profile.social.github}}{GitHub}` +
      ` \\quad ` +
      `\\href{${profile.social.scholar}}{Google Scholar}`
  );
  lines.push(`\\end{center}`);
  return lines.join("\n");
}

// ── Education ───────────────────────────────────────────────────────────────
function generateEducation(): string {
  const lines: string[] = [];
  lines.push(`\\section{Education}`);
  for (const ed of profile.education) {
    const honors = ed.honors ? ` — \\textit{${escape(ed.honors)}}` : "";
    lines.push(
      `\\textbf{${escape(ed.degree)}}${honors}\\hfill ${escape(ed.years)}\\\\`
    );
    const focus = "focus" in ed && (ed as any).focus ? ` — ${escape((ed as any).focus)}` : "";
    lines.push(`${escape(ed.institution)}${focus}\\\\[4pt]`);
  }
  return lines.join("\n");
}

// ── Papers ──────────────────────────────────────────────────────────────────
function generatePapers(): string {
  const lines: string[] = [];
  lines.push(`\\section{Publications}`);
  lines.push(`\\begin{itemize}`);
  for (const p of papers) {
    const authors = p.authors.map(escape).join(", ");
    const title = escape(p.title);
    const venue = escape(p.venue);
    const links: string[] = [];
    if (p.links.arxiv) links.push(`\\href{${p.links.arxiv}}{link}`);
    if (p.links.code) links.push(`\\href{${p.links.code}}{code}`);
    const linkStr = links.length > 0 ? ` [${links.join(", ")}]` : "";
    lines.push(
      `  \\item ${authors}. \\textbf{${title}}. \\textit{${venue}}, ${p.year}.${linkStr}`
    );
  }
  lines.push(`\\end{itemize}`);
  return lines.join("\n");
}

// ── Projects ────────────────────────────────────────────────────────────────
function generateProjects(): string {
  const lines: string[] = [];
  lines.push(`\\section{Projects}`);
  lines.push(`\\begin{itemize}`);
  for (const proj of projects) {
    const tech = proj.technologies.map(escape).join(", ");
    const ghLink = proj.links.github
      ? ` \\href{${proj.links.github}}{GitHub}`
      : "";
    lines.push(
      `  \\item \\textbf{${escape(proj.title)}} (${tech})${ghLink} — ${escape(proj.description)}`
    );
  }
  lines.push(`\\end{itemize}`);
  return lines.join("\n");
}

// ── Teaching ────────────────────────────────────────────────────────────────
function generateTeaching(): string {
  const lines: string[] = [];
  lines.push(`\\section{Teaching}`);
  lines.push(`\\begin{itemize}`);
  for (const c of courses) {
    lines.push(
      `  \\item \\textbf{${escape(c.title)}} (${escape(c.code)}) — ${escape(c.role)}, ${escape(c.semester)} ${c.year}`
    );
  }
  lines.push(`\\end{itemize}`);
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
