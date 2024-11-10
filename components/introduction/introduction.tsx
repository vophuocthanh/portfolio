import Image from 'next/image';
import BackendImg from '../../public/backend.png';
import FrontendImg from '../../public/frontend.png';
import SectionInViewRight from '../SectionInVewRight';

export default function Introduction() {
  return (
    <div className='max-w-6xl mx-auto space-y-4'>
      <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300'>
        Introduction
      </h1>
      <span className='sm:text-6xl text-2xl font-bold'>Overview...</span>
      <p className='sm:w-3/5 w-full'>
        I have 1 year of experience as a Frontend Developer, I have accumulated rich experience with
        advanced technologies such as React.js | Next.js | TypeScript | Nest.js | AWS. I have
        participated and completed many projects from simple to complex, where I was responsible for
        developing optimal, interactive and efficient user interfaces. I have the ability to
        implement innovative features, ensure the best application performance and user experience.
        Besides, I always keep learning and grasping new trends in web development to improve my
        skills and contribute to the success of the project.
      </p>
      <div className='flex sm:flex-row sm:gap-10 gap-8 flex-col items-center'>
        <SectionInViewRight className='w-64 h-80 rounded border p-4 shadow-md space-y-8'>
          <Image src={FrontendImg} alt='banner' className='w-40 h-40 mx-auto mt-2' />
          <span className='flex justify-center text-xl font-bold text-center'>
            Frontend <br /> Developer
          </span>
        </SectionInViewRight>
        <SectionInViewRight className='w-64 h-80 rounded border shadow-md p-4 space-y-8'>
          <Image src={BackendImg} alt='banner' className='w-40 h-40 mx-auto mt-2' />
          <span className='flex justify-center text-xl font-bold text-center'>
            Backend <br /> Developer
          </span>
        </SectionInViewRight>
      </div>
    </div>
  );
}
