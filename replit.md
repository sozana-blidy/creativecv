# Portfolio Website - AI Developer & Data Scientist

## Overview

This is a modern portfolio website built for an AI developer and data scientist named Sozana Blidy. The application showcases professional experience, projects, skills, and provides a contact form for potential clients or employers. It's built as a full-stack application with a React frontend and Express backend, designed to be deployed on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: Memory-based storage (MemStorage class) with PostgreSQL fallback
- **API**: RESTful endpoints for contact form submission

### Build System
- **Frontend Bundler**: Vite for fast development and optimized builds
- **Backend Bundler**: esbuild for production builds
- **Development**: tsx for TypeScript execution in development

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Landing area with animated elements and call-to-action
3. **About Section**: Professional summary with statistics
4. **Projects Section**: Filterable portfolio showcase with project details
5. **Experience Section**: Timeline of professional work experience
6. **Skills Section**: Technical skills with progress indicators
7. **Education Section**: Academic background and achievements
8. **Contact Section**: Contact form with validation and submission handling
9. **Footer**: Social links and copyright information

### UI Components
The application uses shadcn/ui components for consistent design:
- Form components (Input, Textarea, Button)
- Feedback components (Toast, Progress)
- Layout components (Card, Badge, Tabs)
- All components follow the "new-york" style variant

### Backend Components
1. **Routes Handler**: Express route registration and error handling
2. **Storage Layer**: Abstracted storage interface with memory and database implementations
3. **Validation**: Zod schema validation for contact form data
4. **Development Server**: Vite integration for seamless development experience

## Data Flow

### Contact Form Submission
1. User fills out contact form in frontend
2. React Hook Form validates data using Zod schema
3. TanStack Query sends POST request to `/api/contact`
4. Backend validates data and stores contact message
5. Success/error response sent back to frontend
6. Toast notification displays result to user

### Data Storage
- Contact messages stored with fields: name, email, subject, message, timestamp
- User data schema exists but not currently used in the portfolio
- Memory storage used for development, PostgreSQL for production

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Component Library**: Radix UI primitives, shadcn/ui components
- **State Management**: TanStack Query
- **Forms**: React Hook Form, Hookform Resolvers
- **Validation**: Zod
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Utilities**: clsx, class-variance-authority

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple
- **Development**: tsx, esbuild

### Development Dependencies
- **Build Tools**: Vite, TypeScript
- **Replit Integration**: Replit-specific plugins for development
- **Code Quality**: TypeScript strict mode

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with middleware integration
- Automatic TypeScript compilation
- Replit-specific development enhancements

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static files served by Express in production
4. Environment variables for database connection

### Database Strategy
- Drizzle ORM configured for PostgreSQL
- Migration files generated in `./migrations`
- Environment variable `DATABASE_URL` required for database connection
- Memory storage fallback for development without database

### Key Features
- Responsive design for all device sizes
- SEO-friendly single-page application
- Smooth animations and transitions
- Form validation and error handling
- Professional portfolio presentation
- Contact form with backend persistence
- Modern UI with consistent design system