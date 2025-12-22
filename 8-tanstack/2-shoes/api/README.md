# Shoes E-commerce Backend

A RESTful API backend for a shoes e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Protected routes for authenticated users
- Admin-only routes for managing shoes
- CRUD operations for shoes
- Search functionality with filters
- Refresh token mechanism
- Secure cookie handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/shoes_db
   JWT_SECRET=your_jwt_secret_key
   JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
   JWT_EXPIRE=1h
   JWT_REFRESH_EXPIRE=7d
   ```
4. Seed the database with initial shoe data:
   ```bash
   npm run seed
   ```

## Running the Server

Development mode with nodemon:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout user

### Shoes (Protected Routes)
- `GET /api/shoes` - Get all shoes
- `GET /api/shoes/:id` - Get single shoe
- `POST /api/shoes` - Create new shoe (Admin only)
- `PUT /api/shoes/:id` - Update shoe (Admin only)
- `DELETE /api/shoes/:id` - Delete shoe (Admin only)
- `POST /api/shoes/search` - Search shoes with filters

## Authentication

The API uses JWT for authentication. Include the access token in the Authorization header:
```
Authorization: Bearer <access_token>
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:
```json
{
  "message": "Error message here"
}
```

## Security Features

- Password hashing with bcrypt
- HTTP-only cookies for refresh tokens
- Protected routes with JWT verification
- Admin-only routes
- Input validation
- CORS configuration
- Secure cookie options 