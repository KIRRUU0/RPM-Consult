/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006b2c",
        "primary-container": "#0f863b",
        "on-primary": "#ffffff",
        "primary-fixed": "#8ff99f",
        "primary-fixed-dim": "#73dc86",
        "on-primary-fixed": "#002109",
        "on-primary-fixed-variant": "#005320",
        
        secondary: "#835400",
        "secondary-container": "#fcab28",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#694300",
        "secondary-fixed": "#ffddb5",
        "secondary-fixed-dim": "#ffb957",
        "on-secondary-fixed": "#2a1800",
        "on-secondary-fixed-variant": "#643f00",
        
        tertiary: "#2c683b",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#468152",
        "on-tertiary-container": "#f7fff3",
        "tertiary-fixed": "#b1f2b9",
        "tertiary-fixed-dim": "#96d59f",
        "on-tertiary-fixed": "#00210a",
        "on-tertiary-fixed-variant": "#135128",
        
        background: "#f8faf8",
        "on-background": "#191c1b",
        surface: "#f8faf8",
        "surface-variant": "#e1e3e1",
        "on-surface": "#191c1b",
        "on-surface-variant": "#3f4a3e",
        "surface-dim": "#d8dad9",
        "surface-bright": "#f8faf8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f2",
        "surface-container": "#eceeec",
        "surface-container-high": "#e6e9e7",
        "surface-container-highest": "#e1e3e1",
        "inverse-surface": "#2e3130",
        "inverse-on-surface": "#eff1ef",
        "inverse-primary": "#73dc86",
        
        outline: "#6e7a6d",
        "outline-variant": "#becabb",
        
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "surface-tint": "#006e2d",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem", // 4px (sm in DESIGN.md is 0.25rem)
        md: "0.5rem",       // 8px (DEFAULT in DESIGN.md)
        lg: "0.75rem",      // 12px (md in DESIGN.md)
        xl: "1rem",         // 16px (lg in DESIGN.md)
        "2xl": "1.5rem",     // 24px (xl in DESIGN.md)
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "80px",
        "container-max": "1280px",
        gutter: "24px",
        unit: "8px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
}
