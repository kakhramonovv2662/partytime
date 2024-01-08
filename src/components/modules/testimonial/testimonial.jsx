import { testimonialItems } from '../../../constants/testimonial.contstants';

const Testimonial = () => {
  return (
    <div className='container mx-auto px-5 mt-16' id='testimonial'>
      <div className='mx-auto text-center'>
        <p className='relative text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase self-center'>
          Testimonial
        </p>
        <h2 className='relative text-zinc-900 text-2xl md:text-4xl font-semibold leading-10 self-center whitespace-nowrap mt-5'>
          What Our Client Say
        </h2>
        <p className='relative text-neutral-500 text-sm md:text-base leading-7 mt-3 max-md:max-w-full'>
          Lobortis arcu at suspendisse arcu egestas lectus purus magna interdum
          aliquam scelerisque.
        </p>
      </div>

      <ul className='relative grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-6 max-md:max-w-full'>
        {testimonialItems?.map(({ imgSrc, key, name }) => {
          return (
            <li
              key={key}
              className='lg:p-0 lg:gap-5 lg:flex max-md:flex-col max-md:items-stretch max-md:gap-0'
            >
              <div className='flex flex-col max-md:w-full max-md:ml-0'>
                <img
                  loading='lazy'
                  src={imgSrc}
                  className='aspect-[0.83] object-contain object-center lg:w-[200px] overflow-hidden shrink-0 max-w-full grow'
                />
              </div>
              <div className='flex flex-col items-stretch lg:w-[63%] lg:ml-5 max-md:w-full max-md:ml-0'>
                <div className='flex flex-col my-auto py-0.5'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/0115377ee54c8abbae65b716923d458f52159590842c0d8642d62a51f34a08ad?'
                    className='aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-start hidden lg:block'
                  />
                  <div className='text-neutral-500 text-base leading-7 self-stretch mt-8 max-md:mr-2'>
                    Ante varius at tortor auctor dui mi eros auctor consectetur
                    cras velit, neque et tellus nulla viverra natoque aliquam,
                    malesuada viverra adipiscing diam eu auctor id tellus.
                  </div>
                  <div className='text-zinc-900 text-xs font-semibold leading-5 tracking-[2px] uppercase self-stretch mt-5'>
                    {name}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Testimonial;
