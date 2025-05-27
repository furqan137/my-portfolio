"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative py-20 md:py-0"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="text-primary font-medium mb-3">Hi there, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Furqan Zafar
          </h1>
          <AnimatedText
            text="Software Engineer & Full Stack Developer"
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
          />
          <p className="text-muted-foreground mb-8 max-w-md">
            I craft beautiful, functional, and user-centered digital experiences
            with modern technologies and clean code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-muted/50 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Furqan Zafar"
                fill
                sizes="(max-width: 768px) 18rem, 24rem"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-10 w-10 text-muted-foreground" />
        </Link>
      </motion.div>
    </section>
  );
}