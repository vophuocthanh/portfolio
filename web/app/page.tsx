import { Banner } from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';
import Project from '@/components/project/project';

export default function Home() {
  return (
    <main className='w-full h-full'>
      <Header />
      <Banner />
      <Introduction />
      <Project />
      <Footer />
    </main>
  );
}
