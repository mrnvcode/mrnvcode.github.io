
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';

import { FaCodeBranch, FaDesktop, FaCode, FaFileAlt, FaChalkboard, FaChalkboardTeacher, FaTools } from 'react-icons/fa';

import { } from 'react-icons/si';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
export const serviceData = [
  {
    icon: <FaDesktop />,
    title: 'Technical Support',
    description: 'Experience in providing top-notch technical support, including resolving hardware and software challenges and ensuring continuity.',
  },
  {
    icon: <FaCodeBranch />,
    title: 'Software Development',
    description: 'Expert in developing robust and innovative software solutions, leveraging a diverse skill set of multiple languages.',
  },
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Strong skill set in web development. Well-versed in data structures, algorithms, software engineering, and database management.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Support Documentation',
    description: 'Ability to create detailed support documentation to assist users in troubleshooting and resolve technical issues.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Computer Instruction',
    description: 'Design and deliver comprehensive computer literacy courses, empowering learners of all ages, with essential computer skills.',
  },
  {
    icon: <FaTools />,
    title: 'Troubleshooting',
    description: 'Problem-solving skills extend to troubleshooting a wide range of technical issues, ensuring smooth operations delivering quality output.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },

  }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[ FreeMode, Pagination ]}
    className='h-[240px] sm:h-[340px]'
  >
    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default ServiceSlider;
