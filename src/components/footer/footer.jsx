import { navItems } from '../../constants/hero.constants';
import { SvgIcon } from '../svgIcon/svgIconComponent';

const Footer = () => {
  return (
    <footer className='bg-neutral-100 py-5'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex justify-between flex-wrap'>
          <div className='w-full px-4 sm:w-2/3 lg:w-3/12'>
            <div className='mb-10 w-full'>
              <a href='/' className='block uppercase font-semibold mb-6'>
                Party
                <span className='text-general_color'>Time</span>
              </a>
              <p className='mb-7 text-base text-body-color'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                molestiae fugiat labore rerum?
              </p>
              <p className='flex items-center text-sm font-medium text-dark'>
                <span className='mr-3'>
                  <SvgIcon
                    iconName={'phone-icon'}
                    width={'25px'}
                    height={'25px'}
                    stroke={'black'}
                    fill={'none'}
                  />
                </span>
                <span className='text-black'>+998 97 888-88-08</span>
              </p>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-black'>Modules</h4>
              <ul className='space-y-3'>
                {navItems?.map(({ key, name }) => {
                  return (
                    <li key={key}>
                      <a
                        href='#main'
                        className='inline-block text-base leading-loose text-body-color hover:underline'
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-3/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-black'>
                Subscribe now
              </h4>
              <div className='mb-6 flex items-center'>
                <a
                  href='/'
                  className='group mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black text-dark hover:border-general_color hover:bg-primary hover:text-general_color sm:mr-4 lg:mr-3 xl:mr-4'
                >
                  <SvgIcon
                    iconName={'fb-icon'}
                    stroke={'black'}
                    width={'16px'}
                    height={'16px'}
                    className={'group-hover:stroke-general_color'}
                  />
                </a>
                <a
                  href='javascript:void(0)'
                  className='mr-3 group flex h-8 w-8 items-center justify-center rounded-full border border-black text-dark hover:border-general_color hover:bg-primary sm:mr-4 lg:mr-3 xl:mr-4'
                >
                  <SvgIcon
                    iconName={'tw-icon'}
                    stroke={'black'}
                    width={'16px'}
                    height={'16px'}
                    className={'group-hover:stroke-general_color'}
                  />
                </a>
                <a
                  href='javascript:void(0)'
                  className='mr-3 group flex h-8 w-8 items-center justify-center rounded-full border border-black text-dark hover:border-general_color hover:bg-primary sm:mr-4 lg:mr-3 xl:mr-4'
                >
                  <SvgIcon
                    iconName={'yt-icon'}
                    stroke={'black'}
                    width={'16px'}
                    height={'16px'}
                    className={'group-hover:stroke-general_color'}
                  />
                </a>
                <a
                  href='javascript:void(0)'
                  className='mr-3 group flex h-8 w-8 items-center justify-center rounded-full border border-black text-dark hover:border-general_color hover:bg-primary sm:mr-4 lg:mr-3 xl:mr-4'
                >
                  <SvgIcon
                    iconName={'ln-icon'}
                    stroke={'black'}
                    width={'16px'}
                    height={'16px'}
                    className={'group-hover:stroke-general_color border-none'}
                  />
                </a>
              </div>
              <p className='text-base text-body-color'>&copy; 2025 PartyTime</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
