import Hero from './components/hero/hero';
import {
  renderForCardsItems,
  renderFunCards,
  renderLocalCardsItems,
  renderSpecialCards,
  renderTentCards,
  renderThematicCards
} from './constants/renderCard.constants';
import PricingCard from './components/pricingCards/pricingCards';
import { RenderCards } from './components/renderCards/renderCards';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';
import About from './components/about/about';

import './App.css';
import { useState } from 'react';

function App() {
  const [addClass, setAddClass] = useState(true);

  return (
    <div>
      <Hero />
      <About />

      <h2 className='w-full text-5xl text-center my-5 font-bold'>
        Our Results
      </h2>

      <div className='relative'>
        <div
          className={`absolute z-50 -bottom-8 right-0 left-0 ${
            addClass && 'bg-gradient-to-b from-transparent to-gray-700 py-4'
          } `}
        >
          <button
            onClick={() => {
              setAddClass(!addClass);
            }}
            className='block text-white bg-black hover:opacity-85 font-medium rounded-full text-base px-10 py-5 mx-auto'
          >
            {addClass ? 'Load All' : 'Return'}
          </button>
        </div>
        <div className={`${addClass ? 'h-96' : 'h-full'}  overflow-hidden`}>
          <RenderCards
            sectionTitle={'Thematic events'}
            items={renderThematicCards}
            direction='right'
            speed='slow'
          />
          <RenderCards
            sectionTitle={'Tent Events'}
            items={renderTentCards}
            direction='left'
            speed='slow'
          />
          <RenderCards
            sectionTitle={'Special Events'}
            items={renderSpecialCards}
            direction='right'
            speed='slow'
          />
          <RenderCards
            sectionTitle={'Fun Events'}
            items={renderLocalCardsItems}
            direction='left'
            speed='slow'
          />
          <RenderCards
            sectionTitle={'Local Performers'}
            items={renderFunCards}
            direction='right'
            speed='slow'
          />
          <RenderCards
            sectionTitle={'For children'}
            items={renderForCardsItems}
            direction='left'
            speed='slow'
          />
        </div>
      </div>
      {/* <Services /> */}
      <PricingCard />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
