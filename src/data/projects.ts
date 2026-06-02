export type Project = {
  eyebrow: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    eyebrow: "Insurance platform",
    title: "REST API Development for Legacy Replacement",
    description:
      "Backend development for a new insurance application, designing REST APIs that power the frontend while supporting scalable future development and code quality through reviews."
  },
  {
    eyebrow: "Generative AI",
    title: "Developer AI Proof of Concept",
    description:
      "Azure OpenAI proof-of-concept work for developer productivity, exploring how generative AI can support everyday engineering tasks and internal tooling."
  },
  {
    eyebrow: "Roads and railways",
    title: "AWS Image Metadata Application",
    description:
      "Full-stack development on an AWS-hosted service for aggregating imported road and railroad images, extracting metadata, and presenting it through a user interface."
  },
  {
    eyebrow: "Telecom integration",
    title: "Customer Information Integration Layer",
    description:
      "Java development and second tech lead work on a middle-tier application integrating multiple systems to provide a 360-degree customer information view."
  },
  {
    eyebrow: "AI product testing",
    title: "Generative AI Feedback and Prompt Testing",
    description:
      "Prompt testing, issue reporting, and feedback gathering for a beta generative AI tool, helping improve functionality, user experience, and client readiness."
  },
  {
    eyebrow: "Electronic contracts",
    title: "Smart Contract Web Application",
    description:
      "Junior backend Java development on an electronic contract application with strong authentication for signing contracts using bank credentials."
  }
];
