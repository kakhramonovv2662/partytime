import { portfolioItems } from '../../../constants/portfolio.constants';
import { Button } from '../../layouts/button/button';

const Portfolio = () => {
  return (
    <div className='container mx-auto px-5' id='portfolio'>
      <div className='relative self-center flex w-full items-stretch justify-between gap-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mt-10'>
        <div className='items-stretch flex flex-col pt-1 pb-3 max-md:max-w-full'>
          <div className='text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase max-md:max-w-full'>
            Portfolio
          </div>
          <div className='text-zinc-900 text-4xl font-semibold leading-10 mt-6 max-md:max-w-full'>
            Featured Works
          </div>
        </div>
        <Button
          text={'View All Works'}
          className='self-end bg-transparent text-zinc-900 hover:bg-gray-200 hover:text-zinc-900'
        />
      </div>
      <div className='relative self-center w-full mt-14 max-md:max-w-full max-md:mt-10'>
        <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-5 items-stretch w-full'>
          {portfolioItems?.map(({ imgSrc, key, title }) => {
            return (
              <li
                key={key}
                className='items-stretch relative flex grow flex-col transition-all max-md:max-w-full hover:opacity-90 cursor-pointer'
              >
                <img
                  loading='lazy'
                  src={imgSrc}
                  className='aspect-[1.5] object-contain object-center w-full overflow-hidden max-md:max-w-full'
                />
                <div className='text-zinc-900 text-lg md:text-xl font-semibold leading-6 whitespace-nowrap justify-center my-5 pl-5 pr-16 py-1 border-l-2 border-l-red-500 border-solid items-start max-md:max-w-full max-md:pr-5'>
                  {title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
