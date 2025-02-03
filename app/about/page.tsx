import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const techStack = [
    'JavaScript (ES6+)', 'React', 'Next.js', 'TypeScript',
    'Jest', 'Cypress', 'Storybook', 'Performance Testing',
    'HTML', 'CSS', 'SCSS', 'Tailwind',
    'ShadCn/UI', 'Figma', 'Framer', 'Git',
    'TanStack Query', 'CI/CD'
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="space-y-16">
        <div className="space-y-8">
          <h1 className="text-7xl font-bold">
            About <span className="bg-gradient-to-r from-[#9C4F96] to-[#FF6B6B] bg-clip-text text-transparent">me.</span>
          </h1>
          
          <Card className="p-8 bg-[#1A1625]/50 border-0">
            <p className="text-xl leading-relaxed">
              "Hey! I'm Atzin — web designer, developer, fitness lover somehow and accidental content creator.
              <br /><br />
              My background in design and development gives me the tools to bring ideas to life, but my heart is in connecting with people. I love sharing my journey and what I've learned along the way."
            </p>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">
            My tech Stack!
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                className="px-4 py-2 text-base bg-[#2A2438] hover:bg-[#352D46] transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}