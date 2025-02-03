import Hero from '@/components/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import WaveBackground from '@/components/wave-background';

export default function Home() {
  return (
    <>
      <WaveBackground />
      <div className="relative">
        <section id="home" className="min-h-screen flex items-center">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <Hero />
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <About />
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <Projects />
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}