
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import PersonalNavbar from '@/components/personal/PersonalNavbar';
import PersonalFooter from '@/components/personal/PersonalFooter';
import PersonalBackToTop from '@/components/personal/PersonalBackToTop';
import PersonalHome from '@/pages/personal/PersonalHome';
import PersonalAbout from '@/pages/personal/PersonalAbout';
import PersonalProjects from '@/pages/personal/PersonalProjects';
import PersonalSkills from '@/pages/personal/PersonalSkills';
import PersonalContact from '@/pages/personal/PersonalContact';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PersonalHome />} />
        <Route path="/about" element={<PersonalAbout />} />
        <Route path="/projects" element={<PersonalProjects />} />
        <Route path="/skills" element={<PersonalSkills />} />
        <Route path="/contact" element={<PersonalContact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg text-primary-fg flex flex-col">
        <PersonalNavbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <PersonalFooter />
        <PersonalBackToTop />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
