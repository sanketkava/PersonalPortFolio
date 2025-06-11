import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Briefcase, GraduationCap, Globe } from 'lucide-react';

const PersonalContact = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 25 },
    in: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, y: -25, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen bg-primary-bg text-primary-fg section-padding pt-32 md:pt-40"
    >
      <div className="container mx-auto px-4">
        <motion.header className="text-center mb-16 md:mb-20" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-personal">
            Let's <span className="text-accent-fg">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-fg/80 max-w-3xl mx-auto leading-relaxed">
            I’m Sanket Kava, founder of RakshaStack. If you're interested in innovative digital solutions, cybersecurity strategies, or just want to collaborate on a project, you're in the right place.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div className="space-y-10" variants={itemVariants}>
            <div className="glassmorphism-card p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary-fg">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-fg" />
                  <a href="mailto:sanket@rakshastack.com" className="ml-4 text-primary-fg/90 hover:text-accent-fg">sanket@rakshastack.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-fg" />
                  <a href="tel:+919978677047" className="ml-4 text-primary-fg/90 hover:text-accent-fg">+91 9978677047</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent-fg" />
                  <span className="ml-4 text-primary-fg/80">Surat, Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary-fg">Professional Profile</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-accent-fg" />
                  <span className="ml-4 text-primary-fg/80">Founder & Full-Stack Developer at RakshaStack</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-accent-fg" />
                  <span className="ml-4 text-primary-fg/80">M.Sc. IT (Pursuing)</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-accent-fg" />
                  <a href="https://rakshastack.com" className="ml-4 text-primary-fg/90 hover:text-accent-fg">www.rakshastack.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="glassmorphism-card p-8 md:p-10 shadow-xl" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-fg">Let’s Collaborate</h2>
            <p className="text-primary-fg/80 leading-relaxed">
              Whether you’re looking for a development partner, need expert cybersecurity assessment, or just want to exchange ideas on tech trends — I’d love to hear from you. I offer:
            </p>
            <ul className="list-disc list-inside mt-4 text-primary-fg/80 space-y-1">
              <li>Custom Web & Mobile App Development</li>
              <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
              <li>Cybersecurity Consultation for Startups & Enterprises</li>
              <li>Ongoing Website & App Maintenance Services</li>
              <li>Tech Mentorship & Speaking Engagements</li>
            </ul>

            <p className="mt-6 text-primary-fg/80">
              Reach out via email, phone or connect with me on LinkedIn to get started.
            </p>

            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/sanket-kava/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 bg-accent-fg text-white rounded-lg hover:bg-accent-fg/90 transition"
              >
                <Linkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalContact;
