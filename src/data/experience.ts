export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Developer",
    company: "Insurance company",
    period: "06/2024 - Present",
    bullets: [
      "Designing and implementing REST APIs for a new frontend application.",
      "Supporting replacement of a legacy client system with scalable backend services.",
      "Contributing technical planning and code reviews to maintain quality standards."
    ]
  },
  {
    role: "Prompt Engineer, Generative AI",
    company: "B2B financial and HR services provider",
    period: "04/2024 - 06/2024",
    bullets: [
      "Tested prompts and gathered feedback for a beta generative AI tool.",
      "Identified improvement areas, reported issues, and contributed product insights.",
      "Helped improve user experience, performance, and client readiness."
    ]
  },
  {
    role: "Developer",
    company: "Road and railroad agency",
    period: "09/2023 - 04/2024",
    bullets: [
      "Worked across frontend and backend development on AWS-hosted infrastructure.",
      "Built functionality for imported image aggregation, metadata extraction, and UI presentation.",
      "Handled maintenance work and technical planning for upcoming development."
    ]
  },
  {
    role: "Information Architect",
    company: "Climate data provider",
    period: "05/2023 - 09/2023",
    bullets: [
      "Formed a comprehensive understanding of system needs.",
      "Created architectural blueprints for how the system should function and behave."
    ]
  },
  {
    role: "Developer, Generative AI",
    company: "B2B financial and HR services provider",
    period: "06/2023 - 08/2023",
    bullets: ["Created an Azure OpenAI proof-of-concept tool for developers' daily work."]
  },
  {
    role: "Scrum Master, Team Lead",
    company: "Telco operator",
    period: "06/2022 - 03/2023",
    bullets: [
      "Supported and managed a development team in a B2B Salesforce project.",
      "Helped create and configure products, offerings, and existing product structures."
    ]
  },
  {
    role: "Scrum Master, Java Developer, Second Tech Lead",
    company: "Telco operator",
    period: "05/2018 - 06/2022",
    bullets: [
      "Worked on a customer information system delivery under a SAFe train.",
      "Developed a Java middle-tier application integrating multiple systems for customer service.",
      "Facilitated the Scrum team, delivered features, improved CI/CD, and managed environments."
    ]
  },
  {
    role: "Junior Backend Java Developer",
    company: "Electronic contract product",
    period: "12/2017 - 05/2018",
    bullets: [
      "Built backend functionality for an electronic contract and smart contract web application.",
      "Worked on contract creation and signing flows using bank credentials for strong authentication."
    ]
  }
];
