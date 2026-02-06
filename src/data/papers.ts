export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  links: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    project?: string;
  };
  featured?: boolean;
}

export const papers: Paper[] = [
  {
    id: "neural-theorem-proving",
    title: "Neural Theorem Proving with Reinforcement Learning",
    authors: ["Your Name", "Collaborator One", "Advisor Name"],
    venue: "NeurIPS",
    year: 2024,
    abstract: "We present a novel approach to automated theorem proving using deep reinforcement learning. Our method combines transformer architectures with Monte Carlo Tree Search to discover proofs in formal mathematical systems. We demonstrate state-of-the-art results on multiple benchmarks including Metamath and Lean.",
    tags: ["Machine Learning", "Theorem Proving", "Reinforcement Learning"],
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S0933365725001125",
      code: "https://github.com/username/neural-theorem-proving",
      pdf: "#",
    },
    featured: true,
  },
  {
    id: "neural-theorem-proving",
    title: "Phenolinker: Phenotype-gene link prediction and explanation using heterogeneous graph neural networks",
    authors: ["Your Name", "Collaborator One", "Advisor Name"],
    venue: "Artificial Intelligence in Medicine",
    year: 2025,
    abstract: "The association of a given human phenotype with a genetic variant remains a critical challenge in biomedical research. We present PhenoLinker, a novel graph-based system capable of associating a score to a phenotype-gene relationship by using heterogeneous information networks and a convolutional neural network-based model for graphs, which can provide an explanation for the predictions. Unlike previous approaches, PhenoLinker integrates gene and phenotype attributes, while maintaining explainability through Integrated Gradients. PhenoLinker consistently outperforms existing models in both retrospective and temporal validation tasks. This system can aid in the discovery of new associations and in understanding the consequences of human genetic variation.",
    tags: ["Graph Neural Networks", "Theorem Proving", "Reinforcement Learning"],
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S0933365725001125",
      code: "https://github.com/Mellandd/PhenoLinker",
      pdf: "#",
    },
    featured: true,
  },
  {
    id: "geometric-deep-learning",
    title: "Geometric Deep Learning on Non-Euclidean Manifolds",
    authors: ["Your Name", "Collaborator Two"],
    venue: "ICML",
    year: 2024,
    abstract: "This paper introduces a unified framework for deep learning on Riemannian manifolds. We propose novel convolutional and attention mechanisms that respect the underlying geometric structure, enabling efficient learning on hyperbolic and spherical spaces.",
    tags: ["Geometric DL", "Differential Geometry", "Graph Neural Networks"],
    links: {
      arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
      code: "https://github.com/username/geometric-dl",
    },
    featured: true,
  },
  {
    id: "diffusion-optimal-transport",
    title: "Diffusion Models as Optimal Transport Maps",
    authors: ["Your Name", "Advisor Name"],
    venue: "ICLR",
    year: 2023,
    abstract: "We establish a theoretical connection between score-based diffusion models and optimal transport theory. This perspective yields new training objectives with improved sample efficiency and enables principled interpolation between distributions.",
    tags: ["Generative Models", "Optimal Transport", "Theory"],
    links: {
      arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
      pdf: "#",
    },
  },
  {
    id: "quantum-ml-complexity",
    title: "On the Computational Complexity of Quantum Machine Learning",
    authors: ["Your Name", "Collaborator Three", "Collaborator Four"],
    venue: "QIP",
    year: 2023,
    abstract: "We analyze the computational complexity of quantum machine learning algorithms, establishing both upper and lower bounds for various learning tasks. Our results provide insights into when quantum advantages can and cannot be achieved.",
    tags: ["Quantum Computing", "Complexity Theory", "Machine Learning"],
    links: {
      arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
    },
  },
  {
    id: "causal-representation",
    title: "Causal Representation Learning via Interventional Data",
    authors: ["Your Name", "Collaborator Five"],
    venue: "UAI",
    year: 2022,
    abstract: "We propose a method for learning causal representations from interventional data. Our approach leverages the structure of interventions to disentangle causal factors and enables robust out-of-distribution generalization.",
    tags: ["Causal Inference", "Representation Learning"],
    links: {
      arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
      code: "https://github.com/username/causal-rep",
    },
  },
];

export const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort();
