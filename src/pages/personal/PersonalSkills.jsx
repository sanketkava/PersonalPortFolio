
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Shield, GitMerge, Brain, Zap, Cog, Network } from 'lucide-react'; /* Added Shield, Network */

const SkillCategoryCard = ({ title, icon, skills, delay }) => (
  <motion.div 
    className="glassmorphism-card p-8 min-h-[300px] flex flex-col hover:border-accent-fg/50 transition-colors duration-300" 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -10, boxShadow: "0 22px 40px hsla(var(--background-primary)/ 0.4)"}}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay, type: "spring", stiffness: 90 }}
  >
    <div className="flex items-center mb-7">
      {React.cloneElement(icon, { className: "h-11 w-11 text-accent-fg mr-4.5 shrink-0" })}
      <h3 className="text-xl font-semibold text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 600}}>{title}</h3>
    </div>
    <ul className="space-y-3.5 flex-grow"> 
      {skills.map((skill, index) => (
        <motion.li 
          key={index} 
          className="flex items-center text-primary-fg/80 text-sm"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05, ease: "easeOut" }}
          style={{fontFamily: "'Inter', sans-serif"}}
        >
          <Zap className="h-4 w-4 text-accent-fg/60 mr-3.5 shrink-0" />
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const PersonalSkills = () => {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    in: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, scale: 0.98, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skillData = [
    {
      title: "Frontend Development",
      icon: <Code />,
      skills: ["HTML5, CSS3, Sass/SCSS", "JavaScript (ES6+), TypeScript", "React.js, Redux Toolkit", "Tailwind CSS, Framer Motion", "Responsive & Accessible UI/UX Design"]
    },
    {
      title: "Backend Development",
      icon: <Server />,
      skills: ["Node.js, Express.js", "PHP (Basic)", "RESTful API Design & Development", "Authentication (JWT, OAuth)", "Secure Coding Practices"]
    },
    {
      title: "Databases",
      icon: <Database />,
      skills: ["MongoDB (Mongoose)", "MySQL (Basic)", "Database Design & Optimization", "Data Security Fundamentals"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone />,
      skills: ["React Native", "Cross-Platform Development", "Expo CLI", "Mobile UI/UX Principles", "App Store Deployment Basics"]
    },
    {
      title: "Cybersecurity Skills",
      icon: <Shield />,
      skills: ["Cybersecurity Fundamentals", "Ethical Hacking Concepts (OWASP ZAP, Burp Suite basics)", "Network Security Basics (TCP/IP, Firewalls)", "Vulnerability Assessment (Introductory)", "Secure Software Development Lifecycle (SSDLC Awareness)"]
    },
    {
      title: "Tools & Methodologies",
      icon: <Cog />,
      skills: ["Git, GitHub (Version Control)", "Agile/Scrum (Basic Understanding)", "VS Code, Postman, DevTools", "Problem Solving & Debugging", "Linux Basics & CLI"]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen bg-primary-bg text-primary-fg section-padding pt-32 md:pt-40"
    >
      <div className="container mx-auto px-4">
        <motion.header 
          className="text-center mb-16 md:mb-20"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-personal" style={{fontFamily: "'Inter', sans-serif", fontWeight: 800}}>
            My Technical <span className="text-accent-fg">Arsenal</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-fg/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
            A comprehensive overview of the technologies, tools, and methodologies I employ to develop innovative, effective, and secure digital solutions.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillData.map((category, index) => (
            <SkillCategoryCard 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.08} 
            />
          ))}
        </div>

        <motion.section 
          className="mt-20 md:mt-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
            <Brain className="h-14 w-14 text-accent-fg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>
            Driven by Curiosity, Growth & Security
          </h2>
          <p className="text-base text-primary-fg/75 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
            I am a firm believer in lifelong learning. The ever-evolving tech landscape, especially the intersection of development and security, excites me. I am always eager to explore new technologies, refine my skills, and embrace challenges that push my boundaries to deliver high-quality, impactful, and resilient work.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PersonalSkills;
