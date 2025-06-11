import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, MessageSquare, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5 mr-2" /> },
    { name: 'About', path: '/about', icon: <User className="h-5 w-5 mr-2" /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase className="h-5 w-5 mr-2" /> },
    { name: 'Skills', path: '/skills', icon: <Star className="h-5 w-5 mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <MessageSquare className="h-5 w-5 mr-2" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    initial: { y: -80, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: "easeInOut", staggerChildren: 0.04 } },
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, y: -8 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen ? 'bg-secondary-bg/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2.5 group">
<img
  src="/logo.jpg"
  alt="Sanket Kava Logo"
  className="h-11 w-11 rounded-xl transition-transform duration-300 group-hover:scale-105"
/>
            <span className={`text-2xl font-bold text-gradient-personal transition-colors duration-300 group-hover:brightness-110`}>
              Sanket Kava
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={`relative group px-3.5 py-2 text-base font-medium transition-colors duration-200
                  ${location.pathname === item.path ? 'text-accent-fg' : 'text-primary-fg/70 hover:text-accent-fg'}
                `}
              >
                <Link to={item.path}>
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[1.5px] bg-accent-fg scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-center
                    ${location.pathname === item.path ? 'scale-x-100' : ''}
                  `}></span>
                </Link>
              </Button>
            ))}
          
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-primary-fg/70 hover:text-accent-fg focus:outline-none focus:ring-1 focus:ring-accent-fg"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: isOpen ? -45 : 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 45 : -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-0.5 sm:px-3 border-t border-neutral-divider/15">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileNavItemVariants}>
                  <Button
                    variant="ghost"
                    asChild
                    className={`w-full justify-start px-3 py-2.5 text-base font-medium rounded-md
                      ${location.pathname === item.path ? 'bg-accent-bg/15 text-accent-fg' : 'text-primary-fg/70 hover:bg-accent-bg/10 hover:text-accent-fg'}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.path} className="flex items-center">
                      {item.icon}
                      {item.name}
                    </Link>
                  </Button>
                </motion.div>
              ))}
              <motion.div variants={mobileNavItemVariants} className="pt-1.5">
                <Button className="btn-primary-personal w-full py-2.5">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default PersonalNavbar;