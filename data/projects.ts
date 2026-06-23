export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A brief description of your amazing project and what it solves.",
    image: "/images/project1.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  // Add more projects here
];
