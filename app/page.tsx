import { Banner } from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';
import Project from '@/components/project/project';
import TechSkill from '@/components/tech-skill/tech-skill';

export default function Home() {
  return (
    <main className='w-full h-full sm:px-0 px-2'>
      <Header />
      <Banner />
      <Introduction />
      <TechSkill />
      <Project />
      <Footer />
    </main>
  );
}
