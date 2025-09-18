# SmartMeet

A modern, responsive web application built with Next.js 15, featuring Clerk authentication, shadcn/ui components, and Tailwind CSS. SmartMeet provides a sleek dashboard interface with comprehensive user management and authentication capabilities.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Authentication**: Clerk Next.js integration
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
smartmeet/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Protected dashboard page
│   │   ├── sign-in/
│   │   │   └── [[...rest]]/
│   │   │       └── page.tsx       # Clerk sign-in page
│   │   ├── sign-up/
│   │   │   └── [[...rest]]/
│   │   │       └── page.tsx       # Clerk sign-up page
│   │   ├── globals.css            # Global styles with Tailwind
│   │   ├── layout.tsx             # Root layout with Clerk provider
│   │   └── page.tsx               # Home page (redirects to sign-in)
│   ├── components/
│   │   └── ui/                    # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ... (40+ components)
│   ├── hooks/
│   │   └── use-mobile.ts          # Mobile detection hook
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn helper)
│   └── middleware.ts              # Clerk middleware for route protection
├── public/                        # Static assets
├── components.json                # shadcn/ui configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **Light Mode**: Clean neutral colors with subtle grays
- **Dark Mode**: Deep dark backgrounds with high contrast
- **Primary**: Dark gray (#333) / Light gray (#E5E5E5)
- **Accent**: Subtle gray variations
- **Destructive**: Red tones for error states

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace Font**: Geist Mono (code, technical content)
- **Font Loading**: Optimized with Next.js font optimization

### Components
- **40+ UI Components**: Complete design system with shadcn/ui
- **Accessibility**: ARIA-compliant components
- **Responsive**: Mobile-first design approach
- **Customizable**: CSS variables for easy theming

## 🔐 Authentication & Security

### Clerk Integration
- **Provider**: ClerkProvider wraps the entire application
- **Routes**: Dedicated sign-in and sign-up pages
- **Protection**: Middleware protects all routes except auth pages
- **User Management**: Built-in user button and profile management

### Route Protection
```typescript
// middleware.ts
export const config = {
  matcher: [
    "/((?!sign-in|sign-up).*)", // Protect everything except auth pages
  ],
};
```

### Authentication Flow
1. **Home Page**: Redirects to `/sign-in`
2. **Sign In**: Clerk-hosted authentication
3. **Dashboard**: Protected route accessible after authentication
4. **Sign Out**: Integrated user button with sign-out functionality

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smartmeet
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Features

### Current Features
- ✅ **Authentication**: Complete Clerk integration
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Dark/Light Mode**: Built-in theme support
- ✅ **Protected Routes**: Middleware-based route protection
- ✅ **Modern UI**: shadcn/ui component library
- ✅ **TypeScript**: Full type safety

### Dashboard Features
- **User Authentication**: Sign in/out functionality
- **Protected Access**: Route-based protection
- **User Profile**: Clerk user button integration
- **Responsive Layout**: Works on all device sizes

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# With yarn
yarn dev
yarn build
yarn start
yarn lint
```

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- **Turbopack**: Enabled for faster development builds
- **App Router**: Using the new App Router architecture
- **TypeScript**: Full TypeScript support

### Tailwind Configuration
- **CSS Variables**: Dynamic theming support
- **Custom Colors**: Extended color palette
- **Responsive**: Mobile-first breakpoints
- **Dark Mode**: Built-in dark mode support

### shadcn/ui Configuration (`components.json`)
- **Style**: New York variant
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Icon Library**: Lucide React

## 🎨 Styling & Theming

### CSS Architecture
- **Tailwind CSS 4**: Latest version with new features
- **CSS Variables**: Dynamic theming
- **Custom Properties**: Extended design tokens
- **Component Variants**: CVA (Class Variance Authority)

### Theme Support
```css
/* Light mode (default) */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}

/* Dark mode */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  /* ... more variables */
}
```

## 📦 Key Dependencies

### Core Framework
- **next**: 15.3.2 - React framework
- **react**: 19.0.0 - UI library
- **typescript**: 5 - Type safety

### UI & Styling
- **@radix-ui/react-***: 40+ accessible UI primitives
- **tailwindcss**: 4 - Utility-first CSS
- **class-variance-authority**: Component variants
- **lucide-react**: Icon library

### Authentication
- **@clerk/nextjs**: 6.32.0 - Authentication provider

### Forms & Validation
- **react-hook-form**: Form management
- **@hookform/resolvers**: Form validation
- **zod**: Schema validation

### Development
- **eslint**: Code linting
- **@types/node**: Node.js types
- **@types/react**: React types

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository
2. **Environment Variables**: Add Clerk keys to Vercel
3. **Deploy**: Automatic deployments on push

### Other Platforms
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🧪 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules
- **Prettier**: Code formatting (if configured)

### Component Development
- **shadcn/ui**: Use existing components when possible
- **Accessibility**: Follow ARIA guidelines
- **Responsive**: Mobile-first design
- **Performance**: Optimize for Core Web Vitals

### File Organization
- **App Router**: Use the new Next.js 13+ structure
- **Components**: Co-locate related components
- **Types**: Define interfaces in component files
- **Utils**: Shared utilities in `lib/` directory

## 🔮 Future Enhancements

### Planned Features
- [ ] **Meeting Management**: Create and manage meetings
- [ ] **Calendar Integration**: Google/Outlook calendar sync
- [ ] **Video Conferencing**: WebRTC integration
- [ ] **File Sharing**: Document collaboration
- [ ] **Notifications**: Real-time updates
- [ ] **Team Management**: Multi-user collaboration

### Technical Improvements
- [ ] **API Integration**: Connect to backend services
- [ ] **State Management**: Redux Toolkit or Zustand
- [ ] **Testing**: Jest and React Testing Library
- [ ] **PWA**: Progressive Web App features
- [ ] **Analytics**: User behavior tracking

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

*License information to be added*

## 🆘 Support

- **Documentation**: Check Next.js and Clerk documentation
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Community**: Join the Next.js community

---

**SmartMeet** - Modern meeting management made simple with Next.js and Clerk authentication.