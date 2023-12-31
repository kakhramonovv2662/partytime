import { pricingCardItems } from '../../constants/pricingCard.constants';
import {
  CardBody,
  CardContainer,
  CardItem
} from '../3DCardEffect/3DCardEffect';
import { SvgIcon } from '../svgIcon/svgIconComponent';

const PricingCard = () => {
  return (
    <section className='py-16' id='traffic'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold'>Packages</h2>
        <div className='grid my-5 grid-cols-3 gap-x-10 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1'>
          {pricingCardItems?.map(
            ({ benefits, key, price, trafficName, defination }) => {
              return (
                <CardContainer
                  style={{
                    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.25)',
                    hover: {
                      boxShadow: '0px 1px 10px 0px rgba(180, 160, 14, 0.833)'
                    }
                  }}
                  key={key}
                  className={`${
                    key !== 2 ? 'bg-white' : 'bg-general_color'
                  } border w-full border-gray-200 rounded-lg flex flex-col gap-8 shadow p-8 cursor-pointer hover:shadow-2xl hover:shadow-emerald-800/[0.5]`}
                >
                  <CardBody className='h-full w-full'>
                    <CardItem
                      as='h5'
                      translateZ='50'
                      className='text-4xl font-bold'
                    >
                      {trafficName}
                    </CardItem>
                    <CardItem
                      as='p'
                      translateZ='50'
                      className='font-medium text-lg'
                    >
                      {defination}
                    </CardItem>
                  </CardBody>
                  <CardBody className='h-full w-full flex items-baseline text-gray-900'>
                    <CardItem
                      translateZ='100'
                      className='text-3xl font-semibold'
                    >
                      $
                    </CardItem>
                    <CardItem
                      translateZ='100'
                      className='text-5xl font-semibold tracking-tight'
                    >
                      {price}
                    </CardItem>
                    <CardItem
                      translateZ='100'
                      className='ms-1 text-xl font-normal text-gray-500'
                    >
                      /month
                    </CardItem>
                  </CardBody>
                  <CardBody className='space-y-5 h-full w-full'>
                    {benefits?.map(({ text, key }) => {
                      return (
                        <CardItem
                          as='li'
                          translateZ='70'
                          key={key}
                          className='flex items-center gap-x-3'
                        >
                          <SvgIcon
                            className='flex-shrink-0'
                            iconName={'package-icon'}
                            fill={'#000'}
                            width={'20px'}
                            height={'20px'}
                          />
                          <span className='text-base font-medium'>{text}</span>
                        </CardItem>
                      );
                    })}
                  </CardBody>
                  <CardItem
                    as='button'
                    translateZ='50'
                    className='text-white bg-black hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-full text-base px-5 py-5 inline-flex justify-center w-full text-center'
                  >
                    Subscribe now
                  </CardItem>
                </CardContainer>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
