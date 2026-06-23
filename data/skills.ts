export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Design" },
];
