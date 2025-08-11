# Eidolon-Genesis-Site
# Overview

Eidolon Genesis is a dark fantasy sci-fi project centered around an Italian multimedia universe. The application is a promotional/informational website built with React and Express that showcases the Eidolon Genesis world - a post-apocalyptic setting where "soul fractures" (Eidolons) allow individuals to manipulate dimensional energy. The site presents the story, factions, characters, and world-building elements through an immersive dark-themed interface with cyberpunk aesthetics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring dark themes, neon accents, and cyberpunk aesthetics
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui patterns
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Design Patterns**: Component-based architecture with reusable UI components, custom hooks for mobile detection and toast notifications

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API structure with route registration pattern
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for future database integration
- **Development Setup**: Hot module replacement with Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Current**: In-memory storage implementation for user data
- **Planned**: PostgreSQL database integration configured via Drizzle ORM
- **Schema**: User entity with username/password fields, designed for future expansion
- **Migration System**: Drizzle Kit configured for database schema management

## Authentication and Authorization
- **Current**: Basic user storage interface prepared for authentication implementation
- **Session Management**: Express session configuration with PostgreSQL session store (connect-pg-simple)
- **Security**: Structured for future implementation of secure authentication flows

## External Dependencies
- **Database**: Neon PostgreSQL (configured but not actively used)
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Services**: Google Fonts (Orbitron and Inter font families)
- **Icon Library**: Font Awesome for iconography
- **Asset Management**: Local asset storage for images and media files

The architecture follows a modern full-stack pattern with clear separation of concerns, prepared for scalability and future feature expansion while currently serving as a content showcase website.
