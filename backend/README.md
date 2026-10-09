# README for Backend

# MRBEAST - ESPRESSO & GOLD FAN COMMUNITY - Backend

This is the backend for the MRBEAST Espresso & Gold Fan Community project. It serves as the API layer for the frontend application, providing endpoints for managing newsletter subscriptions, comments, and community moderation.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Supabase (or another compatible managed PostgreSQL service)
- Environment Variables for configuration

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mrbeast-community/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

4. Run database migrations:
   ```
   # Ensure your PostgreSQL database is running and accessible
   npm run migrate
   ```

5. Start the server:
   ```
   npm start
   ```

The server will be running on `http://localhost:5000` by default.

## API Endpoints

- **Health Check**
  - `GET /api/health`: Check the health of the API.

- **Newsletter**
  - `POST /api/newsletter`: Subscribe to the newsletter.

- **Comments**
  - `GET /api/comments`: Retrieve comments.
  - `POST /api/comments`: Submit a new comment.
  - `POST /api/comments/:id/replies`: Reply to a comment.
  - `POST /api/comments/:id/likes`: Like a comment.
  - `POST /api/comments/:id/reports`: Report a comment.

- **Moderation**
  - Admin endpoints for moderating comments (approval, rejection, hiding).

## Testing

To run tests, use the following command:
```
npm test
```

Ensure that your test database is set up and configured in your environment variables.

## Deployment

For deployment, the backend can be hosted on Render or any compatible Node.js hosting provider. Ensure to configure the production environment variables and database connection settings.

---

This README provides an overview of the backend setup and usage for the MRBEAST Espresso & Gold Fan Community project. For more detailed information, refer to the individual files and documentation within the project.