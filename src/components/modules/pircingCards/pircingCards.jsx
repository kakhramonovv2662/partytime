import { pricingCardItems } from '../../../constants/pricingCard.constants';

const PircingCards = () => {
  return (
    <div>
      <div className='mx-auto text-center'>
        <p className='relative text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase self-center whitespace-nowrap mt-16 max-md:mt-10'>
          Pricing Cards
        </p>
        <h2 className='relative text-zinc-900 text-4xl font-semibold leading-10 self-center mt-6 max-md:max-w-full'>
          Affordable prices
        </h2>
      </div>
      <div
        style={{
          background: 'linear-gradient(90deg, #682D8C 0%, #EB1E79 100%)'
        }}
        className='flex flex-col justify-center items-center py-10 max-md:px-5 mt-14'
      >
        <div className='flex flex-col max-md:max-w-full max-md:mt-10'>
          <ul className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            {pricingCardItems?.map(
              ({ key, benefits, defination, price, trafficName }) => {
                return (
                  <li
                    key={key}
                    className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'
                  >
                    <div className='shadow-lg bg-white flex w-full grow flex-col mx-auto py-5 rounded-3xl max-md:mt-10 px-3 relative'>
                      <h2 className='text-black text-4xl font-bold self-center whitespace-nowrap'>
                        {trafficName}
                      </h2>
                      <p className='text-neutral-500 text-sm font-bold self-center whitespace-nowrap mt-4'>
                        {defination}
                      </p>
                      <div className='self-center flex gap-0.5 mt-9 items-end'>
                        <span className='text-black text-2xl font-bold grow whitespace-nowrap self-start'>
                          $
                        </span>
                        <span className='text-black text-5xl font-bold self-start max-md:text-4xl'>
                          {price}
                        </span>
                        <span className='text-black text-base font-bold grow whitespace-nowrap mt-5 lowercase'>
                          /{trafficName}
                        </span>
                      </div>
                      <button className='text-white text-sm font-bold whitespace-nowrap shadow-lg bg-green-500 self-center justify-center items-stretch mt-10 px-12 py-3.5 rounded-[30px] max-md:px-5 hover:opacity-80 active:opacity-60'>
                        Add to Cart
                      </button>
                      <div className='bg-stone-500 self-stretch shrink-0 h-px mt-6' />
                      <ul>
                        {benefits?.map(({ key, text }) => {
                          return (
                            <li
                              key={key}
                              className='self-center flex gap-2 mt-4 items-center'
                            >
                              <img
                                loading='lazy'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGkYvI02T0BkVANuREHvYazjKpZXBBOVxN8zH1Yn3-w&s'
                                className='w-[15px]'
                                width={20}
                                height={20}
                                alt='icon'
                              />
                              <p className='text-black text-sm font-bold'>
                                {text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PircingCards;
