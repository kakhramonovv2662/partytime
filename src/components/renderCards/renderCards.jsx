/* eslint-disable react/prop-types */
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// const RenderCards = ({
//   // eslint-disable-next-line react/prop-types
//   sectionTitle,
//   // eslint-disable-next-line react/prop-types
//   renderItems = [],
//   // eslint-disable-next-line react/prop-types
//   duration,
//   // eslint-disable-next-line react/prop-types
//   isBgColor = false
// }) => {
//   return (
//     <section className={`${isBgColor && 'bg-general_color'} my-16`}>
//       <div className='container mx-auto py-5'>
//         <h2 className='text-3xl font-bold'>{sectionTitle}</h2>

//         <Swiper
//           slidesPerView={1}
//           navigation={false}
//           modules={[FreeMode, Autoplay, Pagination, Navigation]}
//           spaceBetween={20}
//           freeMode={true}
//           pagination={{
//             clickable: true
//           }}
//           autoplay={{
//             delay: duration,
//             disableOnInteraction: false
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2
//             },
//             1024: {
//               slidesPerView: 3
//             }
//           }}
//         >
//           {renderItems?.map(
//             ({ key, created_at, event_name, price, theatre_name, imgPath }) => {
//               return (
//                 <SwiperSlide className='w-fit group text-end my-5' key={key}>
//                   <div
//                     className={`relative w-[450px] h-[450px] rounded-3xl cursor-pointer transition-all bg-origin-content bg-no-repeat group-hover:pb-20 bg-center bg-cover group-hover:bg-bottom ${imgPath}`}
//                   >
//                     <div className='p-4 lg:p-6 xl:p-8 flex items-center rounded-b-3xl justify-between absolute w-full bottom-0 bg-gradient-to-b from-transparent to-[#00000091] group-hover:block group-hover:pb-4 group-hover:bg-gradient group-hover:to-transparent'>
//                       <div className='text-lg text-start font-medium text-gray-500 transition-all group-hover:translate-y-full'>
//                         <span className='text-2xl text-black font-bold hidden group-hover:block'>
//                           {event_name}
//                         </span>
//                         <p className='flex items-center justify-between lg:block xl:flex max-[340px]:text-sm'>
//                           {created_at}{' '}
//                           <span className='hidden group-hover:block'>
//                             {theatre_name}
//                           </span>
//                         </p>
//                       </div>
//                       <button className='block py-4 lg:py-3 xl:py-4 px-6 lg:px-4 xl:px-6 text-lg lg:text-md xl:text-lg font-bold uppercase transition-all bg-general_color rounded-full group-hover:-translate-y-[100px] group-hover:ml-auto hover:opacity-60'>
//                         {price}
//                       </button>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             }
//           )}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default RenderCards;

import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export const RenderCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  sectionTitle
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 overflow-hidden', className)}
    >
      <h2 className='text-3xl font-bold container mx-auto'>{sectionTitle}</h2>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items?.map(
          ({ key, created_at, event_name, price, theatre_name, imgPath }) => {
            return (
              <li className='w-fit group text-end my-5' key={key}>
                <div
                  className={`relative w-[450px] h-[450px] rounded-3xl cursor-pointer transition-all bg-origin-content bg-no-repeat group-hover:pb-20 bg-center bg-cover group-hover:bg-bottom ${imgPath}`}
                >
                  <div className='p-4 lg:p-6 xl:p-8 flex items-center rounded-b-3xl justify-between absolute w-full bottom-0 bg-gradient-to-b from-transparent to-[#00000091] group-hover:block group-hover:pb-4 group-hover:bg-gradient group-hover:to-transparent'>
                    <div className='text-lg text-start font-medium text-gray-500 transition-all group-hover:translate-y-full'>
                      <span className='text-2xl text-black font-bold hidden group-hover:block'>
                        {event_name}
                      </span>
                      <p className='flex items-center justify-between lg:block xl:flex max-[340px]:text-sm'>
                        {created_at}{' '}
                        <span className='hidden group-hover:block'>
                          {theatre_name}
                        </span>
                      </p>
                    </div>
                    <button className='block py-4 lg:py-3 xl:py-4 px-6 lg:px-4 xl:px-6 text-lg lg:text-md xl:text-lg font-bold uppercase transition-all bg-general_color rounded-full group-hover:-translate-y-[100px] group-hover:ml-auto hover:opacity-60'>
                      {price}
                    </button>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
