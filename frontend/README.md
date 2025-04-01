# Frontend Authentication Interface

Modern React application with TypeScript, featuring a clean authentication interface and robust form handling.

## Tech Stack

- React 18
- TypeScript
- Vite
- TanStack Query
- React Hook Form
- Zod Validation
- Tailwind CSS
- Lucide React

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file:
```env
VITE_API_URL=http://localhost:3000/api
```

3. Start development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/     # UI components
├── hooks/         # Custom React hooks
├── schemas/       # Validation schemas
├── types/         # TypeScript types
└── App.tsx        # Root component
```

## Features

- Clean, minimalist login interface
- Real-time form validation
- Loading states
- Error handling
- Type-safe API integration
- Responsive design

## Components

### LoginForm
- Email and password inputs
- Form validation
- Loading states
- Error messages
- JWT token handling

### UI Components
- Button
- Input
- Error display
- Loading spinner

## State Management

- TanStack Query for API state
- React Hook Form for form state
- TypeScript for type safety

## Styling

- Tailwind CSS for utility-first styling
- Custom components for consistent design
- Responsive layout
- Loading animations

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

1. Make component changes
2. Ensure types are correct
3. Test functionality
4. Update documentation if needed
5. Submit pull request

## Production Build

1. Build the application:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Type Safety

- TypeScript throughout
- Zod schema validation
- API response types
- Proper error handling

## Best Practices

- Component composition
- Custom hooks for logic
- Consistent error handling
- Loading states
- Accessibility
- Responsive design
