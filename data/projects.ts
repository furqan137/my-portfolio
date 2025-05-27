export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "design" | "all";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "mern-social-media",
    title: "Social Connect",
    description: "A full-stack social media platform with real-time chat, post sharing, and user profiles.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    category: "web",
    github: "https://github.com/furqan137",
    demo: "#"
  },
  {
    id: "flutter-fitness-app",
    title: "FitTrack Mobile",
    description: "A cross-platform fitness tracking application with workout plans, progress tracking, and social sharing.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
    technologies: ["Flutter", "Firebase", "Dart", "Provider"],
    category: "mobile",
    github: "https://github.com/furqan137",
    demo: "#"
  },
  {
    id: "ecommerce-platform",
    title: "ShopEase",
    description: "A modern e-commerce platform with product catalog, shopping cart, and secure payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Supabase"],
    category: "web",
    github: "https://github.com/furqan137",
    demo: "#"
  },
  {
    id: "task-management-app",
    title: "TaskFlow",
    description: "A beautiful and intuitive task management application with drag-and-drop functionality.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    category: "web",
    github: "https://github.com/furqan137",
    demo: "#"
  },
  {
    id: "food-delivery-app",
    title: "QuickBite",
    description: "A Flutter-based food delivery application with restaurant listings, order tracking, and payment integration.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    category: "mobile",
    github: "https://github.com/furqan137",
    demo: "#"
  },
  {
    id: "dashboard-design",
    title: "Analytics Dashboard",
    description: "A modern analytics dashboard UI design with interactive charts and data visualization.",
    image: "https://images.pexels.com/photos/7682341/pexels-photo-7682341.jpeg",
    technologies: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    category: "design",
    github: "https://github.com/furqan137",
    demo: "#"
  }
];

export const skills = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Flutter", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "React Native", category: "mobile" },
  { name: "UI/UX Design", category: "design" },
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Jest", category: "testing" },
  { name: "Cypress", category: "testing" }
];