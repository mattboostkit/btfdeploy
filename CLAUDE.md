# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Medical aesthetics clinic website for Beyond The Face in Tunbridge Wells. React SPA with TypeScript, built with Vite and styled with Tailwind CSS.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages (custom script)

## Architecture

### Core Stack
- React 18.3.1 with TypeScript
- Vite 5.4.2 for build tooling
- Tailwind CSS 3.4.1 with custom theme extensions
- React Router DOM 6.22.1 for routing
- React Helmet Async for SEO/meta tags

### Project Structure
- `/src/pages/` - Route-level components (Home, Contact, Services, etc.)
- `/src/components/` - Reusable UI components (Hero, Navbar, Footer, etc.)
- `/src/data/` - Static data exports (treatments, testimonials)
- `/src/assets/images/` - All images (imported via Vite for optimization)
- `/src/types.ts` - TypeScript interfaces for Treatment, Testimonial, etc.

### Key Patterns

**Form Integration**: External forms via BoostKit/GoHighLevel iframes
- Contact forms and booking calendars embedded as iframes
- Custom CSS injection for styling consistency
- Dynamic height adjustment for mobile responsiveness
- Found in: `ContactForm.tsx`, `BookingFlow.tsx`

**Image Handling**: Always import from `/src/assets/images/`
```typescript
import heroImage from '../assets/images/hero-background.jpg';
```

**Treatment Data Structure**: Type-safe treatment categories
- Organized by category (Injectables, Lifting & Tightening, etc.)
- Each treatment has id, name, description, benefits, duration, price
- Data in `/src/data/treatments.ts`

**SEO Implementation**: Comprehensive meta tags and structured data
- LocalBusiness schema.org markup
- OpenGraph and Twitter Cards
- Geographic meta tags for local SEO
- Implemented via React Helmet Async

## Deployment
- **Platform**: Netlify (static site)
- **Config**: `netlify.toml` with security headers and redirects
- **Build Output**: `/dist` directory
- **SPA Routing**: Catch-all redirect to index.html for client-side routing

## Development Guidelines

### Styling
- Use Tailwind utilities first, custom CSS only when necessary
- Theme colors: primary (warm beige), secondary (blue-grey)
- Custom gradients available: hero, card, button, section, glass

### Component Development
- TypeScript interfaces for all props
- Keep components focused and reusable
- Page components compose section components
- Use React Router's Link for internal navigation

### Performance Considerations
- Images imported through Vite for optimization
- Lucide React icons excluded from optimization bundle
- Tailwind CSS automatically purged in production
- Static assets cached for 1 year via Netlify headers

## External Dependencies

### Form System
- **Provider**: BoostKit/GoHighLevel
- **Integration**: iframe-based with CSS injection
- **Calendars**: Separate for consultations vs treatments
- **Important**: Forms are not self-contained - require external service

### Analytics & Tracking
- Google Analytics 4 configured
- Facebook Pixel for marketing
- Structured data for local business SEO

## Testing
Currently no test framework implemented. Linting via ESLint with TypeScript and React plugins.