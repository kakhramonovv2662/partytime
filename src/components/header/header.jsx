import { headerIcons, headerNavElms } from '../../constants/header.constants';
import { SvgIcon } from '../svgIcon/svgIconComponent';

// eslint-disable-next-line react/prop-types
const Header = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-between p-5 ${className}`}>
      <a className='text-lg text-white transition-all' href='/'>
        Party Time
      </a>

      <nav>
        <ul className='flex items-center gap-5 font-bold text-lg'>
          {headerNavElms?.map(({ key, name }) => {
            return (
              <li key={key}>
                <a
                  className='text-white transition-all hover:text-general_color'
                  href='#'
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className='flex items-center gap-7'>
        {headerIcons.map(({ key, name }) => {
          return (
            <li key={key} className='cursor-pointer'>
              <SvgIcon
                hover={'#FFDD00'}
                iconName={name}
                width={'20px'}
                height={'20px'}
                stroke={'white'}
              />
            </li>
          );
        })}

        <li className='w-12 h-12 cursor-pointer rounded-full bg-general_color transition-all flex items-center justify-center hover:bg-white'>
          <SvgIcon iconName={'user-icon'} width={'20px'} height={'20px'} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
