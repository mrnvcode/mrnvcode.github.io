/* eslint-disable react/jsx-key */
// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          path: '/thumb1.jpg',
        },
        {
          title: 'Weather App',
          path: '/thumb2.jpg',
        },
        {
          title: 'Movie Database',
          path: '/thumb3.jpg',
        },
        {
          title: 'T-Phone Website',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  const imageLinks = [
    ['https://github.com/mrnvcode/mrnvcode.github.io', 'https://github.com/mrnvcode/WeatherApp', '/link3', '/link4'],
    ['https://github.com/mrnvcode/mrnvcode.github.io', 'https://github.com/mrnvcode/WeatherApp', '/link3', '/link4'],
  ];

  return <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
  >
    {workSlider.slides.map((slide, Slideindex) => {
      return <SwiperSlide key={Slideindex}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image, index) => {
            const link = imageLinks[Slideindex][index]; // Get the corresponding link for the image
            return (
              <a href={link} key={index}> {/* Wrap the image with an anchor tag */}
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center reltive overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100'>LIVE</div>
                        {/* title part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </SwiperSlide>;
    })}
  </Swiper>;
};

export default WorkSlider;
