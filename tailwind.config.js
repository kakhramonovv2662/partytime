/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette
// eslint-disable-next-line no-undef
} = require('tailwindcss/lib/util/flattenColorPalette');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        general_color: '#FFDD00'
      },
      backgroundImage: {
        thematic_event_img_one: "url('./src/assets/img/thematic-party1.png')",
        thematic_event_img_two: "url('./src/assets/img/tent-party.png')",
        thematic_event_img_three: "url('./src/assets/img/special-party.png')",
        thematic_event_img_four: "url('./src/assets/img/fun-party.png')",
        thematic_event_img_five: "url('./src/assets/img/local-party.png')",
        thematic_event_img_six: "url('./src/assets/img/children-part.png')"
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'meteor-effect': 'meteor 5s linear infinite'
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0
          }
        }
      }
    }
  },
  plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
