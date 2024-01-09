import {
  footerCapabilityItems,
  footerSocialItems
} from '../../../constants/footer.constants';
import { headerNavElms } from '../../../constants/header.constants';

const Footer = () => {
  return (
    <footer className='py-5 bg-neutral-900'>
      <div className='container mx-auto'>
        <div className='relative items-stretch self-stretch flex w-full flex-col max-md:max-w-full'>
          <div className='justify-center items-center bg-neutral-900 flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5'>
            <div className='w-full my-12 max-md:max-w-full max-md:my-10'>
              <div className='gap-5 flex justify-between flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0'>
                <div className='flex flex-col items-stretch max-md:w-full max-md:ml-0'>
                  <div className='items-start flex grow flex-col max-md:mt-10'>
                    <a className='text-lg text-white transition-all' href='/'>
                      Party Time
                    </a>
                    <div className='text-white text-sm leading-7 mt-10 self-start'>
                      Ornare eget varius aliquet vehicula fermentum commodo,
                      dolor, <br /> dolor amet, ut velit lacus cursus et, tortor
                      mollis lacus lectus <br /> aliquam velit justo nibh
                      fermentum fermentum.
                    </div>
                    <div className='items-stretch self-stretch flex gap-4 mt-7 pr-20 max-md:pr-5'>
                      {footerSocialItems?.map(({ imgSrc, key }) => {
                        return (
                          <a key={key} href='/'>
                            <img
                              loading='lazy'
                              src={imgSrc}
                              className='aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full'
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-stretch max-md:w-full max-md:ml-0'>
                  <ul className='items-stretch flex flex-col max-md:mt-10'>
                    <div className='text-white text-2xl leading-9 self-stretch'>
                      Quick Link
                    </div>
                    {headerNavElms?.map(({ key, name, route }) => {
                      return (
                        <li
                          className='text-white text-sm leading-7 mt-3'
                          key={key}
                        >
                          <a className='hover:underline' href={route}>
                            {name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='flex flex-col items-stretch max-md:w-full max-md:ml-0'>
                  <ul className='items-stretch flex flex-col max-md:mt-10'>
                    <div className='text-white text-2xl leading-9 self-stretch'>
                      Our Capability
                    </div>
                    {footerCapabilityItems?.map(({ key, name }) => {
                      return (
                        <li
                          className='text-white text-sm leading-7 mt-3'
                          key={key}
                        >
                          <a className='hover:underline' href=''>
                            {name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='block md:flex justify-between items-center text-center bg-neutral-900 px-16 py-5 max-md:max-w-full max-md:px-5'>
            <div className='text-white text-sm leading-7'>
              Copyright © 2024 Ibrohim Qahramonov
            </div>{' '}
            <div className='text-white text-sm leading-7'>
              Powereed by Ibrohim Qahramonov Agency
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
