interface Education {
  degree: string;
  institution: string;
  years: string;
  focus?: string;
  honors?: string;
}

interface SocialLinks {
  email: string;
  github: string;
  scholar: string;
  linkedin: string;
  twitter?: string;
}

interface Profile {
  name: string;
  publicationNames: string[];
  initials: string;
  title: string;
  tagline: string;
  affiliation: {
    department: string;
    university: string;
    lab: string;
  };
  bio: string;
  researchInterests: string[];
  education: Education[];
  social: SocialLinks;
  cv: {
    path: string;
    downloadName: string;
    summary: string;
  };
}

export const profile: Profile = {
  name: "Jose Luis Mellina Andreu",
  publicationNames: [
    "Jose Luis Mellina Andreu",
    "Jose L. Mellina-Andreu",
  ],
  initials: "JL",
  title: "PhD Researcher in AI",
  tagline: "Exploring the intersection of Deep Learning, Mathematics and Biology.",
  affiliation: {
    department: "Department of Computer Science",
    university: "Murcia University",
    lab: "Bio IA Lab",
  },
  bio: `I'm a PhD candidate researching the applications of graph neural networks and large language models in the field of bioinformatics, with an emphasis on creating interpretable models of human genomics.

My latest work focuses on the use of graph neural networks for the encoding and completion of biomedical ontologies, such as the Human Phenotype Ontology (HPO) and the Gene Ontology (GO). In addition, I have researched interpretation techniques on BERT-like encoders, attempting to translate embeddings into specific interpretations in a domain.

Before starting my PhD, I completed my undergraduate studies in Mathematics and Computer Science, where I developed a passion for the beautiful interplay between abstract mathematics and practical computation.`,
  researchInterests: [
    "Machine Learning Theory",
    "Deep Learning",
    "Graph Neural Networks",
    "Large Language Models",
    "Bioinformatics",
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Murcia University",
      years: "2023 - Present",
      focus: "Machine Learning Theory",
    },
    {
      degree: "M.S. in Big Data Analysis Technologies",
      institution: "Murcia University",
      years: "2022 - 2023",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "Murcia University",
      years: "2017 - 2022",
    },
    {
      degree: "B.S. in Mathematics",
      institution: "Murcia University",
      years: "2017 - 2022",
    },
  ],
  social: {
    email: "joseluis.mellinaa@um.es",
    github: "https://github.com/Mellandd",
    scholar: "https://scholar.google.es/citations?user=7asCEJwAAAAJ",
//    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/jose-luis-mellina",
  },
  cv: {
    path: "cv.pdf",
    downloadName: "jose-luis-mellina-academic-cv.pdf",
    summary:
      "PhD researcher working on graph neural networks and language models for bioinformatics, with a focus on interpretable representations of human genomics and biomedical ontologies.",
  },
};
