
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

const PersonalHero3D = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: 0.3 
      } 
    }
  };

  return (
    <motion.section 
      className="bg-secondary-bg section-padding relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-gradient-personal mb-4">
          Interactive 3D Showcase
        </h2>
        <p className="section-subtitle max-w-2xl mx-auto mb-10">
          This space is designed for an immersive Three.js 3D model. Imagine your creations brought to life here, offering a dynamic and engaging visual experience.
        </p>
        
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl shadow-2xl overflow-hidden glassmorphism-card p-4">
          <div className="absolute inset-0 flex items-center justify-center bg-primary-bg/50">
            <div className="text-center p-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Loader className="h-16 w-16 text-accent-fg opacity-80" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary-fg mb-2">3D Model Loading...</h3>
              <p className="text-primary-fg/70">
                Your interactive Three.js scene will appear here.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                (This is a placeholder. Integrate your <code>&lt;Canvas&gt;</code> component from <code>@react-three/fiber</code> here.)
              </p>
            </div>
          </div>
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-accent-bg/20 rounded-full filter blur-2xl opacity-50 animate-pulse floating-3d-subtle"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/15 rounded-full filter blur-2xl opacity-50 animate-pulse floating-3d-subtle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <p className="mt-10 text-sm text-muted-foreground max-w-xl mx-auto">
          To integrate your 3D model:
          <br />1. Ensure <code>three</code> and <code>@react-three/fiber</code> are installed.
          <br />2. Create your 3D scene component.
          <br />3. Replace the placeholder content above with your <code>&lt;Canvas&gt;</code> and 3D scene.
        </p>
      </div>
    </motion.section>
  );
};

export default PersonalHero3D;
