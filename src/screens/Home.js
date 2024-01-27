import React from 'react'
import { Link } from "react-router-dom";

const Home = (props) => {
  const {title, link, img } = props;

  return (
    <section className='scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-track-bg-transparent scrollbar-thumb-bg-slate-500/50 scrollbar-rounded bg-dark-primary rounded-lg overflow-y-auto w-[37rem] max-h-[35rem] py-10 px-10'>
          <h2 className='font-semibold text-xl font-lekton text-white mb-4'>About Me</h2>
          <p className='font-semibold text-base font-lekton text-txt-clr mb-2'>
          Hello! 👋 I’m Brahim Trahim.
          </p>
          <p className='font-normal text-base font-lekton text-txt-clr mb-2'>
            Frond-end developer from MA, AGADIR. I have rich experience in React js, 
            also I am good at Wordpress. I love to talk with you about our unique.
          </p>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white mb-8 mt-8 circle-before'>My Work</h2>
          <div class="flex group relative overflow-hidden border-2 border-white/50 text-gray-700 bg-white m-2 mb-6 m-auto rounded-xl w-60 h-60">
            <Link to={link}>
              <div className='group-hover bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer'></div>
              <img className='group-hover:scale-125 transition-all duration-500 cursor-pointer' 
                src={img} 
                alt="project1"
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <h3 className='text-sky-400 font-lekton text-2xl'>
                  {title}
                </h3>
              </div>
              <div className='absolute content-center -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span>
                  <svg className='hover:fill-blue-400' xmlns="http://www.w3.org/2000/svg" fill='white' height="20" width="20" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div class="flex justify-center mt-4 md:mt-6">
            <a href="/Projects" class="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">See More</a>
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white mb-4 mt-8 circle-before'>Contact Me</h2>
          <h3 className='font-lekton font-semibold text-txt-clr mb-2'>Email:</h3>
          <p className='font-normal text-base font-lekton text-txt-clr mb-4'>trahimbrahim@gmail.com</p>
          <h3 className='font-lekton font-semibold text-txt-clr mb-2'>Phone:</h3>
          <p className='font-normal text-base font-lekton text-txt-clr mb-4'>+212 610 760 225</p>
          <div class="flex justify-center mt-4 md:mt-6">
            <a href="/Contact" class="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default Home