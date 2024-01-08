import AboutLogoSwiper from './aboutLogoSwiper';

const About = () => {
  return (
    <div className='container mx-auto px-5' id='about'>
      <div className='relative mt-28 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex justify-between max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col w-[45%] max-md:w-full max-md:ml-0'>
            <div className='relative flex grow flex-col max-md:mt-10'>
              <div className='text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase self-stretch'>
                About Us
              </div>
              <div className='text-zinc-900 text-4xl font-semibold leading-10 mt-4 self-start'>
                We Help Corporate to Manage Event
              </div>
              <div className='text-neutral-500 text-base leading-7 self-stretch mt-6 max-md:mr-2.5'>
                Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet
                dolor. Facilisis id diam pellentesque et odio. Potenti sagittis
                massa lorem arcu sed diam. Consectetur elit sit in donec vitae
                blandit tincidunt eu. Sed nulla vel diam commodo. Placerat
                cursus sed blandit eu odio.
              </div>
              <div className='self-stretch mt-10'>
                <div className='gap-5 flex text-center max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:ml-0'>
                    <div className='justify-center items-center bg-zinc-900 bg-opacity-10 flex grow flex-col w-full px-16 py-8 max-md:px-5'>
                      <span className='text-neutral-500 text-4xl font-semibold leading-8 whitespace-nowrap'>
                        136
                      </span>
                      <p className='text-neutral-500 text-xs leading-7 whitespace-nowrap mt-3.5'>
                        ESTABLISHED
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:ml-0'>
                    <div className='justify-center items-center bg-zinc-900 bg-opacity-10 flex grow flex-col w-full px-16 py-8 max-md:px-5'>
                      <span className='text-neutral-500 text-4xl font-semibold leading-8 whitespace-nowrap'>
                        7
                      </span>
                      <p className='text-neutral-500 text-xs leading-7 whitespace-nowrap mt-3.5'>
                        EMPLOYEE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[55%] ml-5 max-md:w-full max-md:ml-0'>
            <img
              loading='lazy'
              src='https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/group-of-people-photo-in-room.jpg'
              className='object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'
            />
          </div>
        </div>
      </div>
      <AboutLogoSwiper />
    </div>
  );
};

export default About;
