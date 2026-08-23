export interface ReviewingActivity {
  id: string;
  venue: string;
  role: string;
  years: number[];
}

export interface ConferenceParticipation {
  id: string;
  name: string;
  shortName?: string;
  role: string;
  location?: string;
  year: number;
}

export interface OtherActivity {
  id: string;
  title: string;
  organization: string;
  description: string;
  years: string;
}

export const reviewingActivities: ReviewingActivity[] = [
  {
    id: "ijcai-pc",
    venue: "International Joint Conference on Artificial Intelligence (IJCAI-ECAI)",
    role: "Program Committee",
    years: [2026],
  },
];

export const conferenceParticipations: ConferenceParticipation[] = [
  {
    id: "ijcai-ecai-paper",
    name: "International Joint Conference on Artificial Intelligence and European Conference on Artificial Intelligence (IJCAI-ECAI)",
    shortName: "IJCAI-ECAI",
    role: "Oral and Poster Presentation",
    year: 2026,
  },
  {
    id: "eccb-poster",
    name: "Intelligent Systems for Molecular Biology (ISMB) and European Conference on Computational Biology (ECCB)",
    shortName: "ISMB/ECCB",
    role: "Poster Presentation",
    location: "Liverpool, England",
    year: 2025,
  },
  {
    id: "caepia-doctoral",
    name: "Congreso Asociación Española de Inteligencia Artificial (CAEPIA)",
    shortName: "CAEPIA Doctoral Consortium",
    role: "Doctoral Consortium",
    location: "A Coruña, Spain",
    year: 2024,
  },
];

export const otherActivities: OtherActivity[] = [
//  {
//    id: "iscb-member",
//    title: "Member",
//    organization: "International Society for Computational Biology (ISCB)",
//    description: "Active member contributing to the computational biology community.",
//    years: "2023 -- present",
//  },
];
