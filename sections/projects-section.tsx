"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

type Category = "all" | "web" | "mobile" | "design";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "design", label: "UI/UX Design" },
  ];

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="Explore my recent work and personal projects"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value as Category)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}