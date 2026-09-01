interface Education {
  degree: string;
  institution: string;
  years: string;
  focus?: string;
  honors?: string;
}

interface SocialLinks {
  email: string;
  website: string;
  github: string;
  scholar: string;
  linkedin: string;
  twitter?: string;
}

interface ExpertiseArea {
  area: string;
  topics: string[];
  description: string;
}

interface Experience {
  role: string;
  organization: string;
  location: string;
  years: string;
  url?: string;
  highlights: string[];
}

interface SkillGroup {
  area: string;
  skills: string[];
}

interface Language {
  language: string;
  level: string;
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
  expertise: ExpertiseArea[];
  experience: Experience[];
  skills: SkillGroup[];
  languages: Language[];
  education: Education[];
  social: SocialLinks;
  cv: {
    path: string;
    downloadName: string;
    industryTitle: string;
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
  title: "AI Researcher · Deep Learning, LLMs & GNNs",
  tagline:
    "Building interpretable learning systems across language, graphs, and structured knowledge.",
  affiliation: {
    department: "Department of Computer Science",
    university: "University of Murcia",
    lab: "Bio IA Lab",
  },
  bio: `I'm an AI researcher and PhD candidate developing deep learning methods for language, graphs, and structured knowledge. My work spans large language models, graph neural networks, representation learning, knowledge graphs, and explainable AI.

I study how learned representations can be aligned with structured knowledge, made easier to interpret, and deployed reliably under real-world constraints. My research includes contrastive fine-tuning of language models, heterogeneous graph learning, embedding interpretation, link prediction, and concept-drift-aware prediction.

I validate these methods in demanding scientific and healthcare settings, but the research questions and techniques are designed to transfer across domains. My background in both Mathematics and Computer Science shapes how I connect theoretical ideas, careful experimentation, and practical software.`,
  researchInterests: [
    "Deep Learning",
    "Large Language Models",
    "Graph Neural Networks",
    "Representation Learning",
    "Knowledge Graphs",
    "Explainable AI",
    "Reliable Machine Learning",
  ],
  expertise: [
    {
      area: "Language Models",
      topics: ["LLMs", "Fine-tuning", "Contrastive Learning", "Embeddings"],
      description:
        "Adapting and interpreting language-model representations with structured supervision.",
    },
    {
      area: "Graph Learning",
      topics: ["GNNs", "Heterogeneous Graphs", "Knowledge Graphs", "Link Prediction"],
      description:
        "Learning over relational data for prediction, recommendation, and knowledge completion.",
    },
    {
      area: "Interpretable AI",
      topics: ["Explainability", "Integrated Gradients", "Embedding Analysis"],
      description:
        "Connecting model outputs and latent representations to concepts people can inspect.",
    },
    {
      area: "Research Engineering",
      topics: ["Python", "Rust", "R", "Benchmarking"],
      description:
        "Turning research ideas into reproducible, efficient software and rigorous evaluations.",
    },
  ],
  experience: [
    {
      role: "Visiting AI Researcher",
      organization: "German Research Center for Artificial Intelligence (DFKI)",
      location: "Osnabrück, Germany",
      years: "2026 · 3 months",
      url: "https://www.dfki.de/en/web",
      highlights: [
        "Completed a **three-month international research stay** jointly with Osnabrück University in an applied-AI research environment.",
        "Extended doctoral work on representation learning across language, graphs, and structured knowledge through collaborative experimentation and research exchange.",
      ],
    },
    {
      role: "Predoctoral AI Researcher",
      organization: "University of Murcia",
      location: "Murcia, Spain",
      years: "2023–Present",
      url: "https://www.um.es/",
      highlights: [
        "Own the end-to-end ML research lifecycle: data pipelines, model design and training, rigorous evaluation, explainability, and open-source delivery.",
        "Built systems spanning LLM fine-tuning, heterogeneous GNNs, and reliable machine learning; published **six peer-reviewed papers, four as first author**.",
        "Deliver applied R&D with an industry partner, including an inductive GNN module for automatic recommendations and unseen entities.",
      ],
    },
    {
      role: "Teaching Assistant, Machine Learning & Deep Learning",
      organization: "University of Murcia",
      location: "Murcia, Spain",
      years: "2024–2025",
      highlights: [
        "Taught practical sessions across five courses covering machine learning, deep learning, transformers, GNNs, GANs, ontologies, and intelligent systems.",
      ],
    },
  ],
  skills: [
    {
      area: "Programming",
      skills: ["Python", "Rust", "R"],
    },
    {
      area: "ML stack",
      skills: ["PyTorch", "PyTorch Geometric", "Hugging Face", "scikit-learn"],
    },
    {
      area: "AI expertise",
      skills: ["Deep Learning", "LLMs & Transformers", "Graph Neural Networks", "Explainable AI", "Knowledge Graphs"],
    },
    {
      area: "Engineering",
      skills: ["Git", "Linux", "PyO3", "Rayon", "Testing", "Benchmarking"],
    },
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Full professional proficiency" },
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Murcia",
      years: "2023 - Present",
      focus: "Artificial Intelligence",
    },
    {
      degree: "M.S. in Big Data Analysis Technologies",
      institution: "University of Murcia",
      years: "2022 - 2023",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of Murcia",
      years: "2017 - 2022",
    },
    {
      degree: "B.S. in Mathematics",
      institution: "University of Murcia",
      years: "2017 - 2022",
    },
  ],
  social: {
    email: "joseluis.mellinaa@um.es",
    website: "https://mellandd.github.io/Mellandd/",
    github: "https://github.com/Mellandd",
    scholar: "https://scholar.google.es/citations?user=7asCEJwAAAAJ",
//    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/jose-luis-mellina",
  },
  cv: {
    path: "cv.pdf",
    downloadName: "jose-luis-mellina-ai-research-cv.pdf",
    industryTitle: "Machine Learning Research Engineer · LLMs, Graph ML & High-Performance AI",
    summary:
      "I'm a machine learning researcher and PhD candidate with degrees in computer science and mathematics. I like building models that are not only interesting on paper, but useful and reliable in practice. My work focuses on language models, graph neural networks, and structured knowledge. I usually work across the whole process, from shaping the research question and running experiments to writing and optimizing the final software. I have also collaborated with international research teams and industry partners.",
  },
};
