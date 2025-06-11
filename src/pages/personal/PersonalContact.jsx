
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PersonalContact = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 25 },
    in: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    out: { opacity: 0, y: -25, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10) newErrors.message = "Message should be at least 10 characters.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null}));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: (
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
            Validation Error
          </div>
        ),
        description: "Please correct the errors in the form.",
        variant: "destructive",
        className: "border-destructive text-destructive-foreground"
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call (replace with actual localStorage or Supabase logic later)
    try {
      console.log("Form data to save:", formData);
      localStorage.setItem(`contactForm_${Date.now()}`, JSON.stringify(formData));
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      setIsSubmitting(false);
      toast({
        title: (
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Message Sent Successfully!
          </div>
        ),
        description: "Thanks for reaching out, Sanket. I'll get back to you shortly.",
        variant: "default", 
        className: "bg-card border-accent-fg/60 text-card-foreground"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: (
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
            Submission Error
          </div>
        ),
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    { icon: <Mail className="h-5 w-5 text-accent-fg" />, label: "Email", value: "sanket@rakshastack.com", href: "mailto:sanketkava.dev@gmail.com" },
    { icon: <Phone className="h-5 w-5 text-accent-fg" />, label: "Phone", value: "+91 9978677047", href: "tel:+919978677047" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/sanket-kava/" },
  
  ];

  const InputField = ({ id, label, type = "text", value, onChange, placeholder, error }) => (
    <div className="relative">
      <label htmlFor={id} className="block text-xs font-medium text-primary-fg/75 mb-1.5" style={{fontFamily: "'Inter', sans-serif"}}>{label}</label>
      <input 
        type={type} 
        name={id} 
        id={id} 
        value={value} 
        onChange={onChange} 
        required 
        className={`w-full ${error ? 'border-destructive ring-destructive' : 'border-border focus:border-ring'}`}
        placeholder={placeholder} 
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );

  const TextAreaField = ({ id, label, value, onChange, placeholder, error }) => (
     <div className="relative">
      <label htmlFor={id} className="block text-xs font-medium text-primary-fg/75 mb-1.5" style={{fontFamily: "'Inter', sans-serif"}}>{label}</label>
      <textarea 
        name={id} 
        id={id} 
        rows="5" 
        value={value} 
        onChange={onChange} 
        required 
        className={`w-full resize-none ${error ? 'border-destructive ring-destructive' : 'border-border focus:border-ring'}`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      ></textarea>
      {error && <p id={`${id}-error`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );


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
            Let's <span className="text-accent-fg">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-fg/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>
            Have a project, an idea, or just want to chat about technology? I'm always open to new opportunities and collaborations. Reach out!
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-12 md:gap-16 items-start">
          <motion.div 
            className="lg:col-span-2 space-y-10"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>Direct Contact</h2>
              {contactMethods.map(method => (
                <motion.div 
                  key={method.label} 
                  className="flex items-center mb-5 p-4 glassmorphism-card hover:shadow-xl transition-shadow duration-300 ease-out"
                  whileHover={{ y: -3 }}
                >
                  {method.icon}
                  <div className="ml-4">
                    <span className="block text-sm text-primary-fg/70" style={{fontFamily: "'Inter', sans-serif"}}>{method.label}</span>
                    <a href={method.href} className="text-base text-primary-fg/95 hover:text-accent-fg transition-colors duration-200" style={{fontFamily: "'Inter', sans-serif", fontWeight: 500}}>{method.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>Find Me Online</h2>
              <div className="flex space-x-6">
                {socialLinks.map(social => (
                  <motion.a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="p-3 glassmorphism-card rounded-lg text-primary-fg/80 hover:text-accent-fg transition-all duration-250"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 glassmorphism-card p-8 md:p-10 shadow-xl"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary-fg" style={{fontFamily: "'Inter', sans-serif", fontWeight: 700}}>Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField id="name" label="Full Name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" error={errors.name} />
              <InputField id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" error={errors.email} />
              <InputField id="subject" label="Subject" value={formData.subject} onChange={handleChange} placeholder="Regarding your project / Inquiry" error={errors.subject} />
              <TextAreaField id="message" label="Message" value={formData.message} onChange={handleChange} placeholder="Tell me more about what you're looking for..." error={errors.message} />
              
              <Button type="submit" className="btn-primary-personal w-full text-lg py-3.5 mt-2 transform hover:shadow-2xl" disabled={isSubmitting}>
                {isSubmitting ? (
                  <motion.div className="flex items-center justify-center"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Send className="h-5 w-5 mr-2 animate-pulse" /> Sending...
                  </motion.div>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalContact;
