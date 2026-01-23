# 7Layers Website - Visual Reference Guide

## Color System

### Primary Colors
```
Midnight Obsidian:    #0A1128  (Dark Background)
Kinetic Teal:         #00F5D4  (Accent/CTA)
Off-White:            #F8F9FA  (Light Text)
Deep Blue:            #12182F  (Cards/Elements)
```

### Semantic Tokens (CSS Variables)
```
--background:         Midnight Obsidian (dark mode)
--foreground:         Off-white (light text on dark)
--primary:            Kinetic Teal (main actions)
--accent:             Kinetic Teal (highlights)
--card:               Deep Blue (card backgrounds)
--border:             Subtle blue (#20284F with opacity)
```

---

## Typography System

### Heading Hierarchy
```
H1: text-7xl md:text-8xl font-bold (Hero sections)
H2: text-5xl md:text-6xl font-bold (Section titles)
H3: text-2xl md:text-3xl font-bold (Card/subsection titles)
H4: text-xl font-semibold (Smaller headings)
```

### Body Text
```
Large:    text-xl text-foreground/70
Standard: text-base text-foreground/70
Small:    text-sm text-foreground/70
Labels:   text-xs font-semibold uppercase tracking-widest
```

### Font Family
- Headings: Sans-serif (default Geist/system font)
- Body: Sans-serif (default Geist/system font)
- Clean, modern, professional

---

## Component Styles

### Hero Sections
```css
Background:     Full-width background image with gradient overlay
Image Opacity:  0.15-0.30 for readability
Overlay:        Gradient from background via semi-transparent
Height:         Screen height (h-screen) for main hero
               py-32 for section heroes
```

### Solution/Feature Cards
```css
Base:           border border-border/50 rounded-2xl bg-card/50
Padding:        p-8 md:p-12
Hover:          border-accent/50 bg-card/80 shadow-2xl -translate-y-2
Transition:     duration-500
Icon Container: w-16 h-16 rounded-xl bg-gradient-to-br
                from-accent/20 to-accent/5
```

### Buttons & CTAs
```css
Primary Button:
  - bg-gradient-to-r from-accent to-accent/80
  - text-primary rounded-full
  - px-8 py-4 md:px-12 md:py-6
  - font-bold text-lg
  - hover:shadow-2xl hover:shadow-accent/30 transition-all
  - hover:scale-105

Secondary Button:
  - border-2 border-accent/30
  - text-foreground rounded-full
  - hover:border-accent hover:bg-accent/5
```

### Stats Display
```css
Numbers:        text-6xl md:text-7xl font-black
                text-transparent bg-clip-text
                bg-gradient-to-b from-accent to-accent/50
Label:          font-bold text-lg
Container:      p-8 border border-border/50 rounded-xl
                bg-card/30 hover:border-accent/50
```

### Gradient Overlays
```css
Hero Overlay:   bg-gradient-to-r from-background via-background/80 
                to-background

Card Overlay:   bg-gradient-to-br from-accent/20 to-accent/5

Text Gradient:  text-transparent bg-clip-text 
                bg-gradient-to-b from-accent to-accent/50
```

---

## Layout Patterns

### Container & Spacing
```css
Container:      mx-auto px-4 md:px-8
Max-Width:      5xl (80rem) to full-width
Section Padding: py-20 md:py-32
Grid Gap:       gap-8 md:gap-12
Card Padding:   p-8 md:p-12
```

### Grid Layouts
```css
Solutions Grid:     grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
Stats Grid:         grid-cols-2 md:grid-cols-4 gap-8 md:gap-12
Methodology:        grid-cols-1 md:grid-cols-3 gap-12
Two-Column:         grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16
```

---

## Animation Library

### Hover Animations
```
Smooth Color:       transition-colors duration-300
Scale Up:           hover:scale-105 transition-all duration-300
Translate Up:       hover:-translate-y-2 transition-all duration-500
Underline Grow:     w-0 group-hover:w-full transition-all duration-300
Arrow Slide:        group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-transform
Shadow Glow:        hover:shadow-2xl hover:shadow-accent/30
                   transition-all duration-300
```

### Load Animations
```
Fade In:            @keyframes fade-in (opacity)
Fade In Up:         @keyframes fade-in-up (opacity + translateY)
Duration:           1s ease-out
Delay:              Staggered with 0.1s, 0.2s, 0.3s
```

