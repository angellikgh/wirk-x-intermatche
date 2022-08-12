const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      root: {
        color: '#535066',
      },
      borderRadius: {
        xl: '20px',
      },
      borderColor: {
        base: '#E3E6F1',
        danger: '#EE1D23',
        light: '#F1F4FA',
        grey: '#A6B0C533',
      },
      boxShadow: {
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        card: '0px 14px 44px rgba(166, 176, 197, 0.28)',
      },
      colors: {
        DEFAULT: '#535066',
        primary: {
          DEFAULT: '#535066',
          light: '#8C84FF1A',
        },
        success: {
          DEFAULT: '#506659',
          light: '#9BDFB633',
        },
        danger: {
          DEFAUT: '#EE1D23',
          light: '#FF508433',
        },
        info: {
          light: '#F7F8FA',
        },
        warning: {
          DEFAULT: '#FF918A',
          light: '#FF966C1F',
        },
        muted: {
          DEFAULT: '#A6B0C5',
        },
      },
      margin: {
        '5px': '5px !important',
      },
      textColor: {
        DEFAULT: '#535066',
        primary: '#7982FF',
        danger: '#EE1D23',
        base: '#535066',
        muted: '#A6B0C5',
        red: {
          light: '#FF9092',
        },
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        sans: ['SF Pro Display'],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.75rem' }],
        xs: ['0.75rem', { lineHeight: '0.875rem' }],
        sm: ['12px', { lineHeight: '14px' }],
        base: ['14px', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, addComponents, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });

      addComponents({
        '.btn': {
          boxShadow: 'none !important',
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '13px',
          fontWeight: '600',
          lineHeight: '16px',
        },
        '.btn-primary': {
          backgroundColor: '#535066',
          color: '#ffffff',

          '&:hover': {
            backgroundColor: '#333142',
            boxShadow: '0px 14px 44px rgba(166, 176, 197, 0.28)',
          },
        },
        '.btn-outline': {
          backgroundColor: '#ffffff',
          border: '1px solid #F1F4FA !important',
          color: '#535066',

          '&:hover': {
            backgroundColor: '#d6d6d6',
            boxShadow: '0px 14px 44px rgba(166, 176, 197, 0.28)',
          },
        },
      });

      addComponents({
        '.main': {
          padding: '40px',
          gap: '10px',
        },

        '.page-title': {
          marginBottom: '20px',
          padding: '5px 0px',
          h1: {
            fontSize: '18px',
            lineHeight: '21px',
          },
          svg: {
            marginRight: '10px',
          },
        },
      });

      addComponents({
        '.card': {
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#F7F8FA',

          '.card-title': {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '17px',
            paddingBottom: '10px',
          },
          '.card-body': {
            paddingTop: '10px',
          },
          '[type=number]': {
            fontSize: '12px',
          },
          '[type=category]': {
            fontSize: '12px',
          },
          '.recharts-surface': {
            borderRadius: '16px',
          },
        },
      });

      addComponents({
        '.summary': {
          marginBottom: '20px',

          '.summary-title': {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '17px',
            marginBottom: '5px',
          },
          '.summary-content': {
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '29px',
          },
        },
      });

      addComponents({
        '.table': {
          fontSize: '12px',
          lineHeight: '14px',
          textAlign: 'left',
          width: '100%',

          thead: {
            color: '#A6B0C5',
            fontWeight: 600,

            th: {
              padding: '0.6rem',
            },
          },
          tbody: {
            td: {
              padding: '0.4rem',
            },
          },
        },
      });

      addComponents({
        '.tag': {
          borderRadius: '5px',
          fontSize: '11px',
          lineHeight: '13px',
          padding: '5px 7px',
        },
      });
    }),
  ],
};
