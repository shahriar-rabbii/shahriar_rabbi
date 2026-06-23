export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "letanest",
    title: "LetANest",
    description: "Short-Term Lets & Festival Stays",
    image: "/letanest.png",
    tags: ["UX/UI", "Travel", "Booking"],
    link: "https://www.letanest.com/",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: "sporve",
    title: "Sporve",
    description: "A trading platform for car enthusiasts with a refined and trustworthy interface.",
    tags: ["UI Design", "Product Design", "Figma"],
    link: "https://www.figma.com/design/ZsxEWudXvUAADeGg3A5jHN/vsrikan1?node-id=92-65&t=cBEN59wpJ1uZBVV5-0",
  },
];
