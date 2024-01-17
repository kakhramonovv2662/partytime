import { servicesItems } from '../../../constants/services.constants';
import { Button } from '../../layouts/button/button';

const Services = () => {
  return (
    <div className='container mx-auto px-5' id='services'>
      <div className='mx-auto text-center'>
        <div className='relative self-center flex w-px shrink-0 h-12 flex-col mx-auto mt-16 border-t-[48px] border-t-red-500 border-solid max-md:mt-10' />
        <p className='relative text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase self-center whitespace-nowrap mt-16 max-md:mt-10'>
          Our Services
        </p>
        <h2 className='relative text-zinc-900 text-4xl font-semibold leading-10 self-center mt-6 max-md:max-w-full'>
          Corporate Event Management
        </h2>
        <p className='relative text-neutral-500 text-base leading-7 self-center my-5 max-md:max-w-full'>
          Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum
          vitae nunc cursus. Nunc cras facilisis fermentum elementum,
          suspendisse augue dolor.
        </p>
        <Button
          text={'View All Services'}
          className='self-end bg-transparent text-zinc-900 hover:bg-gray-200 hover:text-zinc-900'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 max-md:items-stretch max-md:gap-0 mt-14'>
        {servicesItems?.map(({ key, eventName, imgSrc }) => {
          return (
            <div
              className='items-stretch relative flex grow flex-col my-5'
              key={key}
            >
              <img
                loading='lazy'
                src={imgSrc}
                className='aspect-[1.66] object-contain object-center w-full overflow-hidden'
              />
              <h3 className='text-zinc-900 text-xl font-semibold leading-6 justify-center pl-3 my-3 border-l-2 border-l-red-500 border-solid items-start max-md:pr-5'>
                {eventName}
              </h3>
              <p className='text-neutral-500 text-sm lg:text-base leading-7 pr-12'>
                Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi
                pharetra aliquam sed. Commodo odio quis neque.{' '}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
