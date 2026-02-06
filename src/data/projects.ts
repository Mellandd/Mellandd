export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    paper?: string;
  };
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "neural-prover",
    title: "NeuralProver",
    description: "An AI system for automated theorem proving using transformers and reinforcement learning.",
    longDescription: "NeuralProver combines state-of-the-art language models with Monte Carlo Tree Search to discover mathematical proofs. The system achieves superhuman performance on several benchmarks and can generate human-readable proof explanations.",
    technologies: ["Python", "PyTorch", "Lean", "MCTS"],
    links: {
      github: "https://github.com/username/neural-prover",
      paper: "#neural-theorem-proving",
      demo: "https://neural-prover.demo.com",
    },
    featured: true,
  },
  {
    id: "manifold-net",
    title: "ManifoldNet",
    description: "A library for geometric deep learning on Riemannian manifolds and Lie groups.",
    longDescription: "ManifoldNet provides efficient implementations of neural network layers that operate on non-Euclidean spaces. It supports hyperbolic, spherical, and product manifolds with automatic differentiation on the tangent bundle.",
    technologies: ["Python", "JAX", "Differential Geometry"],
    links: {
      github: "https://github.com/username/manifold-net",
      paper: "#geometric-deep-learning",
    },
    featured: true,
  },
  {
    id: "diffusion-viz",
    title: "DiffusionViz",
    description: "Interactive visualization tool for understanding diffusion models and score functions.",
    longDescription: "An educational web application that visualizes the denoising process in diffusion models. Users can interact with 2D distributions and see how the score function guides samples toward the data manifold.",
    technologies: ["TypeScript", "React", "D3.js", "WebGL"],
    links: {
      demo: "https://diffusion-viz.demo.com",
      github: "https://github.com/username/diffusion-viz",
    },
  },
  {
    id: "causal-discovery",
    title: "CausalKit",
    description: "Toolkit for causal discovery and intervention analysis from observational data.",
    technologies: ["Python", "NetworkX", "Scikit-learn"],
    links: {
      github: "https://github.com/username/causal-kit",
    },
  },
  {
    id: "math-benchmarks",
    title: "MathBench",
    description: "A comprehensive benchmark suite for evaluating mathematical reasoning in LLMs.",
    technologies: ["Python", "LaTeX", "JSON"],
    links: {
      github: "https://github.com/username/math-bench",
      demo: "https://math-bench.demo.com",
    },
  },
];
