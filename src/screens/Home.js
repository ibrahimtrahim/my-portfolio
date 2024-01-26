import React from 'react'
import ProjectCard from '../component/ProjectCard';

const Home = () => {
  return (
    <section className='flex flex-wrap items-center scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-track-bg-transparent scrollbar-thumb-bg-slate-500/50 scrollbar-rounded bg-dark-primary rounded-lg overflow-y-auto w-[35rem] max-h-[35rem] py-10 px-10'>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white mb-4'>About Me</h2>
          <p className='font-semibold text-base font-lekton text-txt-clr mb-2'>
          Hello! 👋 I’m Brahim Trahim.
          </p>
          <p className='font-normal text-base font-lekton text-txt-clr mb-2'>
            Frond-end developer from MA, AGADIR. I have rich experience in React js, 
            also I am good at Wordpress. I love to talk with you about our unique.
          </p>
        </div>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white my-4'>My Work</h2>
          <ProjectCard />
          <a href="#" class=" items-center px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEE MORE</a>
        </div>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white my-4'>Contact Me</h2>
          <h3>Email:</h3>
          <p>trahimbrahim@gmail.com</p>
          <h3>Phone:</h3>
          <p>+212 610 760 225</p>
          <a href="#" class=" items-center px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</a>
        </div>
    </section>
  )
}

export default Home