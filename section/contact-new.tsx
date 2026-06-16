"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, LinkedinIcon, Mail,  MapPin, Phone, Send } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Animation variants with smoother easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] // Smoother cubic bezier
    } 
  },
};

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('submitted') === 'true') {
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 5000);
    }
  }, []);

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-3"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-8"
            >
              Have a question or want to discuss how we can help your business? Reach out to us using the contact form or the information below.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6 mb-8"
            >
            <div className="space-y-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Contact us</p>
                  <div className="flex flex-row gap-2">
                  <Phone />                 
                    <p>09178324735 / 09988462397 / 8812-2656 / 8812-2148 / 8362-8794</p>
                  </div>
                </div>    

                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <div className="flex flex-row gap-2">
                  <Mail />                 
                    <p>sales@divergentechphil.com / dtpisales2014@gmail.com</p>
                  </div>
                </div>   

                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Visit us</p>
                  <div className="flex flex-row gap-2">
                    <MapPin/>
                    <p>Unit 3B Cafel Bldg., 7505 Santillan St. Brgy. Pio Del Pilar 1230 Makati, Philippines</p></div>
                </div>   
            </div>

            
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/divergent-phil-3a72a7200/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.facebook.com/DivergentPOS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/divergentechphils"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Instagram />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <Card className="p-8 bg-card shadow-xl">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-left text-primary"
              >
                Send Us a Message
              </motion.h3>
              <motion.form
                variants={containerVariants}
                action="/process-form.php"
                method="POST"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Your Name</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="rounded-xl h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Contact Number</Label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09111111111"
                      className="rounded-xl h-12"
                    />
                  </div>
                
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@mail.com"
                      className="rounded-xl h-12"
                    />
                  </div>
                
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Subject</Label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>
              
                <div className="mb-6">
                  <Label className="text-muted-foreground">Message</Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="rounded-xl"
                    placeholder="Your message here..."
                  />
                </div>
              
                <div className="flex flex-col gap-3">
                  <Button 
                    type="submit"
                    className="py-6 rounded-xl text-white font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Send className="size-5 mr-2" /> Send Message
                    </div>
                  </Button>
                </div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
