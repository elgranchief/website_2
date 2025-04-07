import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme'); // Import default theme

const config: Config = {
  content: [
    // Ensure these paths cover all components and pages using Tailwind classes
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other directories if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use CSS variables defined in layout.tsx
        serif: ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Refined sophisticated neutral palette
        'brand-background': '#FFFFFF', // Pure white background for maximum contrast with photography
        'brand-background-alt': '#F9F9F9', // Subtle off-white for alternate sections
        'brand-text-primary': '#1A1A1A', // Softer black for primary text/headings
        'brand-text-secondary': '#595959', // Medium gray for secondary text
        'brand-accent': '#A89887', // Desaturated taupe accent
        'brand-accent-hover': '#8E7E6D', // Darker taupe for hover
        'brand-border': '#E5E5E5', // Lighter gray for borders
        'brand-muted': '#F2F2F2', // Very subtle gray for muted backgrounds
      },
      spacing: {
        // Enhanced spacing scale for more generous whitespace
        '18': '4.5rem',   // 72px
        '26': '6.5rem',   // 104px
        '34': '8.5rem',   // 136px
        '68': '17rem',    // 272px
        '100': '25rem',   // 400px
        '128': '32rem',   // 512px
      },
      maxWidth: {
        'content': '65ch', // Optimal reading width for text blocks
      },
      fontSize: {
        // Refined typographic scale
        'xxs': ['0.6875rem', { lineHeight: '1rem' }],      // 11px
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.5rem' }],      // 14px
        'base': ['1rem', { lineHeight: '1.75rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '2rem' }],         // 20px
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],     // 30px
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],     // 36px
        '5xl': ['3rem', { lineHeight: '3.5rem' }],         // 48px
        '6xl': ['3.75rem', { lineHeight: '4.25rem' }],     // 60px
      },
      letterSpacing: {
        'tightest': '-.075em',
        'tighter': '-.05em',
        'tight': '-.025em',
        'normal': '0',
        'wide': '.025em',
        'wider': '.05em',
        'widest': '.1em',
        'ultrawide': '.15em',
      },
      lineHeight: {
        'tighter': '1.1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
        'extra-loose': '2.25',
      },
      borderWidth: {
        'hairline': '0.5px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'gallery-2': 'repeat(2, minmax(0, 1fr))',
        'gallery-3': 'repeat(3, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    // Add plugins if needed, e.g., @tailwindcss/typography
  ],
};
export default config;
