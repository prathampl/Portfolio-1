'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="space-y-16">
      <div className="space-y-8 text-center">
        <h1 className="text-7xl font-bold">
          Contact <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">me.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
          <a href="tel:+917899578959" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <Phone className="h-5 w-5" />
            <span>+91 7899578959</span>
          </a>
          <a href="mailto:prathampl9@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <Mail className="h-5 w-5" />
            <span>prathampl9@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-5 w-5" />
            <span>Mangalore, India</span>
          </div>
        </div>
      </div>

      <Card className="max-w-2xl mx-auto p-8 bg-[#1A1625]/50 border-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#2A2438] border-0"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#2A2438] border-0"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#2A2438] border-0 min-h-[150px]"
              placeholder="Your message here..."
            />
          </div>

          <Button type="submit" className="w-full bg-[#2A2438] hover:bg-[#352D46]">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
}