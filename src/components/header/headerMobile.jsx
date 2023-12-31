import { useState } from 'react';
import { headerNavElms, headerIcons } from '../../constants/header.constants';
import { SvgIcon } from '../../components/svgIcon/svgIconComponent';

// eslint-disable-next-line react/prop-types
const HeaderMobile = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between p-5 lg:hidden'>
        <button
          className='border hover:bg-blue-100 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none'
          type='button'
          onClick={() => setisOpen(!isOpen)}
        >
          <SvgIcon iconName={'menu-icon'} stroke={'#000'} />
        </button>
        <a className='text-lg text-general_color transition-all' href='/'>
          Party Time
        </a>
        <ul className='flex items-center gap-7'>
          {headerIcons.map(({ key, name }) => {
            if (key > 2)
              return (
                <li key={key} className='cursor-pointer'>
                  <SvgIcon
                    hover={'#FFDD00'}
                    iconName={name}
                    width={'20px'}
                    height={'20px'}
                    stroke={'#000'}
                  />
                </li>
              );
          })}

          <li className='w-12 h-12 cursor-pointer rounded-full bg-general_color transition-all flex items-center justify-center hover:bg-white'>
            <SvgIcon iconName={'user-icon'} width={'20px'} height={'20px'} />
          </li>
        </ul>
      </div>

      <div
        id='drawer-navigation'
        className={`fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform bg-white ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        tabIndex='-1'
        aria-labelledby='drawer-navigation-label'
      >
        <h5
          id='drawer-navigation-label'
          className='text-base font-semibold text-gray-500 uppercase'
        >
          Modules
        </h5>
        <button
          type='button'
          onClick={() => setisOpen(!isOpen)}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center'
        >
          <SvgIcon iconName={'сlose-icon'} />
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto'>
          <ul className='space-y-2 font-medium'>
            {headerNavElms?.map(({ key, name }) => {
              return (
                <li key={key}>
                  <a
                    href='/'
                    className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
