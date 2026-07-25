export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: "research" | "software";
  links: {
    demo?: string;
    github?: string;
    paper?: string;
  };
  image?: string;
  featured?: boolean;
  partners?: string[];
  funding?: string;
  role?: string;
  duration?: string;
}

export const projects: Project[] = [
  {
    id: "iarecgnn",
    title: "IArecGNN: AI Module for Automatic Recommendations and Inductive Learning with Graph Neural Networks",
    description:
      "Development of an AI module for automatic recommendations and inductive learning using graph neural networks.",
    longDescription:
      "Development of an AI module for automatic recommendations and inductive learning using graph neural networks. The project is conducted under an Article 60 contract of Spain's Organic Law on the University System (LOSU), supporting research and knowledge transfer between the university and a private-sector partner.",
    technologies: [
      "Artificial Intelligence",
      "Graph Neural Networks",
      "Recommender Systems",
    ],
    category: "research",
    links: {},
    funding: "RIAM INTELEARNING LAB, S.L.",
    role: "Researcher",
  },
  {
    id: "calm",
    title: "CALM-COVID19: Concept-drift Aware Learning models. Applications to COVID-19 like pandemic scenarios",
    description: "Concept Drift Sensitive Machine Learning.",
    longDescription: "The main objective of this project is to design techniques that enable the detection and characterisation of concept drift in multimodal scenarios based on the nature of the data, focusing on health scenarios that can degenerate into pandemic situations. In this way, we will develop predictive models that are capable of maintaining consistent performance throughout the evolution of the underlying/latent process, which is therefore unknown to us. We understand the evolution of this process as something that can lead to notable changes, i.e., the appearance of ‘concept drift’. We want to detect this drift and react to it in the best possible way.",
    technologies: ["Python", "R"],
    category: "research",
    links: {
      github: "https://www.um.es/web/aike/calm",
    },
    featured: true,
    partners: ["University of Murcia", "Virgen de la Arrixaca Hospital"],
    funding: "Spanish Ministry of Science (PID2020-117751RB)",
    role: "Researcher",
    duration: "2023 -- 2026",
  },
  {
    id: "go3-project",
    title: "go3",
    description: "GO3: Gene Ontology Semantic Similarity",
    longDescription: "GO3 is a high-performance GO semantic similarity library built on a Rust core exposed through a Python API (via PyO3). It provides 8 term-level similarity methods, 5 groupwise strategies, and parallelized batch operations, all accessible from a simple Python interface.",
    technologies: ["Python", "Rust"],
    category: "software",
    links: {
      github: "https://github.com/Mellandd/GO3",
      paper: "#go3",
    },
    featured: true,
  },
];
