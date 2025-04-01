# Backend Authentication Service

Node.js backend service with TypeScript, Express, and Prisma, providing authentication endpoints and user management.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication
- Zod Validation

## Prerequisites

- Node.js 18+
- MySQL 8+
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file:
```env
DATABASE_URL="mysql://root:@localhost:3306/auth_db"
JWT_SECRET="secret"
PORT=3000
```

3. Initialize database:
```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push
```

4. Start development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── controllers/    # Request handlers
├── middleware/     # Express middleware
├── routes/         # API routes
├── schemas/        # Validation schemas
├── lib/           # Shared utilities
└── index.ts       # Application entry
```

## API Endpoints

### Authentication

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "jwt-token",
  "user": {
    "email": "user@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "jwt-token",
  "user": {
    "email": "user@example.com"
  }
}
```

## Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  createdAt DateTime @default(now()) @map("created_at")

  @@map("users")
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Prisma Studio

## Error Handling

The API uses consistent error responses:

```json
{
  "message": "Error message",
  "errors": [] // Optional validation errors
}
```

## Security

- Password hashing with bcrypt
- JWT token authentication
- Input validation with Zod
- Type-safe database queries
- Environment variables for secrets

## Development

1. Make code changes
2. Run tests if available
3. Ensure types are correct
4. Update documentation if needed
5. Submit pull request

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Start the server:
```bash
npm start
```