### Scroll Effects
```
Scroll Indicator:   animate-bounce
                   w-6 h-10 border-2 border-accent/40
                   rounded-full
Bounce Duration:    2s infinite
```

---

## Image Specifications

### Hero Images
```
Format:           JPG optimized
Dimensions:       1920x1080 (16:9 aspect ratio)
File Size:        300-500KB compressed
Opacity in CSS:   0.15-0.30 for text readability
Overlay:          Always apply gradient overlay
```

### Logo Image
```
Format:           PNG with transparency
Dimensions:       200x200 (square, responsive sizing)
Display Sizes:    w-10 h-10 (header), w-10 h-10 (footer)
Background:       Transparent (works on dark backgrounds)
Hover Effect:     opacity-80 transition
```

---

## Responsive Breakpoints

### Mobile First Design
```
Mobile:           0px - 640px (default styles)
Tablet:           md: 768px (2-column grids)
Desktop:          lg: 1024px (3-column grids)
Large:            xl: 1280px (full layouts)
```

### Responsive Text
```
Mobile Heading:   text-3xl md:text-5xl lg:text-6xl
Mobile Body:      text-base md:text-lg lg:text-xl
Mobile Padding:   px-4 md:px-8
```

---

## Hover State Examples

### Card Hover
```
Border:    border-border/50 → border-accent/50
Background: bg-card/50 → bg-card/80
Shadow:    No shadow → shadow-2xl
Transform: No change → -translate-y-2
Duration:  duration-500
```

### Button Hover
```
Color:    Various → hover state
Shadow:   None → hover:shadow-2xl hover:shadow-accent/30
Scale:    1 → hover:scale-105
Opacity:  1 → hover:opacity-90
Duration: duration-300
```

### Text/Link Hover
```
Color:    text-foreground/70 → text-accent
Arrow:    opacity-0 → opacity-100
Translate: 0 → translate-x-1 -translate-y-1
Duration: duration-300
```

---

## Accessibility Features

### Color Contrast
- Text on dark background: Off-white (#F8F9FA) on Midnight Obsidian
- Text on light background: Midnight Obsidian on Off-white
- Accent color (Teal) passes WCAG AA standards

### Interactive Elements
- All buttons/links have clear hover states
- Focus states for keyboard navigation
- Icons paired with text labels
- Semantic HTML throughout

### Screen Reader
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where necessary
- Form labels properly associated

---

## Performance Optimizations

### Image Loading
```
Next.js Image:    Automatic optimization
Lazy Loading:     Loading="lazy" for off-screen images
Sizes Attribute:  Responsive image sizing
Format:           WebP with JPEG fallback
```

### CSS
```
Tailwind:         Utility-first CSS
Purging:          Unused styles removed in production
Class Structure:  Semantic, maintainable classes
Animations:       GPU-accelerated (transform, opacity)
```

---

## Page-Specific Styles

### Homepage
- Hero: Full-screen with animated gradient text
- Solutions: 3-column grid with image reveals
- Stats: Large gradient numbers
- CTA: Full-width with background image

### Projects Page
- Hero: Large background image with overlay
- Cards: Premium project showcase
- Stats: Large gradient numbers
- CTA: Bold final call-to-action

### Solutions Page
- Hero: Background image with typography
- Cards: 3-column grid with benefits
- Methodology: 3-step approach display
- CTA: Centered, impactful layout

---

## Design Principles

1. **Premium First**: Every element looks expensive and well-crafted
2. **Dark & Sophisticated**: Dark backgrounds with teal accents
3. **Strategic Images**: Every major section has purposeful imagery
4. **Smooth Motion**: All interactions are smooth and intentional
5. **Clear Hierarchy**: Typography and spacing create clear structure
6. **Professional**: Corporate, serious, trustworthy aesthetic
7. **Minimal Yet Bold**: Clean layouts with bold typography
8. **Responsive Always**: Mobile-first, works on all sizes

---

## Resources

- **Generated Images**: `/public/images/`
- **Logo**: `/public/images/7layer-logo-removebg-preview.png`
- **Colors**: Configured in `/app/globals.css`
- **Fonts**: Default system fonts (Geist)
- **Icons**: Lucide React icons throughout

---

This reference guide ensures consistency across the entire 7Layers website and makes it easy for developers to maintain and extend the design.
