import type { NextPage } from 'next';
import Head from 'next/head';
import { VscGithub, VscMail } from 'react-icons/vsc';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col xl:flex-row min-h-screen justify-center items-center gap-20 p-10 xl:p-24'>
      <Head>
        <title>Jesswin W Varghese</title>
        <meta
          name='description'
          content='Product Engineer at Hoomans who build software for the web flamboyantly.'
        />
      </Head>
      <div className='min-w-[100px] rounded-full'>
        <img
          src='https://avatars.githubusercontent.com/u/44605554'
          alt='Jesswin W Varghese'
          className='object-fill'
        />
      </div>
      <div className='max-w-2xl flex flex-col gap-10'>
        <h1 className='font-bold text-6xl text-center xl:text-left'>
          Hello I’m <br />
          Jesswin{' '}
          <span className='hidden md:inline-block'>
            <span className='text-[#2DD8AF]'>W</span> Varghese
          </span>
        </h1>
        <div className='gap-5 text-4xl flex xl:hidden self-center'>
          <a href='https://github.com/lemokami'>
            <VscGithub />
          </a>
          <a href='mailto:jesswinw@gmail.com'>
            <VscMail />
          </a>
        </div>
        <div className='space-y-5'>
          <p className='text-lg'>
            who is working as a Product Engineer at Hoomansco. I am also a
            Full-stack web developer.
            <a
              href='mailto:jesswinw@gmail.com'
              className='underline text-red-400'>
              leave a message
            </a>{' '}
            if you need any help with frontend web development.
          </p>
          <p className='text-lg'>
            I am currently working on improving my skills to be a better
            programmer. Message me if you have a website to create or need help
            with one
          </p>
        </div>
        <div className='gap-5 text-4xl hidden xl:flex'>
          <a href='https://github.com/lemokami'>
            <VscGithub />
          </a>
          <a href='mailto:jesswinw@gmail.com'>
            <VscMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
