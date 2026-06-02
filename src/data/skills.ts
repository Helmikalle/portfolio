export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "SOAP APIs", "JPA / Hibernate", "JUnit"]
  },
  {
    title: "Cloud & Delivery",
    items: ["AWS", "AWS Lambda", "S3", "EC2", "CloudFormation", "CodePipeline", "CloudWatch", "CI/CD"]
  },
  {
    title: "Frontend & Data",
    items: ["React", "JavaScript", "Vaadin", "PostgreSQL", "Oracle", "SQL"]
  },
  {
    title: "Development Tools",
    items: ["Git", "IntelliJ IDEA", "Jira", "Confluence", "AWS CLI", "Linux"]
  },
  {
    title: "AI, Integration & Automation",
    items: ["Azure OpenAI", "GitHub Copilot", "Prompt Engineering", "Apache Kafka", "Apigee"]
  },
  {
    title: "Leadership & Methods",
    items: [
      "Scrum",
      "SAFe",
      "Team Leading",
      "Project Management",
      "Code Reviews",
      "Technical Planning",
      "PSM I",
      "AWS Certified Developer - Associate"
    ]
  }
];
