
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Smartphone, Shield, Layers, MessageSquare } from 'lucide-react'; /* Added Shield */
import { Button } from '@/components/ui/button';
import PersonalHero3D from '@/components/personal/PersonalHero3D';

const PersonalHome = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  const specializations = [
    { icon: <Code className="h-12 w-12 text-accent-fg" />, title: "Web Application Development", description: "Crafting dynamic, scalable, and secure web applications using modern frameworks like React.js and Node.js. Focused on performance and user experience." },
    { icon: <Smartphone className="h-12 w-12 text-accent-fg" />, title: "Mobile Application Development", description: "Building cross-platform mobile apps with React Native for iOS and Android. Ensuring seamless performance, native feel, and intuitive interfaces." },
    { icon: <Shield className="h-12 w-12 text-accent-fg" />, title: "Cybersecurity Fundamentals", description: "Applying core cybersecurity principles to develop secure applications and understand threat landscapes. Passionate about ethical hacking concepts." },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-[100dvh] flex flex-col overflow-hidden" 
    >
      <section className="relative flex-grow flex items-center justify-center hero-gradient-personal section-padding pt-32 md:pt-40 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]"> {/* Adjusted min-height */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto" 
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-fg" 
              style={{fontFamily: "'Inter', sans-serif", fontWeight: 800}}
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0em" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hi, I'm <span className="text-gradient-personal">Sanket Kava</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-fg/80 mb-10 leading-relaxed" 
              style={{ fontFamily: "'Inter', sans-serif" }}
              variants={itemVariants}
            >
              A passionate <strong className="text-accent-fg font-semibold">Web & Mobile Developer</strong> with a keen interest in <strong className="text-accent-fg font-semibold">Cybersecurity</strong>. I design and build responsive, high-performance digital experiences that solve real-world problems and delight users.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              variants={itemVariants}
            >
              <Button asChild className="btn-primary-personal text-base md:text-lg transform hover:shadow-lg">
                <Link to="/projects">
                  Explore My Work <ArrowRight className="ml-2 h-4.5 w-4.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary-personal text-base md:text-lg transform hover:shadow-lg">
                <a href="/sanket-kava-resume.pdf" download>
                  Download CV <Download className="ml-2 h-4.5 w-4.5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
         <div className="absolute inset-0 z-0 opacity-15 overflow-hidden"> {/* Adjusted opacity */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-36 h-36 bg-accent-bg/40 rounded-full filter blur-3xl floating-3d-subtle"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-blue-400/25 rounded-full filter blur-3xl floating-3d-subtle" /* Changed color slightly */
            style={{animationDelay: '2.5s'}}
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

 

      <section className="bg-secondary-bg section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">My Core Specializations</h2>
            <p className="section-subtitle">I focus on building robust, scalable, and user-centric applications for web and mobile platforms, leveraging modern technologies and foundational cybersecurity principles.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((item, index) => (
              <motion.div
                key={index}
                className="glassmorphism-card p-8 text-center flex flex-col items-center hover:border-accent-fg/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12, boxShadow: "0 28px 55px -12px hsla(var(--background-primary)/ 0.45)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="p-4 bg-accent-bg/15 rounded-full mb-7 inline-block"
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3.5 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 600}}>{item.title}</h3>
                <p className="text-primary-fg/75 leading-relaxed text-sm" style={{fontFamily: "'Inter', sans-serif"}}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-bg section-padding">
        <div className="container mx-auto px-4 text-center">
           <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Ready to Build Something Amazing?</h2>
            <p className="section-subtitle mb-10">
              I'm always excited to collaborate on innovative projects and bring creative ideas to life. If you're looking for a dedicated developer with a passion for technology and a drive to learn, let's connect!
            </p>
            <Button asChild className="btn-primary-personal text-lg px-10 py-4 transform hover:shadow-xl">
              <Link to="/contact">
                Let's Discuss <MessageSquare className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PersonalHome;
