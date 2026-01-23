# 7Layers Color System - Complete Reference

## Color Values (Official)

### Primary Dark Palette
| Name | Hex Value | Usage | RGB |
|------|-----------|-------|-----|
| Midnight Obsidian | #050a1a | Main background | rgb(5, 10, 26) |
| Deep Blue | #0f1627 | Card backgrounds | rgb(15, 22, 39) |
| Border Blue | #1a2540 | Borders & dividers | rgb(26, 37, 64) |
| Off-White | #f5f7fa | Text & foreground | rgb(245, 247, 250) |
| Muted Gray | #8b92a4 | Secondary text | rgb(139, 146, 164) |
| Kinetic Teal | #00f5d4 | Accents & highlights | rgb(0, 245, 212) |
| Destructive Red | #ef4444 | Errors & alerts | rgb(239, 68, 68) |

## Component Color Usage

### Header
```
Background: #050a1a (with 0.98 opacity)
Borders: #1a2540
Text: #f5f7fa
Links: #f5f7fa → #00f5d4 on hover
Button: Gradient from #00f5d4 to #00d9b8
```

### Hero Section
```
Background: #050a1a
Text: #f5f7fa
Accent badge: #00f5d4
Call-to-action button: #00f5d4
```

### Cards/Solutions Grid
```
Card background: #0f1627
Card border: #1a2540
Text: #f5f7fa
Icon background: #00f5d4 with 0.2 opacity
Hover border: #00f5d4 with 0.5 opacity
```

### Footer
```
Background: #050a1a
Text: #f5f7fa
Links: #f5f7fa → #00f5d4 on hover
Social icons: #00f5d4 background with hover transition
```

### Forms/Inputs
```
Input background: #0f1627
Input border: #1a2540
Input text: #f5f7fa
Focus ring: #00f5d4
Placeholder: #8b92a4
```

## CSS Custom Properties

```css
:root {
  --background: #050a1a;
  --foreground: #f5f7fa;
  --card: #0f1627;
  --card-foreground: #f5f7fa;
  --primary: #00f5d4;
  --primary-foreground: #050a1a;
  --secondary: #1a2540;
  --secondary-foreground: #f5f7fa;
  --muted: #1a2540;
  --muted-foreground: #8b92a4;
  --accent: #00f5d4;
  --accent-foreground: #050a1a;
  --border: #1a2540;
  --input: #0f1627;
  --ring: #00f5d4;
}
```

## Opacity Usage

| Component | Color | Opacity | Use Case |
|-----------|-------|---------|----------|
| Header | background | 0.98 | Slight transparency |
| Badges | accent | 0.1 | Subtle background |
| Hover States | accent | 0.5 | Border highlight |
| Gradients | accent → darker | Linear | Button gradients |
| Overlays | background | 0.8-0.9 | Image overlays |
| Backdrop Blur | transparent | - | Frosted glass effect |

## Text Contrast Ratios

| Foreground | Background | Ratio | WCAG Level |
|-----------|-----------|-------|-----------|
| #f5f7fa (text) | #050a1a (bg) | 15:1 | AAA ✓ |
| #8b92a4 (muted) | #050a1a (bg) | 6.5:1 | AA ✓ |
| #00f5d4 (accent) | #050a1a (bg) | 10:1 | AA ✓ |
| #f5f7fa (text) | #0f1627 (card) | 13:1 | AAA ✓ |

All color combinations meet or exceed WCAG AA accessibility standards.

## Gradient Definitions

### Primary Gradient (Buttons)
```css
background: linear-gradient(to right, #00f5d4, #00d9b8);
```

### Text Gradient (Headlines)
```css
background: linear-gradient(to right, #00f5d4, rgba(0, 245, 212, 0.6));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Background Gradient (Sections)
```css
background: linear-gradient(to bottom, #050a1a, #0f1627);
```

## Usage Guidelines

### When to Use Each Color:

**#050a1a (Midnight Obsidian)**
- Main page backgrounds
- Primary container backgrounds
- Header and footer backgrounds

**#0f1627 (Deep Blue)**
- Card backgrounds
- Input backgrounds
- Secondary containers
- Subtle accent backgrounds

**#1a2540 (Border Blue)**
- All borders
- Dividers
- Subtle separators
- Secondary backgrounds

**#f5f7fa (Off-White)**
- All primary text
- Headings
- Navigation labels
- Body content

**#8b92a4 (Muted Gray)**
- Secondary text
- Placeholder text
- Disabled states
- Less important information

**#00f5d4 (Kinetic Teal)**
- Call-to-action buttons
- Link hovers
- Accent highlights
- Interactive elements
- Icon backgrounds

**#ef4444 (Red)**
- Error messages
- Destructive actions
- Alert states
- Validation failures

## Animation Colors

All color transitions use 300-500ms duration:
- Link colors: 300ms
- Button hovers: 300ms
- Background changes: 500ms
- Opacity transitions: 300ms

## Dark Mode Implementation

```jsx
<html className="dark">
  <body>
    {/* All colors automatically use dark palette */}
  </body>
</html>
```

The dark class is set as default on the `<html>` element in layout.tsx, making the dark theme the primary experience.

## Future Color Additions

If you need to add more colors:
1. Keep palette to maximum 8 colors
2. Test contrast ratios (minimum 4.5:1 for text)
3. Ensure Teal accent is still the primary highlight
4. Test on dark background only
5. Document in this file

---

**Last Updated**: January 2026
**Status**: Production Ready ✓
