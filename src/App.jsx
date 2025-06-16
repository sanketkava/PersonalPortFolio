import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
  const siteUrl = "https://www.sanketkava.com";
  const ogImage = `${siteUrl}/images/og-banner.jpg`;
  const logo = `${siteUrl}/images/logo.webp`;
  
  return (
    <Router>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Sanket Kava - RakshaStack Founder | Web & App Developer</title>
        <meta
          name="description"
          content="Sanket Kava - Founder of RakshaStack. Award-winning React.js, Node.js & React Native developer specializing in high-performance web and mobile applications."
        />
        <meta
          name="keywords"
          content="Sanket Kava, RakshaStack Founder, React Expert, Node.js Developer, React Native Specialist, Full Stack Developer, JavaScript Expert, Web Application Development, Mobile App Development"
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sanket Kava" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Sanket Kava | RakshaStack Founder | React & React Native Expert" />
        <meta property="og:description" content="Founder of RakshaStack building cutting-edge web and mobile solutions with React ecosystem technologies." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Sanket Kava - RakshaStack Founder" />
        <meta property="og:site_name" content="Sanket Kava Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rakshastack" />
        <meta name="twitter:creator" content="@sanketkava" />
        <meta name="twitter:title" content="Sanket Kava | RakshaStack Founder" />
        <meta name="twitter:description" content="Full-stack developer specializing in React, React Native and Node.js solutions for startups and enterprises." />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Sanket Kava - RakshaStack Founder" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sanket Kava",
            "url": siteUrl,
            "image": logo,
            "sameAs": [
              "https://linkedin.com/in/sanketkava",
              "https://github.com/sanketkava",
              "https://twitter.com/sanketkava"
            ],
            "jobTitle": "Founder & Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "RakshaStack"
            },
            "description": "Founder of RakshaStack specializing in React.js, React Native and Node.js development",
            "alumniOf": "University of Mumbai"
          })}
        </script>
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