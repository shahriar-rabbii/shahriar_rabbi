export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  github?: string;
  applink?: string;
}

export const projects: Project[] = [
  {
    id: "letanest",
    title: "LetANest",
    description: "Short-Term Lets & Festival Stays",
    image: "/webpage.png",
    tags: ["UX/UI", "Travel", "Booking"],
    link: "https://www.letanest.com/",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: "Go Roqit",
    title: "Go Roqit",
    description: "Find Work. Find Talent. All in One Place.",
    image: "/goroqit.png",
    tags: ["UX/UI", "Travel", "Booking"],
    link: "https://www.goroqit.com/",
    github: "https://github.com/yourusername/project1",
    applink: "https://apps.apple.com/us/app/go-roqit/id6771160907",
  },
];
