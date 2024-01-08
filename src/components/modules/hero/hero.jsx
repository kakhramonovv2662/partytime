import Header from '../header/header';
import HeaderMobile from '../header/headerMobile';
import { Button } from '../../layouts/button/button';

const Hero = () => {
  return (
    <div
      id='home'
      className="relative bg-[url('https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/toasting-glasses.jpg')] bg-center bg-no-repeat bg-cover"
    >
      <div
        style={{
          backgroundImage: 'linear-gradient(180deg,#111111 60%,#1a1a1a 100%)'
        }}
        className='bg-transparent opacity-50 absolute left-0 top-0 w-full h-full z-0'
      ></div>
      <div className='container mx-auto relative z-50'>
        <HeaderMobile />
        <Header className={'w-full hidden lg:flex'} />

        <div className='grid grid-cols-1 md:grid-cols-2 pb-60 pt-44 px-5'>
          <div className=' flex items-end'>
            <a className='flex items-center gap-5 group' href='/'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/615654df8744a0cc342300ee14525675756088c478a3e8ae06eeaddf0cea2b86?'
                className='aspect-[1.06] object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full'
              />
              <p className='text-white text-xs leading-6 uppercase group-hover:text-general_color'>
                Play The Video
              </p>
            </a>
          </div>
          <div className='max-w-[600px] w-full'>
            <h2 className='text-2xl text-white font-semibold mb-5 leading-7 md:text-3xl md:leading-9 lg:text-[42px] lg:leading-[58px] xl:text-5xl'>
              The UK’s Best Event Management Agency for Corporate
            </h2>
            <p className='max-w-[490px] w-full text-[#EDEDED text-xs leading-6 text-white mb-8 lg:text-sm'>
              A integer hac in id. Mollis consequat, consectetur egestas in
              quam. Id velit eleifend tincidunt varius sagittis sed ut. Pretium,
              risus ac augue arcu ullamcorper semper integer.
            </p>
            <Button
              text={'Learn More'}
              className={
                'bg-transparent text-white hover:bg-gray-200 hover:text-zinc-900'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
