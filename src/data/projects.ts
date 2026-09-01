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
  cvHighlights?: string[];
}

export const projects: Project[] = [
  {
    id: "iarecgnn",
    title: "IArecGNN: Inductive Graph Learning for Recommendations",
    description:
      "An industry-facing AI module for automatic recommendations and inductive learning with graph neural networks.",
    longDescription:
      "Developing a graph neural network module for automatic recommendations and inductive learning, designed to generalize to previously unseen entities. The work is delivered through a university–industry research contract with a private-sector partner.",
    technologies: [
      "Graph Neural Networks",
      "Inductive Learning",
      "Recommender Systems",
    ],
    category: "research",
    links: {},
    funding: "RIAM INTELEARNING LAB, S.L.",
    role: "Researcher",
  },
  {
    id: "calm",
    title: "CALM: Concept-Drift-Aware Machine Learning",
    description:
      "Reliable predictive models that detect and adapt to changing data distributions.",
    longDescription:
      "Developing multimodal machine learning methods to detect, characterize, and respond to concept drift so predictive performance remains stable as underlying data-generating processes change. The methods are evaluated in evolving public-health scenarios.",
    technologies: ["Concept Drift", "Multimodal Learning", "Python", "R"],
    category: "research",
    links: {
      github: "https://www.um.es/web/aike/calm",
    },
    featured: true,
    partners: ["University of Murcia", "Virgen de la Arrixaca Hospital"],
    funding: "Spanish Ministry of Science (PID2020-117751RB)",
    role: "Researcher",
    duration: "2023–2026",
  },
  {
    id: "go3-project",
    title: "GO3: High-Performance Semantic Similarity",
    description:
      "A high-performance semantic-similarity engine with a Rust core and Python API.",
    longDescription:
      "Designed and built a parallel semantic-similarity library with a memory-safe Rust core exposed through Python. It provides 8 term-level methods and 5 groupwise strategies, reaching up to 5× faster loading, 25× lower memory use, and orders-of-magnitude faster gene comparisons than the established baseline.",
    technologies: ["Python", "Rust", "Parallel Computing", "Benchmarking"],
    category: "software",
    links: {
      github: "https://github.com/Mellandd/GO3",
      paper: "#go3",
    },
    featured: true,
    cvHighlights: [
      "Engineered a Rust core with a Python API using PyO3, Rayon parallelism, caching, and pre-built wheels for a simple pip installation.",
      "Benchmarked **3.6–12.5× faster initialization** and **2–25× faster gene-level similarity** than established Python/R alternatives, while validating numerical agreement.",
    ],
  },
];
