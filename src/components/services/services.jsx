import { serviceFeatures } from '../../constants/services.constants';

const Services = () => {
  return (
    <div className='py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {serviceFeatures.map(feature => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-xl font-semibold leading-7 text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-general_color'></div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-white'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
