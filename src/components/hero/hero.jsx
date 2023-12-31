import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import Header from '../../components/header/header';
import HeaderMobile from '../../components/header/headerMobile';
import { heroSliderContents } from '../../constants';

import 'swiper/css';

const Hero = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <HeaderMobile />
        <Swiper
          className='mb-20 mt-5 sm:shadow-2xl sm:shadow-gray-700 sm:rounded-3xl relative'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
        >
          <Header className={'w-full absolute z-10 top-0 hidden lg:flex'} />
          {heroSliderContents?.map(({ key, imgName }) => {
            return (
              <SwiperSlide key={key}>
                <img className='object-contain' src={imgName} alt='hero-bg' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
