/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const Button = ({ text, route = '/', className }) => {
  return (
    <button
      className={`text-xs font-semibold leading-3 tracking-[2px] uppercase whitespace-nowrap justify-center items-center border bg-gray-200 px-7 py-3.5 rounded-lg transition-all border-solid border-gray-200 hover:text-white ${className}`}
    >
      <Link href={route}>{text}</Link>
    </button>
  );
};
