import { headerNavElms } from '../../../constants/header.constants';
import { Button } from '../../layouts/button/button';

// eslint-disable-next-line react/prop-types
const Header = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-between p-5 ${className}`}>
      <a className='text-lg text-white transition-all' href='/'>
        Party Time
      </a>

      <nav className='flex items-center gap-7'>
        <ul className='flex items-center gap-7 font-bold text-lg'>
          {headerNavElms?.map(({ key, name, route }) => {
            return (
              <li key={key}>
                <a
                  className='text-white transition-all hover:text-general_color'
                  href={route}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <Button
          text={'Get a Quote'}
          className={'text-zinc-900 hover:bg-transparent'}
        />
      </nav>
    </div>
  );
};

export default Header;
