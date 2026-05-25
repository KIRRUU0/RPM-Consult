---
name: Vibrant Corporate Modern
colors:
  surface: '#f8faf8'
  surface-dim: '#d8dad9'
  surface-bright: '#f8faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f2'
  surface-container: '#eceeec'
  surface-container-high: '#e6e9e7'
  surface-container-highest: '#e1e3e1'
  on-surface: '#191c1b'
  on-surface-variant: '#3f4a3e'
  inverse-surface: '#2e3130'
  inverse-on-surface: '#eff1ef'
  outline: '#6e7a6d'
  outline-variant: '#becabb'
  surface-tint: '#006e2d'
  primary: '#006b2c'
  on-primary: '#ffffff'
  primary-container: '#0f863b'
  on-primary-container: '#f7fff2'
  inverse-primary: '#73dc86'
  secondary: '#835400'
  on-secondary: '#ffffff'
  secondary-container: '#fcab28'
  on-secondary-container: '#694300'
  tertiary: '#2c683b'
  on-tertiary: '#ffffff'
  tertiary-container: '#468152'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8ff99f'
  primary-fixed-dim: '#73dc86'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#ffb957'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#b1f2b9'
  tertiary-fixed-dim: '#96d59f'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#135128'
  background: '#f8faf8'
  on-background: '#191c1b'
  surface-variant: '#e1e3e1'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style

This design system translates a bold, professional consulting identity into a clean digital experience. The brand personality is authoritative yet energetic, combining the reliability of corporate consulting with a vibrant, growth-oriented aesthetic. 

The visual style is **Corporate / Modern** with a focus on **Tonal Layering**. It utilizes high-impact color transitions and crisp, geometric layouts to evoke trust and forward momentum. Large-scale typography and professional photography (office environments, skyscrapers, confident professionals) serve as the foundation of the visual narrative. Whitespace is used strategically to maintain clarity in data-heavy service sections.

## Colors

The palette is driven by a high-energy green and yellow/orange spectrum, symbolizing growth and success. 

- **Primary Green:** Used for main actions, headers, and key brand elements. It represents stability and professional vitality.
- **Accent Gradient:** A transition from the primary green to a vibrant yellow/orange. This should be used for high-impact zones, such as hero backgrounds, card headers, and call-to-action sections.
- **Tertiary Deep Green:** Used for high-contrast text or borders to ground the lighter greens and ensure legibility.
- **Neutral Base:** A very light, mint-tinted off-white is used for background surfaces to soften the overall interface compared to pure white, reducing eye strain while maintaining a clean look.

## Typography

Hanken Grotesk is the sole typeface, providing a unified, contemporary, and highly legible experience across all touchpoints. 

Headlines use heavy weights (700-800) to create a strong hierarchy, often utilizing all-caps for primary section titles to mirror the "COMPANY PROFILE" styling. Body text remains at a comfortable 16px to 18px for long-form consulting reports and service descriptions. Tight letter spacing is applied to larger headlines to maintain a compact, professional "block" look typical of high-end corporate print materials.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to mimic the structured feel of a physical company profile. 

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Large 80px side margins provide breathing room.
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** An 8px base unit governs all padding and margins. Vertical rhythm is generous between sections (e.g., 120px separation) to emphasize distinct service offerings and corporate values. 

Use overlapping elements—such as images that break the grid slightly or cards that sit half-on/half-off a gradient background—to create depth and visual interest without sacrificing professionalism.

## Elevation & Depth

This design system uses **Tonal Layers** and **Subtle Gradients** instead of heavy shadows to create hierarchy. 

- **Surface Levels:** The primary background is the neutral off-white. Secondary sections (like Core Values) use a full-bleed gradient background or a high-contrast deep green.
- **Cards:** Use "Ghost Borders"—low-opacity outlines (1px solid, Primary Green at 20% opacity)—rather than drop shadows. This keeps the interface feeling "flat-plus" and modern.
- **Interactivity:** Elements only lift (using a soft, low-blur shadow) during hover states to signal clickability.
- **Depth:** Backgrounds often feature large, semi-transparent abstract shapes derived from the brand logo to provide a sense of layered sophistication.

## Shapes

The shape language is **Rounded**, balancing the sharp lines of corporate architecture with a friendly, approachable consulting touch. 

Standard components (buttons, input fields) use a 0.5rem (8px) radius. Larger containers or feature cards may use a 1rem (16px) radius to feel more distinct. The "Succeed" and "Excellence" cards from the brand assets should be replicated with these rounded corners and a persistent accent border to highlight key information.

## Components

- **Buttons:** Primary buttons use the green-to-yellow gradient with white bold text. Secondary buttons use a primary green outline with a transparent background.
- **Service Cards:** Feature a top header area with a gradient background, followed by white content area. Icons should be line-art style with green and yellow accents.
- **Checklists:** Use circular green checkmarks as seen in the "Mission" and "Core Values" sections.
- **Value Blocks:** Cards with a thick 2px gradient border and a title area that "pops" over the top edge.
- **Quote Blocks:** Use large, stylized yellow quotation marks (serif for contrast, or bold Hanken Grotesk) to highlight client testimonials or mission statements.
- **Lists:** Clean, bulleted lists with generous line height and green bullet icons to maintain thematic consistency.