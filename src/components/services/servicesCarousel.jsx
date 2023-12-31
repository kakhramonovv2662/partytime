import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { serviceCards } from '../../constants/services.constants';
import { Meteors } from '../layouts/meteors/meteors';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ServicesCarousel = () => {
  return (
    <section className='my-16' id='service'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold'>Other Services</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={false}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1025: {
              slidesPerView: 3
            }
          }}
        >
          {serviceCards?.map(({ key, logo, text, title }) => {
            return (
              <SwiperSlide
                key={key}
                className='group h-full my-5 overflow-hidden bg-black text-center flex flex-col gap-10 px-10 py-10 rounded-3xl cursor-pointer text-white relative max-contain hover:text-black max-[1180px]:px-[30px] max-[1180px]:py-[25px] max-[1180px]:gap-[30px]'
              >
                <div className='absolute bg-[#FFE600] w-full h-full left-0 top-0 right-0 bottom-0 transition-transform translate-y-full group-hover:translate-y-0'></div>
                {logo}
                <h3 className='text-5xl font-semibold z-10 max-[1180px]:text-4xl'>
                  {title}
                </h3>
                <p className='text-xl z-10 max-[1180px]:text-lg max-[465px]:text-sm'>
                  {text}
                </p>
                <Meteors number={30} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
