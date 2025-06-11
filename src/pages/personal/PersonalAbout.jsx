
import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap, Award, Lightbulb, BookOpen, Calendar, Target, TrendingUp, Users, ShieldCheck } from 'lucide-react'; /* Added ShieldCheck */

const PersonalAbout = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -40 },
    in: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, duration: 0.7, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, x: 40, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const mySkills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", 
    "PHP", "Java", "C++", "Python", "MySQL", "React Native", "Git & GitHub", "Redux Toolkit", "Tailwind CSS",
    "Cybersecurity Fundamentals", "Ethical Hacking Basics", "Network Security Concepts", "Vulnerability Assessment (Intro)"
  ];

  const timelineEvents = [
    { year: "2022 - 2025", title: "B.Sc. in Information Technology", institution: "K.S. School Of Business Management", description: "Pursuing a comprehensive Bachelor's degree, focusing on software engineering, database systems, network security, and cybersecurity principles. Building a strong theoretical and practical foundation in IT and secure development practices." },
    { year: "Ongoing", title: "Full-Stack & Security Journey", description: "Continuously developing projects using MERN stack and React Native, while actively learning and applying cybersecurity concepts, ethical hacking techniques, and secure coding practices." },
    { year: "Future Aspirations", title: "Innovate Securely & Lead", description: "Aiming to contribute to cutting-edge tech projects with a strong emphasis on security. Eager to specialize in secure software development or cybersecurity, embrace leadership roles, and mentor aspiring developers in building resilient systems." },
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
        <header className="text-center mb-16 md:mb-24">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-personal"
            variants={itemVariants}
            style={{fontFamily: "'Inter', sans-serif", fontWeight: 800}}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary-fg/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
            style={{fontFamily: "'Inter', sans-serif"}}
          >
            Delving into my journey as a developer with a growing passion for cybersecurity, my educational background, core philosophies, and the technical skills I bring to every project.
          </motion.p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-28 items-center">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 70 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accent-bg to-blue-600 opacity-60 group-hover:opacity-80 filter blur-2xl transition-all duration-500 animate-pulse"></div>
                <img  
                  alt="Sanket Kava - Professional Portrait with a tech background" 
                  className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-secondary-bg/60"
                 src="/photo.jpg" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>
              Sanket Kava: <span className="text-accent-fg">Developer & Security Enthusiast</span>
            </h2>
            <p className="text-base text-primary-fg/80 mb-4 leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
              Hello! I'm Sanket Kava, a B.Sc. IT student (2022-2025) with a strong passion for crafting robust web/mobile applications and a burgeoning interest in cybersecurity. My academic journey and personal projects are fueled by a desire to build secure, efficient, and user-centric digital solutions.
            </p>
            <p className="text-base text-primary-fg/80 mb-6 leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
              I thrive on tackling complex challenges, continuously expanding my MERN stack and React Native skills, while actively exploring cybersecurity principles and ethical hacking. My goal is to write clean code that forms the backbone of applications providing exceptional, secure user experiences.
            </p>
            <div className="flex flex-wrap gap-3.5">
              {[
                { icon: <BookOpen className="h-4.5 w-4.5 mr-1.5" />, text: "B.Sc. IT Candidate" },
                { icon: <ShieldCheck className="h-4.5 w-4.5 mr-1.5" />, text: "Security-Minded" },
                { icon: <Zap className="h-4.5 w-4.5 mr-1.5" />, text: "Proactive Learner" },
                { icon: <Lightbulb className="h-4.5 w-4.5 mr-1.5" />, text: "Creative Problem-Solver" },
              ].map(item => (
                <motion.span 
                  key={item.text} 
                  className="flex items-center px-3.5 py-2 bg-secondary-bg rounded-lg text-sm font-medium text-primary-fg/85 shadow-md hover:shadow-accent-bg/20"
                  whileHover={{ y: -2.5, backgroundColor: "hsl(var(--accent-bg) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{fontFamily: "'Inter', sans-serif"}}
                >
                  {item.icon} {item.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section 
          className="mb-20 md:mb-28"
          variants={itemVariants}
        >
          <h2 className="section-title text-center mb-12 md:mb-16">My Journey & Aspirations</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-neutral-divider/40 -translate-x-1/2 rounded-full"></div>
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className={`flex md:items-center mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="w-full md:w-[calc(50%-2.2rem)]"> {/* Adjusted width slightly */}
                  <div className={`glassmorphism-card p-6 md:p-7 shadow-lg hover:shadow-accent-bg/15 transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center mb-2.5 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      {index === timelineEvents.length - 1 ? <TrendingUp className="h-5 w-5 text-accent-fg mr-2.5"/> : <Calendar className="h-5 w-5 text-accent-fg mr-2.5"/>}
                      <h3 className="text-lg font-semibold text-accent-fg">{event.year}</h3>
                    </div>
                    <h4 className="text-base font-medium text-primary-fg mb-2.5" style={{fontFamily: "'Inter', sans-serif", fontWeight: 600}}>{event.title}</h4>
                    {event.institution && <p className="text-xs text-primary-fg/60 mb-2" style={{fontFamily: "'Inter', sans-serif"}}>{event.institution}</p>}
                    <p className="text-sm text-primary-fg/75 leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>{event.description}</p>
                  </div>
                </div>
                <motion.div 
                  className="hidden md:flex w-8 h-8 rounded-full bg-accent-bg items-center justify-center text-primary-foreground font-semibold text-xs mx-auto relative z-10 shadow-md"
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300}}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
        >
          <h2 className="section-title text-center mb-12 md:mb-16">Core Technical Skills</h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
            variants={{ in: { transition: { staggerChildren: 0.04 }}}}
          >
            {mySkills.map((skill) => (
              <motion.span 
                key={skill} 
                className="px-4 py-2 md:px-5 md:py-2.5 bg-secondary-bg text-primary-fg/90 rounded-lg text-sm md:text-base font-medium shadow-md hover:bg-accent-bg hover:text-primary-foreground transition-all duration-200 cursor-default transform hover:scale-105 hover:shadow-lg hover:shadow-accent-bg/20"
                variants={itemVariants}
                style={{fontFamily: "'Inter', sans-serif"}}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PersonalAbout;
