# Full-Stack Prisma Project

Modern authentication system built with React and Node.js, featuring TypeScript and MySQL integration.

## Quick Start

### Frontend (React + TypeScript)
```bash
# Install and start
npm install
npm run dev
```

### Backend (Node.js + MySQL)
```bash
# Install dependencies
cd backend
npm install

# Setup database
npx prisma generate
npx prisma db push

# Start server
npm run dev
```

## Tech Stack

### Frontend
- React 18 + TypeScript
- TanStack Query
- React Hook Form + Zod
- Tailwind CSS

### Backend
- Node.js + Express
- Prisma + MySQL
- JWT Authentication
- TypeScript

## API Endpoints

### Authentication
- POST `/api/auth/register` - Create account
- POST `/api/auth/login` - User login

## Key Features

- Type-safe API integration
- Real-time form validation
- Secure password hashing
- JWT authentication
- Error handling
- Loading states
- MySQL database
- Responsive design

## Security

- Bcrypt password hashing
- JWT token auth
- Input validation
- CORS enabled
- Environment variables
