"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Toaster } from "@/components/ui/sonner";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "furqanjee424@gmail.com",
      link: "mailto:furqanjee424@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 234 567 8901",
      link: "tel:+12345678901",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "New York, USA",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/20">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Reach out to discuss your project, job opportunities, or just to say hello. I'm open to collaborations and new challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-background border rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}