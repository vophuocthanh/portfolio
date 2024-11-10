import Link from 'next/link';
import { MobilePage } from '../mobile-slidebar';
import { ModeToggle } from '../mode-toggle';

export default function Header() {
  return (
    <div className='w-full border-b fixed top-0 left-0 z-50 bg-white dark:bg-gray-900'>
      <div className='py-6 max-w-6xl mx-auto flex justify-between items-center'>
        <Link
          href='/'
          className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300'
        >
          Thanh Dev
        </Link>
        <div className='flex gap-4 items-center'>
          <div className='text-2xl sm:flex hidden gap-4 font-medium dark:text-opacity-70'>
            <Link
              href='/blog'
              className='hover:text-[#972AC1] hover:underline dark:text-opacity-70'
            >
              Blogs
            </Link>
            <Link
              href='/project'
              className='hover:text-[#972AC1] hover:underline dark:text-opacity-70'
            >
              Projects
            </Link>
            <Link
              href='https://drive.google.com/file/d/1HVdlfDE3WJw0pot1h25a6RgWriU9XQdE/view?usp=sharing'
              target='_blank'
              className='hover:text-[#972AC1] hover:underline dark:text-opacity-70'
            >
              MyCV
            </Link>
          </div>
          <div className='sm:hidden'>
            <MobilePage />
          </div>
          <hr className='w-px h-8 bg-gray-300 dark:bg-gray-700' />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
