
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; /* Added useNavigate */
import { Github, Linkedin, Mail, ArrowUpCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PersonalFooter = () => {
  const navigate = useNavigate(); /* Initialize useNavigate */

  const socialLinks = [
    // { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com/sanketkava' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/in/sanket-kava/' },
    // { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/sanketkava' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, url: 'mailto:sanket@rakshastack.com' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleQuickLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-secondary-bg text-primary-fg/70 border-t border-neutral-divider/25 section-padding !pb-10 !pt-14"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 items-center">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3.5 mb-4.5 group">
              {/* <motion.img 
                src="/personal-logo.svg" 
                alt="Sanket Kava Logo" 
                className="h-12 w-12"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{type: "spring", stiffness: 250}}
              /> */}
              <span className="text-2xl font-bold text-gradient-personal group-hover:brightness-115 transition-all duration-200">Sanket Kava</span>
            </Link>
            <p className="text-center md:text-left text-sm max-w-xs leading-relaxed">
              Passionate Developer & Security Enthusiast crafting impactful digital solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-lg font-semibold mb-4.5 text-primary-fg/90">Quick Links</span>
            <ul className="space-y-2.5 text-center text-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleQuickLinkClick(link.path)} 
                    className="hover:text-accent-fg transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-end"
          >
            <span className="text-lg font-semibold mb-4.5 text-primary-fg/90">Connect With Me</span>
            <div className="flex space-x-5 mb-7">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-primary-fg/60 hover:text-accent-fg transition-all duration-200"
                  whileHover={{ scale: 1.2, y: -2.5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="flex items-center text-sm text-primary-fg/60 hover:text-accent-fg transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-y-0.5" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-neutral-divider/25 pt-10 text-center"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sanket Kava. All rights reserved.
          </p>
          
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default PersonalFooter;
