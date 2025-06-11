/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'], /* Keeping this in case of future toggle, but default is dark */
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem', /* Adjusted padding for personal site */
			screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
				xl: '1280px',
        '2xl': '1536px', /* Added larger breakpoint */
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				'primary-bg': 'hsl(var(--background-primary))',
        'secondary-bg': 'hsl(var(--background-secondary))',
        'accent-bg': 'hsl(var(--background-accent))',
        'highlight-bg': 'hsl(var(--background-highlight))',
        'neutral-divider': 'hsl(var(--neutral-divider))',
        'primary-fg': 'hsl(var(--foreground-primary))',
        'accent-fg': 'hsl(var(--foreground-accent))',
				background: 'hsl(var(--background-primary))',
				foreground: 'hsl(var(--foreground-primary))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0px' }, /* Changed from 0 to 0px */
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0px' }, /* Changed from 0 to 0px */
				},
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        'slide-in-elliptic-top-fwd': {
          '0%': { transform: 'translateY(-600px) rotateX(-30deg) scale(0)', 'transform-origin': '50% 100%', opacity: '0' },
          '100%': { transform: 'translateY(0) rotateX(0) scale(1)', 'transform-origin': '50% 1400px', opacity: '1' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'text-focus-in': 'text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards',
        'slide-in-elliptic-top-fwd': 'slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
			},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary-fg'),
            a: {
              color: theme('colors.accent-fg'),
              '&:hover': {
                color: theme('colors.highlight-bg'),
              },
            },
            h1: { color: theme('colors.primary-fg') },
            h2: { color: theme('colors.primary-fg') },
            h3: { color: theme('colors.primary-fg') },
            h4: { color: theme('colors.primary-fg') },
            strong: { color: theme('colors.primary-fg') },
            code: { color: theme('colors.accent-fg'), backgroundColor: theme('colors.secondary-bg') },
            figcaption: { color: theme('colors.muted-foreground') },
          },
        },
      }),
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};