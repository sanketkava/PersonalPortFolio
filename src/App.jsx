import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Add Helmet
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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
      <Analytics />
      <SpeedInsights />
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>Sanket Kava | RakshaStack Web & Mobile Developer</title>
        <meta
          name="description"
          content="Sanket Kava, founder of RakshaStack, is a top web and mobile app developer specializing in React.js, Node.js, and React Native."
        />
        <meta
          name="keywords"
          content="Sanket Kava, RakshaStack, Sanket, React Developer, Node.js Expert, React Native Developer, Full Stack Developer"
        />
      </Helmet>
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