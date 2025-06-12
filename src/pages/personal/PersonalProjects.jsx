
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Layers, Palette, Code, Smartphone } from 'lucide-react'; /* Added Smartphone */
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layoutId={`project-card-${project.id}`}
    onClick={() => onClick(project)}
    className="glassmorphism-card overflow-hidden cursor-pointer group h-full flex flex-col" /* Ensured full height for flex */
    whileHover={{ y: -10, boxShadow: "0 25px 50px -12px hsla(var(--background-primary)/ 0.4)" }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
  >
    <div className="relative h-60 overflow-hidden"> {/* Increased height */}
      <img  
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <span className="absolute top-3.5 right-3.5 px-3 py-1.5 bg-accent-bg/90 text-primary-foreground text-xs font-semibold rounded-md backdrop-blur-sm shadow-sm">
        {project.category}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
      <h3 className="text-2xl font-bold mb-2.5 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>{project.title}</h3>
      <p className="text-primary-fg/75 text-sm mb-4 leading-relaxed flex-grow" style={{fontFamily: "'Inter', sans-serif"}}>{project.shortDescription}</p> {/* Added flex-grow */}
      <div className="flex flex-wrap gap-2 mt-auto"> {/* mt-auto to push tags to bottom */}
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-secondary-bg text-xs text-primary-fg/80 rounded-md font-medium">{tag}</span>
        ))}
        {project.tags.length > 3 && <span className="px-2.5 py-1 bg-secondary-bg text-xs text-primary-fg/80 rounded-md font-medium">+{project.tags.length - 3} more</span>}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/85 backdrop-blur-lg z-[110] flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={(e) => e.stopPropagation()}
      className="bg-secondary-bg rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-divider/30"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="relative h-80"> {/* Increased height */}
        <img  
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-5 right-5 bg-black/60 hover:bg-black/80 text-primary-fg rounded-full h-10 w-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-personal mb-3" style={{fontFamily: "'Inter', sans-serif", fontWeight: 800}}>{project.title}</h2>
        <span className="text-sm text-accent-fg font-semibold mb-6 block tracking-wide" style={{fontFamily: "'Inter', sans-serif"}}>{project.category.toUpperCase()}</span>
        <p className="text-primary-fg/80 mb-8 leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>{project.longDescription}</p>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-primary-fg mb-4" style={{fontFamily: "'Inter', sans-serif", fontWeight: 600}}>Core Technologies:</h4>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map(tag => (
              <motion.span 
                key={tag} 
                className="px-3.5 py-1.5 bg-neutral-divider/25 text-sm text-primary-fg/90 rounded-md font-medium"
                whileHover={{ backgroundColor: "hsl(var(--accent-bg) / 0.2)"}}
                transition={{duration: 0.2}}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

      
      </div>
    </motion.div>
  </motion.div>
);


const PersonalProjects = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, y: -30, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projectsData = [
{
  "id": 1,
  "title": "Online Tour Booking System",
  "category": "Web Development",
  "imageUrl": "./Hotel.png",
  "shortDescription": "A comprehensive tour booking platform with a modern tech stack and user-friendly features.",
  "longDescription": "This advanced tour booking system, developed using React, Node.js, and MongoDB, provides a seamless experience for users to browse and book tours. Key features include a dynamic tour search and filter system, secure payment processing via Stripe, an admin dashboard for managing tours and bookings, real-time availability updates, and a responsive design optimized for all devices.",
  "tags": ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Stripe API", "Redux", "API Integration"],

} ,
{
  "id": 2,
  "title": "PG Life Management System",
  "category": "Web Development",
  "imageUrl": "/pg.png",
  "shortDescription": "A comprehensive platform for managing paying guest (PG) accommodations with a user-friendly interface.",
  "longDescription": "This PG Life Management System, built with React, Node.js, and MongoDB, streamlines the process of finding and managing paying guest accommodations. Key features include a robust search and filter system for PG listings, secure booking and payment integration via Stripe, a tenant and owner dashboard for managing bookings and properties, real-time availability updates, and a responsive design optimized for all devices.",
  "tags": ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Stripe API", "Redux", "API Integration"],
  "liveLink": "#",
  "repoLink": "#"
}   ,
{
  "id": 3,
  "title": "Furniture App",
  "category": "Mobile Development",
  "imageUrl": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "shortDescription": "A modern e-commerce platform for furniture shopping with an intuitive user experience.",
  "longDescription": "The Furniture App is a feature-rich e-commerce platform designed for seamless furniture shopping. Built with React and Node.js (Express.js), it offers a dynamic product catalog, advanced search and filter options, secure payment integration via Stripe, a user-friendly cart and wishlist system, and an admin dashboard for inventory management. The platform emphasizes a clean UI, responsive design for all devices, and a robust backend architecture for scalability.",
  "tags": ["React Native", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS", "Redux", "API Integration"],
  "liveLink": "#",
  "repoLink": "#"
},
{
  "id": 4,
  "title": "Home Service Booking Mobile",
  "category": "Mobile Development",
  "imageUrl": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "shortDescription": "A cross-platform mobile app for booking home services, built with React Native.",
  "longDescription": "This Home Service Booking Mobile App, developed using React Native and Expo, provides a seamless platform for users to book various home services such as cleaning, plumbing, and electrical repairs. Features include a user-friendly service search and booking system, real-time service provider availability, secure payment integration, user profiles, service history tracking, push notifications, and a responsive design optimized for both iOS and Android.",
  "tags": ["React Native", "Cli", "Firebase (Backend)", "Redux", "Mobile UI/UX", "Stripe API", "API Integration"],
  "liveLink": "#",
  "repoLink": "#"
},
{
  "id": 5,
  "title": "Hotel Service Booking Mobile",
  "category": "Mobile Development",
  "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "shortDescription": "A cross-platform mobile app for booking hotel services, built with React Native.",
  "longDescription": "This Hotel Service Booking Mobile App, developed using React Native and Expo, offers a seamless platform for users to book hotel rooms and services such as dining, spa, and concierge. Features include a dynamic hotel search and filter system, real-time room availability, secure payment processing via Stripe, user profiles with booking history, push notifications for booking updates, and a responsive design optimized for both iOS and Android.",
  "tags": ["React Native", "Expo", "Firebase (Backend)", "Redux", "Mobile UI/UX", "Stripe API", "API Integration"],
  "liveLink": "#",
  "repoLink": "#"
},
 {
  "id": 6,
  "title": "Insurance Booking App",
  "category": "Mobile Development",
  "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "shortDescription": "A cross-platform mobile app for purchasing and managing insurance policies, built with React Native.",
  "longDescription": "The Insurance Booking App, developed using React Native and Expo, provides a seamless platform for users to browse, purchase, and manage insurance policies such as health, auto, and home insurance. Key features include a dynamic policy search and comparison tool, secure payment integration via Stripe, user profiles with policy history and claim tracking, push notifications for policy updates, and a responsive design optimized for both iOS and Android.",
  "tags": ["React Native", "Expo", "Firebase (Backend)", "Redux", "Mobile UI/UX", "Stripe API", "API Integration"],
  "liveLink": "#",
  "repoLink": "#"
},
{
  id: 7,
  title: "Advanced Web Vulnerability Scanner",
  category: "Cyber Security",
  imageUrl: "./avs.png",
  shortDescription: "A tool to scan web applications for vulnerabilities like SQL Injection and XSS.",
  longDescription: "This Advanced Web Vulnerability Scanner, built with Python and OWASP ZAP, automates the detection of common web application vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), and misconfigurations. Features include a user-friendly CLI interface, automated scanning of target URLs, detailed vulnerability reports with remediation suggestions, and integration with a SQLite database for storing scan results. The tool supports ethical hacking practices and is designed for educational use in controlled environments.",
  tags: ["Python", "OWASP ZAP", "Burp Suite", "Web Application Security", "Vulnerability Assessment", "SQL Injection", "XSS", "SQLite"],
  liveLink: "#",
  repoLink: "#"
},
{
  id: 8,
  title: "Ransomware Simulator",
  category: "Cyber Security",
  imageUrl: "./ransomware.png",
  shortDescription: "A controlled ransomware simulation to study encryption and decryption techniques.",
  longDescription: "This Ransomware Simulator, developed in Python for educational purposes, demonstrates ransomware behavior by encrypting files with AES-256 and providing a decryption mechanism. Features include a controlled environment for simulating file encryption, a user-friendly CLI for testing, secure key storage, and detailed logs of encryption/decryption processes. The project is designed to teach ransomware countermeasures and recovery techniques, such as those used in tools like Emsisoft Decryptor, without causing harm.",
  tags: ["Python", "PyCryptodome", "AES-256", "Ransomware", "Cybersecurity", "Ethical Hacking", "File Encryption"],
  liveLink: "#",
  repoLink: "#"
}
 ];
 

  const filters = ["All", "Web Development", "Mobile Development", "Cyber Security"];
  const filterIcons = { "All": <Layers />, "Web Development": <Code />, "Mobile Development": <Smartphone />, "Cyber Security": <Palette /> };

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

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
            My Creative <span className="text-accent-fg">Creations</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-fg/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
            A showcase of my diverse projects, highlighting my skills in web development, mobile app creation, and immersive 3D experiences.
          </p>
        </motion.header>

        <motion.div 
          className="flex flex-wrap justify-center gap-3.5 md:gap-4 mb-12 md:mb-16"
          variants={itemVariants}
        >
          {filters.map(f => (
            <Button
              key={f}
              onClick={() => setFilter(f)}
              variant={filter === f ? 'default' : 'outline'}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 flex items-center shadow-sm
                ${filter === f ? 'btn-primary-personal' : 'btn-secondary-personal !border-neutral-divider/60 !text-primary-fg/75 hover:!border-accent-fg hover:!text-accent-fg'}`}
            >
              <span className="mr-2">{React.cloneElement(filterIcons[f], {className: "h-4.5 w-4.5"})}</span>
              {f}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={{ in: { transition: { staggerChildren: 0.08 }}}}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="h-full" /* Ensure motion.div takes full height for card */
              >
                <ProjectCard project={project} onClick={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.p 
            className="text-center text-primary-fg/70 mt-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No projects found for this category yet. Stay tuned!
          </motion.p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PersonalProjects;
