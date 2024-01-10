import { Banner } from '@/components/banner/banner';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';
import Project from '@/components/project/project';

export default function Home() {
  return (
    <main className='w-full h-[300rem]'>
      <Header />
      <Banner></Banner>
      <Introduction />
      <Project />
    </main>
  );
}
