'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.h1 
        className="text-5xl font-bold tracking-tight sm:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hey, I'm <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">Pratham<br />P L!</span>
      </motion.h1>
      
      <motion.h2
        className="mt-6 text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I'm a Software Developer
      </motion.h2>

      <motion.p
        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        A highly motivated full-stack developer with expertise in web development, machine learning, and blockchain technologies. Based in Mangalore, India, I'm passionate about building scalable applications and creating innovative solutions that make a difference. 🚀
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Button size="lg" className="bg-[#2A2438] hover:bg-[#352D46]">
          Contact me <Send className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}