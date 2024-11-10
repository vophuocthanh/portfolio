/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Facebook, Github, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import headerImg from '../../public/banner.svg';
import SectionInViewUp from '../SectionInViewUp';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Frontend Developer', 'Software Engineer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='max-w-6xl mx-auto mt-40'>
      <SectionInViewUp className='sm:flex flex-col sm:flex-row justify-center items-center my-10 sm:my-24'>
        <div className='sm:w-3/5 space-y-4'>
          <span className='font-bold  tracking-wider px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-700 to-transparent border border-white bg-opacity-50 text-white sm:text-2xl text-xl rounded inline-block'>
            Welcome to my Portfolio
          </span>
          <h1 className='my-4 sm:text-5xl text-3xl font-bold'>
            {`Hi! I'm Thanh Dev`}{' '}
            <span
              className='txt-rotate'
              data-period='1000'
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300'>
                {text}
              </span>
            </span>
          </h1>
          <p className='sm:w-[67%] text-2xl font-medium'>
            I develop user interfaces and web applications
          </p>
          <div className='flex gap-4 items-center'>
            <Link
              href='https://www.facebook.com/thanh.vophuoc.50'
              target='_blank'
              className=' bg-blue-500 p-2 rounded-full hover:scale-110'
            >
              <Facebook className='text-white'></Facebook>
            </Link>
            <Link
              href='https://github.com/vophuocthanh'
              target='_blank'
              className=' bg-black p-2 rounded-full hover:scale-110'
            >
              <Github className='text-white'></Github>
            </Link>
            <Link
              href='https://www.youtube.com/'
              target='_blank'
              className=' bg-red-500 p-2 rounded-full hover:scale-110'
            >
              <Youtube className='text-white'></Youtube>
            </Link>
            <Link
              href='https://www.linkedin.com/in/v%C3%B5-ph%C6%B0%E1%BB%9Bc-th%E1%BA%A1nh-747813233/'
              target='_blank'
              className=' bg-blue-800 p-2 rounded-full hover:scale-110'
            >
              <Linkedin className='text-white'></Linkedin>
            </Link>
          </div>
        </div>
        <div className='sm:w-[30rem] mt-16 sm:mt-0'>
          <Image src={headerImg} alt='Header Img' />
        </div>
      </SectionInViewUp>
    </section>
  );
};
