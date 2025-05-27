"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";
import { skills } from "@/data/projects";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know my background, skills, and experience"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Software Engineer and Full Stack Developer with expertise in building modern web and mobile applications. With a strong foundation in the MERN stack and Flutter, I create beautiful, functional, and user-centered digital experiences.
              </p>
              <p>
                My journey in software development started with a fascination for creating interfaces that are not only visually appealing but also intuitive and accessible. This led me to explore both front-end and back-end technologies, as well as UI/UX design principles.
              </p>
              <p>
                I enjoy tackling complex problems and transforming ideas into reality through clean, efficient code. My goal is to continue growing as a developer while creating impactful solutions that make a difference.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Frontend Development</h4>
                <p className="text-muted-foreground mb-4">
                  Building responsive, performant user interfaces with modern JavaScript frameworks.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Backend Development</h4>
                <p className="text-muted-foreground mb-4">
                  Creating robust APIs and server-side applications with Node.js and Express.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Mobile Development</h4>
                <p className="text-muted-foreground mb-4">
                  Developing cross-platform mobile applications with Flutter and Dart.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">UI/UX Design</h4>
                <p className="text-muted-foreground mb-4">
                  Designing intuitive user experiences and attractive interfaces with Figma and Adobe XD.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">My Skills</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={item}>
                <SkillBadge 
                  name={skill.name} 
                  className={cn({
                    "bg-primary/10 hover:bg-primary/20": skill.category === "frontend",
                    "bg-secondary/10 hover:bg-secondary/20": skill.category === "backend",
                    "bg-accent/10 hover:bg-accent/20": skill.category === "mobile",
                    "bg-muted hover:bg-muted/80": skill.category === "design" || skill.category === "tools" || skill.category === "testing",
                  })}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}