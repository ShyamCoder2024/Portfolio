# 🎨 Portfolio Design System Documentation

A comprehensive guide to the design tokens, patterns, and components used in this portfolio.

---

## Table of Contents
1. [🎨 Color Palette](#-color-palette)
2. [📝 Typography System](#-typography-system)
3. [📐 Spacing & Layout](#-spacing--layout)
4. [🎨 Border & Radius](#-border--radius)
5. [🌑 Shadows & Elevation](#-shadows--elevation)
6. [🧩 Component Patterns](#-component-patterns)
7. [📱 Responsive Breakpoints](#-responsive-breakpoints)
8. [♿ Accessibility](#-accessibility)
9. [📊 Quick Reference Tables](#-quick-reference-tables)
10. [🎯 Usage Guidelines](#-usage-guidelines)

---

## 🎨 Color Palette

### Light Mode Colors

#### Core Colors
| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Background | `#ffffff` | `--bg-color` | Main page background, button text on accent |
| Primary Text | `#1a1a1a` | `--text-color` | Headings, body text, primary content |
| Secondary Text | `#666666` | `--text-secondary` | Descriptions, metadata, captions |
| Accent Orange | `#ff4d00` | `--accent-color` | CTAs, links, highlights, brand color |
| Card Background | `#f5f5f5` | `--card-bg` | Cards, skill tiles, form backgrounds |
| Border Gray | `#e0e0e0` | `--border-color` | Borders, dividers, outlines |

#### Interactive States (Light Mode)
| State | Color | Usage |
|-------|-------|-------|
| Hover Accent | `rgba(255, 77, 0, 0.9)` | Button/link hover states |
| Focus Outline | `#ff4d00` | Keyboard focus indicators |
| Active State | `#cc3d00` | Pressed buttons (darker orange) |

#### Scrollbar Colors (Light Mode)
| Element | Color | Hex Code |
|---------|-------|----------|
| Track | Light Gray | `#f0f0f0` |
| Thumb | Medium Gray | `#cccccc` |
| Thumb Hover | Dark Gray | `#555555` |

### Dark Mode Colors

#### Core Colors
| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Background | `#0a0a0a` | `--bg-color` | Main page background, dark mode base |
| Primary Text | `#ffffff` | `--text-color` | All text, high contrast on dark |
| Secondary Text | `#a0a0a0` | `--text-secondary` | Descriptions, less emphasis text |
| Accent Cyan | `#00d8ff` | `--accent-color` | CTAs, brand accent in dark mode |
| Card Background | `#1a1a1a` | `--card-bg` | Elevated surfaces, cards |
| Border Dark | `#333333` | `--border-color` | Subtle borders, dividers |

#### Interactive States (Dark Mode)
| State | Color | Usage |
|-------|-------|-------|
| Hover Accent | `rgba(0, 216, 255, 0.9)` | Button/link hover states |
| Focus Outline | `#00d8ff` | Keyboard focus indicators |
| Glow Effect | `rgba(0, 216, 255, 0.5)` | Shadows, halos around accent elements |

#### Scrollbar Colors (Dark Mode)
| Element | Color | Hex Code |
|---------|-------|----------|
| Track | Pure Black | `#0a0a0a` |
| Thumb | Dark Gray | `#333333` |
| Thumb Hover | Medium Gray | `#555555` |

### CSS Variables - Ready to Use

```css
/* Light Mode */
:root[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --text-secondary: #666666;
  --accent-color: #ff4d00;
  --card-bg: #f5f5f5;
  --border-color: #e0e0e0;
}

/* Dark Mode */
:root[data-theme="dark"] {
  --bg-color: #0a0a0a;
  --text-color: #ffffff;
  --text-secondary: #a0a0a0;
  --accent-color: #00d8ff;
  --card-bg: #1a1a1a;
  --border-color: #333333;
}
```

### Semantic Colors

| Purpose | Light Mode | Dark Mode | CSS Variable |
|---------|-----------|-----------|--------------|
| Success | `#22c55e` | `#4ade80` | N/A (add if needed) |
| Warning | `#f59e0b` | `#fbbf24` | N/A (add if needed) |
| Error | `#ef4444` | `#f87171` | N/A (add if needed) |
| Info | `#3b82f6` | `#60a5fa` | N/A (add if needed) |

### Usage Guidelines by Color

#### Accent Color (`--accent-color`)
- **Priority Level**: Highest
- **Usage**:
  - Primary CTAs (Contact buttons, Submit forms)
  - Logo highlights (`<span>` elements)
  - Social media icon borders
  - Underline animations on links
  - Section heading underlines
  - Glowing effects (hero image border)
- **Don't Use For**: Body text, large backgrounds

#### Background Color (`--bg-color`)
- **Priority Level**: Foundation
- **Usage**: 
  - Page background
  - Section backgrounds
  - Text color on accent buttons
- **Auto-switches**: Between `#ffffff` and `#0a0a0a` based on theme

#### Text Colors
- **Primary (`--text-color`)**: Headings, navigation, important info
- **Secondary (`--text-secondary`)**: Descriptions, timestamps, less critical info

---

## 📝 Typography System

### Font Families

```css
:root {
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
}
```

| Font Family | Usage | Weight Range |
|-------------|-------|--------------|
| Inter | All text - headings, body, UI | 400-700 |
| System Fallback | `system-ui, -apple-system, sans-serif` | Native OS fonts |

### Font Size Scale

#### Desktop (> 992px)

| Element | Size | Line Height | Usage | CSS |
|---------|------|-------------|-------|-----|
| Hero H1 | 3.5rem (56px) | 1.2 | Main hero heading | `font-size: 3.5rem;` |
| Hero H2 | 2rem (32px) | 1.2 | Hero subheading | `font-size: 2rem;` |
| Section H2 | 2.5rem (40px) | 1.2 | Section headings | `font-size: 2.5rem;` |
| Hero H3 | 1.5rem (24px) | 1.2 | Hero greeting | `font-size: 1.5rem;` |
| Card H3 | 1.3-1.4rem (21-22px) | 1.4 | Card titles | `font-size: 1.3rem;` |
| Body Text | 1rem (16px) | 1.6 | Paragraphs, descriptions | `font-size: 1rem;` |
| Description | 1.1rem (18px) | 1.6 | Section descriptions | `font-size: 1.1rem;` |
| Small Text | 0.9-0.95rem (14-15px) | 1.5 | Metadata, labels | `font-size: 0.9rem;` |
| Tiny Text | 0.8-0.85rem (13px) | 1.4 | Tags, badges, dates | `font-size: 0.8rem;` |

#### Tablet (768px - 992px)

| Element | Size | Change from Desktop |
|---------|------|---------------------|
| Hero H1 | 2.8rem (45px) | -20% |
| Hero H2 | 1.6rem (26px) | -20% |
| Section H2 | 2rem (32px) | -20% |
| Hero H3 | 1.2rem (19px) | -20% |

#### Mobile (< 576px)

| Element | Size | Change from Desktop |
|---------|------|---------------------|
| Hero H1 | 2rem (32px) | -43% |
| Hero H2 | 1.3rem (21px) | -35% |
| Section H2 | 2rem (32px) | -20% |
| Hero H3 | 1.2rem (19px) | -20% |
| Body Text | 0.95rem (15px) | -5% |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Navigation links |
| Semibold | 600 | Buttons, labels, tags, emphasized text |
| Bold | 700 | All headings, logo, hero content |

### Typography Patterns

#### Heading Pattern
```css
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 700;
}
```

#### Section Heading with Underline
```css
h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}
```

#### Body Text
```css
p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}
```

### Letter Spacing

| Context | Value | Usage |
|---------|-------|-------|
| Buttons | 1px | `.btn { letter-spacing: 1px; }` |
| Default | 0 | All other text |

---

## 📐 Spacing & Layout

### Container System

```css
/* Max Width Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section Container */
section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
```

| Breakpoint | Horizontal Padding |
|------------|-------------------|
| Desktop | 20px |
| Mobile | 15px |

### Section Spacing (Vertical Rhythm)

| Element | Desktop | Mobile |
|---------|---------|--------|
| Section Padding (Y) | 80px | 60px |
| Section Margin Bottom | 3rem (48px) | 2rem (32px) |
| Heading Margin Bottom | 1rem (16px) | 1rem (16px) |

### Component Gap Spacing Scale

| Size | Value | Usage |
|------|-------|-------|
| XS | 8px | Tag gaps, inline elements |
| SM | 12px | Button groups, small cards |
| MD | 15-20px | Card padding, icon spacing |
| LG | 25-30px | Grid gaps, section elements |
| XL | 40-50px | Hero sections, large layouts |

### Specific Component Spacing

#### Grid Gaps
```css
.projects-grid { gap: 30px; }     /* Project cards */
.skills-grid { gap: 25px; }        /* Skill cards */
.certifications-grid { gap: 30px; } /* Certification cards */
```

#### Hero Section
```css
.hero-container { gap: 50px; }    /* Content <-> Image */
.social-icons { gap: 20px; }      /* Social media icons */
```

#### Navigation
```css
.nav-menu ul { gap: 30px; }       /* Nav items */
.header-right { gap: 15px; }      /* Header utilities */
```

### Padding Scale

| Element | Padding | Context |
|---------|---------|---------|
| Button | 12px 28px | Primary CTA |
| Button (Mobile) | 10px 24px | Small screens |
| Contact Button | 10px 25px | Header CTA |
| Card | 25-30px | Standard cards |
| Card (Mobile) | 20px | Small screens |
| Skill Card | 30px 20px | Vertical/Horizontal |
| Form Input | 15px | Input fields |

---

## 🎨 Border & Radius

### Border Radius System

| Size | Value | Usage | CSS Variable (potential) |
|------|-------|-------|--------------------------|
| Small | 5px | Scrollbar, small elements | `--radius-sm` |
| Medium | 8px | Certificate logos, inputs | `--radius-md` |
| Large | 12px | Cards, skill tiles | `--radius-lg` |
| XL | 15px | Project cards, cert cards | `--radius-xl` |
| 2XL | 30-40px | Buttons (pill shape) | `--radius-2xl` |
| Circle | 50% | Avatar, theme toggle, social icons | `--radius-circle` |

### Border Radius Examples

```css
/* Cards */
.project-card { border-radius: 15px; }
.skill-card { border-radius: 12px; }
.certification-card { border-radius: 15px; }

/* Buttons */
.btn { border-radius: 40px; }
.contact-btn { border-radius: 30px; }

/* Icons & Images */
.theme-toggle { border-radius: 50%; }
.social-icons a { border-radius: 50%; }
.img-box { border-radius: 50%; }
.cert-logo { border-radius: 8px; }

/* UI Elements */
::-webkit-scrollbar-thumb { border-radius: 5px; }
h2::after { border-radius: 2px; }
```

### Border Widths

| Width | Value | Usage |
|-------|-------|-------|
| Thin | 2px | Most borders (cards, buttons, icons) |
| Medium | 4px | Section heading underline |
| Thick | 5px | Hero image border |

### Border Colors

All borders use CSS variables for theme support:

```css
border: 2px solid var(--border-color);
```

**Light Mode**: `#e0e0e0`  
**Dark Mode**: `#333333`

**Hover State**: `var(--accent-color)` (orange/cyan)

---

## 🌑 Shadows & Elevation

### Shadow Scale

#### Level 1 - Subtle

```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```
**Usage**: Certificate logo stickers, light elevation

#### Level 2 - Standard

```css
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
```
**Usage**: Buttons at rest, cards at rest

#### Level 3 - Raised (Hover)

```css
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
```
**Usage**: Button hover, card hover

#### Level 4 - Elevated

```css
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
```
**Usage**: Skill card hover

#### Level 5 - Maximum

```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
```
**Usage**: Project card hover, certification card hover

#### Header Shadow (Scrolled)

```css
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
```

#### Mobile Nav Shadow

```css
box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
```

### Accent Shadows (Glow Effects)

#### Orange Glow (Light Mode)
```css
box-shadow: 0 0 20px var(--accent-color);
```
**Usage**: Social icon hover, hero image border

#### Cyan Glow (Dark Mode)
```css
box-shadow: 0 0 20px var(--accent-color);
```
**Usage**: Same elements in dark mode

#### Combined Elevation + Glow
```css
.cert-icon:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Shadow Usage Patterns

| Component | Rest State | Hover State |
|-----------|------------|-------------|
| Button | `0 0 10px rgba(0,0,0,0.1)` | `0 5px 15px rgba(0,0,0,0.2)` |
| Card | None or subtle | `0 10px 30px rgba(0,0,0,0.15)` |
| Social Icon | None | `0 0 20px var(--accent-color)` |
| Skill Card | None | `0 8px 20px rgba(0,0,0,0.1)` |

---

## 🧩 Component Patterns

### Buttons

#### Primary CTA Button
```css
.btn {
  display: inline-block;
  padding: 12px 28px;
  background: var(--accent-color);
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: var(--bg-color);
  letter-spacing: 1px;
  font-weight: 600;
  transition: 0.5s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

**Colors**:
- Light Mode: Orange bg (`#ff4d00`), White text
- Dark Mode: Cyan bg (`#00d8ff`), Black text

#### Secondary Button (Header Contact)
```css
.contact-btn {
  background: var(--accent-color);
  color: var(--bg-color);
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: 0.3s;
}

.contact-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
```

#### Icon Button (Theme Toggle)
```css
.theme-toggle {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  transform: rotate(180deg);
}
```

### Cards

#### Standard Card (Projects, Certifications)
```css
.project-card {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-color: var(--accent-color);
}
```

#### Skill Card
```css
.skill-card {
  background: var(--card-bg);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.skill-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
```

### Badges & Tags

#### Project Tag
```css
.tag {
  background: var(--accent-color);
  color: var(--bg-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}
```

#### Badge Pattern
```css
/* Add for status badges if needed */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

### Social Media Icons

```css
.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  font-size: 1.2rem;
  color: var(--accent-color);
  transition: 0.5s ease;
}

.social-icons a:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  box-shadow: 0 0 20px var(--accent-color);
}
```

### Links

#### Navigation Link with Underline Animation
```css
.nav-menu a {
  font-size: 1rem;
  font-weight: 500;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}
```

#### Credential Link (Certifications)
```css
.cert-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: var(--accent-color);
  color: var(--bg-color);
  transition: all 0.3s ease;
}

.cert-link:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

---

## 📱 Responsive Breakpoints

### Tailwind-Style Breakpoints

| Name | Min Width | Max Width | Usage |
|------|-----------|-----------|-------|
| `xs` | 0px | 575px | Mobile phones |
| `sm` | 576px | 767px | Large phones |
| `md` | 768px | 991px | Tablets |
| `lg` | 992px | 1199px | Small laptops |
| `xl` | 1200px | ∞ | Desktop |

### Media Query Patterns

```css
/* Mobile First - Tablet */
@media (max-width: 768px) {
  section { padding: 60px 15px; }
  h2 { font-size: 2rem; }
}

/* Tablet to Desktop */
@media (max-width: 992px) {
  .hero-container { flex-direction: column-reverse; }
}

/* Mobile Only */
@media (max-width: 576px) {
  .hero-content h1 { font-size: 2rem; }
}

/* Large Desktop */
@media (min-width: 1200px) {
  /* Optional enhancements */
}
```

### Common Responsive Patterns

#### Typography Scaling
```css
/* Desktop */
h1 { font-size: 3.5rem; }

/* Tablet */
@media (max-width: 992px) {
  h1 { font-size: 2.8rem; }
}

/* Mobile */
@media (max-width: 576px) {
  h1 { font-size: 2rem; }
}
```

#### Grid Responsiveness
```css
/* Desktop: 3 columns */
.grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .certifications-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile: 1 column */
@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
}
```

#### Padding/Spacing Adjustments
```css
/* Desktop */
.card { padding: 30px; }

/* Tablet */
@media (max-width: 768px) {
  .card { padding: 25px; }
}

/* Mobile */
@media (max-width: 480px) {
  .card { padding: 20px; }
}
```

#### Visibility Control
```css
/* Hide on mobile */
@media (max-width: 768px) {
  .contact-btn { display: none; }
  .hamburger { display: block; }
}
```

---

## ♿ Accessibility

### Focus States

#### Default Focus (All Interactive Elements)
```css
button:focus,
a:focus,
input:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

#### Button Focus
```css
.btn:focus-visible {
  outline: 3px solid var(--accent-color);
  outline-offset: 3px;
}
```

### Selection Highlighting

```css
::selection {
  background: var(--accent-color);
  color: var(--bg-color);
}
```

### Color Contrast Ratios (WCAG AA Compliance)

| Pairing | Contrast Ratio | WCAG Level | Usage |
|---------|----------------|------------|-------|
| `#1a1a1a` on `#ffffff` | 16.1:1 | AAA | Body text (light mode) |
| `#ffffff` on `#0a0a0a` | 19.4:1 | AAA | Body text (dark mode) |
| `#666666` on `#ffffff` | 5.7:1 | AA | Secondary text (light) |
| `#a0a0a0` on `#0a0a0a` | 9.8:1 | AAA | Secondary text (dark) |
| `#ffffff` on `#ff4d00` | 3.6:1 | AA (Large Text) | Buttons (light mode) |
| `#0a0a0a` on `#00d8ff` | 11.2:1 | AAA | Buttons (dark mode) |

### Semantic HTML Examples

#### Section Structure
```html
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading">About <span>Me</span></h2>
  <!-- Content -->
</section>
```

#### Navigation
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <!-- More items -->
  </ul>
</nav>
```

#### Buttons
```html
<button aria-label="Toggle dark mode" class="theme-toggle">
  <FaSun />
</button>
```

#### Links
```html
<a href="url" target="_blank" rel="noopener noreferrer">
  View Certificate
</a>
```

### Keyboard Navigation

All interactive elements must be keyboard accessible:
- **Tab**: Navigate forward
- **Shift + Tab**: Navigate backward
- **Enter/Space**: Activate buttons/links
- **Escape**: Close modals/menus

---

## 📊 Quick Reference Tables

### Most Common Color Combinations

| Context | Background | Text | Border | Accent |
|---------|------------|------|--------|--------|
| Page | `--bg-color` | `--text-color` | N/A | `--accent-color` |
| Card | `--card-bg` | `--text-color` | `--border-color` | `--accent-color` |
| Button Primary | `--accent-color` | `--bg-color` | `--accent-color` | N/A |
| Button Secondary | `--card-bg` | `--text-color` | `--border-color` | N/A |
| Input | `--card-bg` | `--text-color` | `--border-color` | `--accent-color` |
| Tag/Badge | `--accent-color` | `--bg-color` | N/A | N/A |

### Most Common Typography Combinations

| Component | Font Size | Weight | Line Height | Color |
|-----------|-----------|--------|-------------|-------|
| Hero Title | 3.5rem | 700 | 1.2 | `--text-color` |
| Section Heading | 2.5rem | 700 | 1.2 | `--text-color` |
| Card Title | 1.3-1.4rem | 700 | 1.4 | `--text-color` |
| Body Text | 1rem | 400 | 1.6 | `--text-secondary` |
| Button Text | 1rem | 600 | 1 | `--bg-color` |
| Label/Meta | 0.9rem | 600 | 1.5 | `--text-secondary` |
| Tag | 0.8rem | 600 | 1.2 | `--bg-color` |

### Spacing Quick Reference

| Component | Padding | Margin | Gap |
|-----------|---------|--------|-----|
| Section | 80px (Y), 20px (X) | 0 auto | N/A |
| Card | 25-30px | N/A | N/A |
| Button | 12px 28px | N/A | N/A |
| Grid | N/A | N/A | 25-30px |
| Icon Group | N/A | N/A | 20px |
| Nav Items | N/A | N/A | 30px |

---

## 🎯 Usage Guidelines

### Color Priority Rules

1. **Accent Color** is the star - use sparingly for maximum impact
   - CTAs, highlights, interactive states
   - ~5-10% of the interface
   
2. **Text Colors** provide hierarchy
   - Primary (`--text-color`) for headings and important content
   - Secondary (`--text-secondary`) for supporting information
   
3. **Neutral Colors** create structure
   - Backgrounds and cards for content organization
   - Borders for subtle separation

4. **Never**:
   - Put `--text-color` on `--text-secondary` background (low contrast)
   - Use accent color for large text blocks
   - Mix light and dark mode variables manually

### Typography Hierarchy

1. **H1**: Hero only (3.5rem)
2. **H2**: Section headings (2.5rem) + underline accent
3. **H3**: Card titles, subsections (1.3-1.5rem)
4. **Body**: Descriptions, content (1rem)
5. **Small**: Meta info, labels (0.8-0.9rem)

**Rule**: Maintain at least 2-step size difference between levels

### Spacing Best Practices

#### Vertical Rhythm
- Section spacing: 80px (desktop) / 60px (mobile)
- Element spacing: Use multiples of 4-8px
- Heading margin-bottom: 1-3rem based on level

#### Horizontal Spacing
- Container max-width: 1200px
- Side padding: 20px (desktop) / 15px (mobile)
- Gap in grids: 25-30px

#### Component Padding
- Cards: 25-30px
- Buttons: 12-15px vertical, 24-28px horizontal
- Inputs: 12-15px all around

### Component Design Principles

1. **Consistency**: Use the same border-radius, shadows, and hover effects across similar components
2. **Feedback**: Always provide visual feedback for interactive states (hover, focus, active)
3. **Accessibility**: Maintain color contrast, provide focus indicators, use semantic HTML
4. **Responsiveness**: Test all components at mobile (< 576px), tablet (768px), and desktop (> 1200px)
5. **Theme Support**: Always use CSS variables instead of hardcoded colors

---

## 🔗 Related Files

- [`index.css`](./src/index.css) - Core variables and global styles
- [`Header.css`](./src/components/Header.css) - Navigation patterns
- [`Hero.css`](./src/components/Hero.css) - Hero section & animations
- [`Projects.css`](./src/components/Projects.css) - Card patterns
- [`Skills.css`](./src/components/Skills.css) - Skill card grid
- [`Certifications.css`](./src/components/Certifications.css) - Certification cards with logos

---

**Last Updated**: 2024  
**Version**: 1.0  
**Maintained by**: Portfolio Design System
