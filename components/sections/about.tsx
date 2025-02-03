import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Code2,
  Database,
  Globe,
  Server,
  Blocks,
  GitBranch,
  Monitor,
  Cpu,
  Wrench
} from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="h-5 w-5" />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="h-5 w-5" />,
      skills: ['React.js', 'Node.js', 'Next.js', 'HTML/CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="h-5 w-5" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Blockchain',
      icon: <Blocks className="h-5 w-5" />,
      skills: ['Solidity', 'Ethereum']
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="h-5 w-5" />,
      skills: ['Git']
    },
    {
      title: 'Operating Systems',
      icon: <Monitor className="h-5 w-5" />,
      skills: ['Linux/Unix']
    },
    {
      title: 'DevOps',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['DevOps', 'CI/CD']
    },
    {
      title: 'Backend',
      icon: <Server className="h-5 w-5" />,
      skills: ['REST APIs', 'Microservices']
    }
  ];

  const education = {
    university: 'Nitte Meenakshi Institute of Technology',
    location: 'Bangalore, India',
    degree: 'Bachelor of Engineering in Computer Science',
    gpa: '8.2/10',
    period: '2019 – 2023'
  };

  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <h1 className="text-7xl font-bold">
          About <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">me.</span>
        </h1>
        
        <Card className="p-8 bg-[#1A1625]/50 border-0">
          <p className="text-xl leading-relaxed">
            "Hey! I'm Pratham — a software developer with a passion for building scalable applications and innovative solutions.
            <br /><br />
            Currently working as a Software Developer at ETS Software Solutions, I specialize in full-stack development, with expertise in React, Node.js, and database management. I'm also deeply interested in blockchain technology and machine learning."
          </p>
        </Card>

        <Card className="p-8 bg-[#1A1625]/50 border-0">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="space-y-2">
            <p className="text-xl font-semibold">{education.university}</p>
            <p className="text-gray-300">{education.location}</p>
            <p className="text-gray-300">{education.degree}</p>
            <p className="text-gray-300">GPA: {education.gpa} | {education.period}</p>
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                {category.icon}
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1 text-base bg-[#2A2438] hover:bg-[#352D46] transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}