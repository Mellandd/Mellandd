export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Research" | "Talk" | "News" | "Tutorial";
  excerpt: string;
  content: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "neurips-2024",
    slug: "neurips-2024-paper-accepted",
    title: "Paper Accepted at NeurIPS 2024!",
    date: "2024-09-15",
    category: "News",
    excerpt: "Excited to announce that our paper on Neural Theorem Proving has been accepted at NeurIPS 2024.",
    content: `I'm thrilled to share that our paper "Neural Theorem Proving with Reinforcement Learning" has been accepted at NeurIPS 2024!

This work represents two years of research combining transformer architectures with Monte Carlo Tree Search for automated theorem proving. We show that our approach significantly outperforms existing methods on standard benchmarks.

I'll be presenting the paper at the conference in December. If you're attending, come say hi!

**Key contributions:**
- Novel integration of language models with proof search
- State-of-the-art results on Metamath and Lean benchmarks
- Open-source implementation and pretrained models

More details coming soon. Stay tuned for the camera-ready version and code release.`,
    tags: ["NeurIPS", "Publication", "Theorem Proving"],
  },
  {
    id: "icml-talk-2024",
    slug: "icml-2024-talk",
    title: "Talk at ICML 2024 Workshop",
    date: "2024-07-20",
    category: "Talk",
    excerpt: "Presented our work on Geometric Deep Learning at the ICML 2024 Workshop on Topology, Algebra, and Geometry in ML.",
    content: `Last week I gave a talk at the ICML 2024 Workshop on Topology, Algebra, and Geometry in Machine Learning.

The talk covered our recent work on geometric deep learning, focusing on how we can design neural network architectures that respect the symmetries and structure of non-Euclidean data.

**Talk highlights:**
- Why Euclidean assumptions fail for hierarchical and graph-structured data
- How to define convolutions on Riemannian manifolds
- Applications to protein structure prediction and social networks

The slides and a video recording will be posted soon. Thanks to everyone who attended and asked great questions!`,
    tags: ["ICML", "Talk", "Geometric DL"],
  },
  {
    id: "phd-journey",
    slug: "reflections-on-phd-journey",
    title: "Reflections on My PhD Journey So Far",
    date: "2024-05-01",
    category: "Research",
    excerpt: "Some thoughts on what I've learned during the first three years of my PhD in AI research.",
    content: `As I pass the midpoint of my PhD, I wanted to share some reflections on the journey so far.

**What I've learned:**

1. **Research is non-linear.** My best ideas came from unexpected connections between seemingly unrelated papers. Keep reading widely.

2. **Collaboration is key.** Every major project I've worked on has been improved by collaborators with different perspectives.

3. **Writing is thinking.** The act of writing papers clarifies ideas. Start writing early, even if it's just notes.

4. **Balance depth and breadth.** Deep expertise in one area opens doors, but broad knowledge helps you see connections.

**What's next:**

I'm excited about exploring the connections between optimal transport and diffusion models. There's beautiful mathematics here that I think will lead to practical improvements in generative modeling.

Thanks to everyone who has supported me along the way – advisors, collaborators, and the broader research community.`,
    tags: ["PhD", "Advice", "Research"],
  },
  {
    id: "diffusion-tutorial",
    slug: "understanding-diffusion-models",
    title: "A Visual Guide to Diffusion Models",
    date: "2024-02-15",
    category: "Tutorial",
    excerpt: "An intuitive introduction to score-based diffusion models with interactive visualizations.",
    content: `Diffusion models have taken the AI world by storm, powering systems like DALL-E, Stable Diffusion, and Midjourney. But how do they actually work?

In this post, I'll give an intuitive explanation of the key ideas behind score-based diffusion models.

**The core idea:**

Imagine you have a complex distribution of data (like images). Diffusion models learn to reverse a gradual noising process:

1. **Forward process:** Slowly add noise until data becomes pure noise
2. **Reverse process:** Learn to denoise, step by step

The magic is in learning the "score function" – the gradient of the log probability density – which tells us which direction to move to reach higher probability regions.

**Why it works:**

The forward process is simple (just add Gaussian noise). The reverse process is where the neural network learns to predict and remove the noise.

Check out my interactive visualization tool [DiffusionViz](/projects) to see this in action!`,
    tags: ["Tutorial", "Diffusion Models", "Generative AI"],
  },
];

export const categories = ["Research", "Talk", "News", "Tutorial"] as const;
