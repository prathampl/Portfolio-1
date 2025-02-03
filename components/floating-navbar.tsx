'use client';

import { Github, Linkedin, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function FloatingNavBar() {
  return (
    <div className="fixed top-10 right-0 z-50 transition-transform duration-300 hover:translate-x-0 translate-x-1">
      <Card className="rounded-l-full bg-[#1A1625]/50 backdrop-blur-md border-0 p-2 sm:px-5 sm:py-4 flex items-center gap-4">
        {/* Social Media Links */}
        <div className="flex items-center gap-3">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/prathampl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Download CV Button */}
        <Button 
          variant="ghost" 
          className="bg-[#2A2438] hover:bg-[#352D46] text-white"
          asChild
        >
          <a href="/assets/CV.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
      </Card>
    </div>
  );
}