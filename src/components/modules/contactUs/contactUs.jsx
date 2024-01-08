import { SvgIcon } from '../../svgIcon/svgIconComponent';

const ContactUs = () => {
  return (
    <section className='my-16' id='contact'>
      <div className='mx-auto text-center'>
        <p className='relative text-red-500 text-xs font-semibold leading-4 tracking-[2px] uppercase self-center whitespace-nowrap mt-16 max-md:mt-10'>
          Contact Us
        </p>
        <h2 className='relative text-zinc-900 text-4xl font-semibold leading-10 self-center mt-6 max-md:max-w-full'>
          Lets Make Your Event Memorable!
        </h2>
        <p className='relative text-neutral-500 text-base leading-7 self-center my-5 max-md:max-w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className='container mx-auto px-6 md:px-12'>
        <div className="block rounded-lg bg-[url('https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/selective-focus-multi-color-confetti.jpg')] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 backdrop-blur-[30px]">
          <div className='mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4'>
            <div className='mx-auto mb-12 text-center lg:mb-0'>
              <SvgIcon
                iconName={'united-state-icon'}
                className='mx-auto mb-6 h-8 w-8'
                width={'40px'}
                height={'40px'}
                stroke={'white'}
                fill={'none'}
              />
              <h6 className='font-medium text-white'>United Kingdom</h6>
            </div>
            <div className='mx-auto mb-12 text-center lg:mb-0'>
              <SvgIcon
                iconName={'location-icon'}
                className='mx-auto mb-6 h-8 w-8'
                width={'40px'}
                height={'40px'}
                stroke={'white'}
                fill={'none'}
              />
              <h6 className='font-medium text-white'>
                Trafalgar Square, Charing Cross, London WC2N 5DN
              </h6>
            </div>
            <a
              href='tel:+441234567890'
              className='mx-auto mb-6 text-center md:mb-0'
            >
              <SvgIcon
                iconName={'phone-icon'}
                className='mx-auto mb-6 h-8 w-8'
                width={'40px'}
                height={'40px'}
                stroke={'white'}
                fill={'none'}
              />
              <h6 className='font-medium text-white'>+44 123 456 7890</h6>
            </a>
            <div className='mx-auto text-center'>
              <SvgIcon
                iconName={'price-icon'}
                className='mx-auto mb-6 h-8 w-8'
                width={'40px'}
                height={'40px'}
                stroke={'white'}
                fill={'none'}
              />
              <h6 className='font-medium text-white'>Tax ID: 273 384</h6>
            </div>
          </div>
          <div className='mx-auto max-w-[700px]'>
            <form>
              <div className='mb-5'>
                <label
                  htmlFor='name'
                  className='mb-3 block text-base font-medium text-white'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  id='name'
                  placeholder='Full Name'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#f1e564] focus:shadow-md'
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='email'
                  className='mb-3 block text-base font-medium text-white'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  required
                  name='email'
                  id='email'
                  placeholder='example@domain.com'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#f1e564] focus:shadow-md'
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='subject'
                  className='mb-3 block text-base font-medium text-white'
                >
                  Subject
                </label>
                <input
                  required
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Enter your subject'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#f1e564] focus:shadow-md'
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='message'
                  className='mb-3 block text-base font-medium text-white'
                >
                  Message
                </label>
                <textarea
                  rows='4'
                  required
                  name='message'
                  id='message'
                  placeholder='Type your message'
                  className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#f1e564] focus:shadow-md'
                ></textarea>
              </div>
              <div>
                <button className='hover:shadow-form rounded-md bg-general_color py-3 px-8 text-base font-semibold text-white outline-none'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
