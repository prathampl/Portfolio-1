import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'An intelligent NLP chatbot using Rasa/Dialogflow framework with machine learning models for intent classification and entity recognition.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Rasa', 'Dialogflow'],
    github: 'https://github.com/prathampl',
    live: '#',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80'
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'A scalable collaborative workspace using React/Next.js and WebSocket technology with Firebase real-time database.',
    tech: ['React', 'Next.js', 'WebSocket', 'Firebase'],
    github: 'https://github.com/prathampl',
    live: '#',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'Coder',
    description: 'An interactive coding platform for practicing problems with progress tracking and submission history.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/prathampl',
    live: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Tokenization of Real Estate',
    description: 'A blockchain-based platform for real estate tokenization using Solidity and Ethereum.',
    tech: ['Solidity', 'Ethereum', 'Web3.js', 'Truffle'],
    github: 'https://github.com/prathampl',
    live: '#',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
  }
];

export default function Projects() {
  return (
    <div className="space-y-16">
      <h1 className="text-7xl font-bold">
        My <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">Projects.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden bg-[#1A1625]/50 border-0">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-[#2A2438] hover:bg-[#352D46]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button className="bg-[#2A2438] hover:bg-[#352D46]" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}