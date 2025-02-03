'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
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
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="space-y-16">
        <div className="space-y-8 text-center">
          <h1 className="text-7xl font-bold">
            Contact <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">me.</span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Want more purple neon?
          </p>
          
          <div className="flex justify-center">
            <a
              href="#"
              className="text-xl font-semibold text-[#9C4F96] hover:text-[#FF6B6B] transition-colors"
            >
              Download my VSCode theme for free!
            </a>
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
              Let's connect <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}