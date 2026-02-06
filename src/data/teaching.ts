export interface Course {
  id: string;
  code: string;
  title: string;
  role: "Instructor" | "Teaching Assistant" | "Guest Lecturer";
  semester: string;
  year: number;
  description: string;
  topics?: string[];
  materials?: {
    label: string;
    url: string;
  }[];
}

export const courses: Course[] = [
  {
    id: "ml-theory-2024",
    code: "CS 6780",
    title: "Advanced Machine Learning Theory",
    role: "Teaching Assistant",
    semester: "Fall",
    year: 2024,
    description: "Graduate-level course covering statistical learning theory, kernel methods, online learning, and optimization for machine learning.",
    topics: ["PAC Learning", "VC Dimension", "Kernel Methods", "Convex Optimization", "Online Learning"],
    materials: [
      { label: "Course Website", url: "#" },
    ],
  },
  {
    id: "deep-learning-2024",
    code: "CS 4780",
    title: "Introduction to Deep Learning",
    role: "Teaching Assistant",
    semester: "Spring",
    year: 2024,
    description: "Undergraduate course introducing neural networks, backpropagation, CNNs, RNNs, transformers, and modern deep learning practices.",
    topics: ["Neural Networks", "CNNs", "RNNs", "Transformers", "Generative Models"],
  },
  {
    id: "math-foundations-2023",
    code: "MATH 4310",
    title: "Mathematical Foundations of ML",
    role: "Guest Lecturer",
    semester: "Fall",
    year: 2023,
    description: "Delivered two guest lectures on geometric perspectives in machine learning and applications of differential geometry to deep learning.",
    topics: ["Riemannian Geometry", "Information Geometry", "Natural Gradient"],
  },
  {
    id: "linear-algebra-2023",
    code: "MATH 2940",
    title: "Linear Algebra for Engineers",
    role: "Teaching Assistant",
    semester: "Spring",
    year: 2023,
    description: "Large undergraduate course covering vector spaces, linear transformations, eigenvalues, and applications to engineering problems.",
    topics: ["Vector Spaces", "Matrix Decompositions", "Eigenvalues", "SVD"],
  },
  {
    id: "probability-2022",
    code: "CS 4850",
    title: "Mathematical Foundations of Computing",
    role: "Teaching Assistant",
    semester: "Fall",
    year: 2022,
    description: "Introduction to probability theory, random variables, and their applications to computer science algorithms and analysis.",
    topics: ["Probability", "Random Variables", "Markov Chains", "Randomized Algorithms"],
  },
];
