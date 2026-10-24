import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * PrimeNG theme aligned with the StarOrigin tokens.
 * Primary = teal; dark surfaces = the navy-black of the site; light surfaces = warm ivory scale.
 * Fine-grained skinning (glass inputs, accordions, tabs) lives in styles/_primeng.scss.
 */
export const StarOriginPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
    colorScheme: {
      light: {
        primary: { color: '#0F6B68', contrastColor: '#ffffff', hoverColor: '#0B5754', activeColor: '#094846' },
        surface: {
          0: '#ffffff',
          50: '#FAF8F4',
          100: '#F3EFE7',
          200: '#E7E1D5',
          300: '#D5CCBB',
          400: '#ABA190',
          500: '#827968',
          600: '#635B4D',
          700: '#4F5867',
          800: '#2E3A48',
          900: '#0A1F33',
          950: '#06121F',
        },
      },
      dark: {
        primary: { color: '#2DD4BF', contrastColor: '#04131A', hoverColor: '#5EEAD4', activeColor: '#99F6E4' },
        surface: {
          0: '#ffffff',
          50: '#E8EEF7',
          100: '#C9D3E1',
          200: '#9AA8BC',
          300: '#6B7A90',
          400: '#4A5870',
          500: '#2A3650',
          600: '#1A2338',
          700: '#121A2C',
          800: '#0A1020',
          900: '#060912',
          950: '#03050B',
        },
      },
    },
  },
});
