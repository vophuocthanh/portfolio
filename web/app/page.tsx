import { Banner } from '@/components/banner/banner';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';

export default function Home() {
  return (
    <main className='w-full h-[100rem]'>
      <Header />
      <Banner></Banner>
      <Introduction />
    </main>
  );
}
