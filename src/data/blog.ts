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
//   {
//     id: "neurips-2024",
//     slug: "neurips-2024-paper-accepted",
//     title: "Paper Accepted at NeurIPS 2024!",
//     date: "2024-09-15",
//     category: "News",
//     excerpt: "Excited to announce that our paper on Neural Theorem Proving has been accepted at NeurIPS 2024.",
//     content: `I'm thrilled to share that our paper "Neural Theorem Proving with Reinforcement Learning" has been accepted at NeurIPS 2024!
//
// This work represents two years of research combining transformer architectures with Monte Carlo Tree Search for automated theorem proving. We show that our approach significantly outperforms existing methods on standard benchmarks.
//
// I'll be presenting the paper at the conference in December. If you're attending, come say hi!
//
// **Key contributions:**
// - Novel integration of language models with proof search
// - State-of-the-art results on Metamath and Lean benchmarks
// - Open-source implementation and pretrained models
//
// More details coming soon. Stay tuned for the camera-ready version and code release.`,
//     tags: ["NeurIPS", "Publication", "Theorem Proving"],
//   },
];

export const categories = ["Research", "Talk", "News", "Tutorial"] as const;
