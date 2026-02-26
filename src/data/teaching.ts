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
  // {
  //   id: "ml-theory-2024",
  //   code: "CS 6780",
  //   title: "Advanced Machine Learning Theory",
  //   role: "Teaching Assistant",
  //   semester: "Fall",
  //   year: 2024,
  //   description: "Graduate-level course covering statistical learning theory, kernel methods, online learning, and optimization for machine learning.",
  //   topics: ["PAC Learning", "VC Dimension", "Kernel Methods", "Convex Optimization", "Online Learning"],
  //   materials: [
  //     { label: "Course Website", url: "#" },
  //   ],
  // },
  {
    id: "ml-1-ciencia-datos",
    code: "6590",
    title: "Machine Learning I",
    role: "Teaching Assistant",
    semester: "Spring/Summer",
    year: 2024,
    description: "This course covers the entire ML process, analysing some supervised and unsupervised techniques and some data pre-processing tasks, as well as simple model evaluation.",
    topics: ["Machine Learning", "Clustering", "Supervised Learning"]
  },
  {
    id: "cl-informatica",
    code: "3891",
    title: "Computational Learning",
    role: "Teaching Assistant",
    semester: "Fall/Winter",
    year: 2024,
    description: "This course covers theoretical and practical aspects of both machine learning and intelligent (non-statistical) data analysis.",
    topics: ["Machine Learning", "Deep Learning"]
  },
  {
    id: "dl-ciencia-datos",
    code: "6598",
    title: "Deep Learning",
    role: "Teaching Assistant",
    semester: "Spring/Summer",
    year: 2025,
    description: "In this course, we will provide an introduction to deep neural networks and devote separate topics to the types of deep networks and deep models that enable the AI applications that are giving rise to the new industrial revolution we are witnessing.",
    topics: ["Deep Learning", "Neural Networks", "Transformers", "GNNs"]
  },
  {
    id: "extml-ciencia-datos",
    code: "6607",
    title: "Machine Learning Extensions",
    role: "Teaching Assistant",
    semester: "Fall/Winter",
    year: 2025,
    description: "The course aims to provide students with an advanced and up-to-date overview of techniques that complement conventional machine learning. The course is structured into two thematic blocks. The first focuses on the study of fundamental bio-inspired metaheuristics. The second block addresses advanced deep learning techniques.",
    topics: ["GANs", "Fine-Tuning", "Loss Functions"]
  },
  {
    id: "dsint-informatica",
    code: "3890",
    title: "Intelligent Systems Development",
    role: "Teaching Assistant",
    semester: "Fall/Winter",
    year: 2025,
    description: "The aim of the course is to introduce advanced techniques for the development of intelligent systems. To this end, it will address aspects related to knowledge representation, explaining the main characteristics and components of ontologies, as well as a methodology for their construction. It will then analyse rule-based systems and the main techniques used in inference engines.",
    topics: ["Ontologies", "Rule-based systems", "Fuzzy Learning"]
  },
];
