const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      root: {
        color: '#535066'
      },
      borderRadius: {
        xl: '20px'
      },
      borderColor: {
        base: '#E3E6F1',
        danger: '#EE1D23',
        muted: '',
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        card: '0px 14px 44px rgba(166, 176, 197, 0.28)'
      },
      colors: {
        DEFAULT: '#535066',
        primary: '#535066',
        danger: '#EE1D23'
      },
      textColor: {
        DEFAULT: '#535066',
        base: '#535066',
        muted: '#A6B0C5'
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        sans: ['SF Pro Display'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['12px', { lineHeight: '17px' }],
        base: ['14px', { lineHeight: '1.5'}],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        medium: 500
      }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, addComponents, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });

      addComponents({
        '.btn': {
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '13px !important',
          fontWeight: '600',
          lineHeight: '16px'
        },
        '.btn-primary': {
          backgroundColor: '#535066',
          color: '#ffffff',

          '&:hover': {
            backgroundColor: '#333142',
            boxShadow: '0px 14px 44px rgba(166, 176, 197, 0.28)'
          },
        },
      });
    }),
  ],
};
