/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
// Imports
import React, { useState } from 'react';

import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaJava, FaPython, FaDatabase, FaAngular, FaVuejs, FaSwift, FaNodeJs, FaBootstrap, FaPhp, FaDesktop, FaLaptop, FaServer, FaNetworkWired, FaCloud, } from 'react-icons/fa';

import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiDotnet, SiRuby, SiKotlin, SiCplusplus, SiRust, SiGit, SiGo, SiLinux, SiMongodb, SiPostgresql, SiWindows, SiApple, SiCisco, SiVmware } from 'react-icons/si';

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaAngular />,
          <FaNodeJs />,
          <FaBootstrap />,
          <FaVuejs />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Software Development',
        icons: [
          <FaJava />,
          <FaPython />,
          <FaDatabase />,
          <FaSwift />,
          <SiDotnet />,
          <SiRuby />,
          <SiKotlin />,
          <SiCplusplus />,
          <FaPhp />,
          <SiLinux />,
          <SiKotlin />
        ],
      },
      {
        title: 'IT Support',
        icons: [
          <FaDesktop />,
          <FaLaptop />,
          <FaServer />,
          <FaNetworkWired />,
          <SiWindows />,
          <SiLinux />,
          <SiApple />,
          <SiCisco />,
          <SiVmware />,
          <FaDatabase />,
          <FaCloud />
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Cable Tech Support - Foundever Inc.',
        stage: 'December 2022 - Currently Working',
      },
      {
        title: 'Computer Instructor - CASE Community Services',
        stage: 'February 2023 - May 2023',
      },
      {
        title: 'IT Support Specialist - iEnergizer Pvt. Ltd.',
        stage: 'October 2021 - June 2022',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Diploma in Computer Programming - Georgian College, Toronto, CA',
        stage: '2024',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2'
          >
            Captivating stories <span className='text-accent'>fuel</span> visionary designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I'm Naman, a passionate IT enthusiast, aspiring developer, and tech educator. My exhilarating journey through technology, from tinkering with computers to excelling in IT support and software development, fuels my drive to create magnificent designs. Join me on this inspiring tech adventure!
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Experience</div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied Clients</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
              </div>
              {/* students 
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={70} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Students</div>
              </div>
              */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
