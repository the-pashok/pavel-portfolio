import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { HowIWork } from '@/components/sections/HowIWork';
import { Projects } from '@/components/sections/Projects';
import { Metrics } from '@/components/sections/Metrics';
import { Contact } from '@/components/sections/Contact';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Hero } from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Metrics />

        <About />

        <HowIWork />

        <Stack />

        <Experience />

        <Projects />

        <Education />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
