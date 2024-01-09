import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { aboutLogoItems } from '../../../constants/about.constants';

const AboutLogoSwiper = () => {
  return (
    <Swiper
      className='relative self-center flex gap-0 mt-28 px-px max-md:flex-wrap max-md:mt-10 border-y-gray-200 border-t border-solid border-b'
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={false}
      navigation={false}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      }}
    >
      {aboutLogoItems?.map(({ key, imgSrc }) => {
        return (
          <SwiperSlide key={key} className='px-10 py-9 max-md:px-5'>
            <img
              className='aspect-[4.25] object-contain object-center w-[119px] overflow-hidden'
              src={imgSrc}
              alt='logo-images'
              width={120}
              height={28}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default AboutLogoSwiper;
