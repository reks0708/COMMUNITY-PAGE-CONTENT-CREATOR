# README for MrBeast Espresso & Gold Fan Community

## Project Overview
The MrBeast Espresso & Gold Fan Community is an unofficial fan page dedicated to the popular YouTube creator MrBeast. This platform serves as a community hub for fans to explore content, engage in discussions, and stay updated on MrBeast's projects and achievements.

## Features
- **Home Page**: A visually impressive landing page that introduces MrBeast and his content.
- **Explore Page**: A content discovery section where users can search and filter videos and projects.
- **Community Page**: A discussion platform for fans to share comments and engage with each other.
- **Join Page**: A registration form for new users to join the community and subscribe to the newsletter.
- **About Page**: Information about the fan community and its purpose.

## Technology Stack
- **Frontend**: Built with React, Vite, and Vanilla CSS or Tailwind CSS.
- **Backend**: Node.js and Express with a PostgreSQL database managed through Supabase.
- **Deployment**: Frontend hosted on Vercel and backend on Render.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mrbeast-community
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories and fill in the required values.

4. Run the backend server:
   ```
   cd backend
   npm start
   ```

5. Run the frontend application:
   ```
   cd frontend
   npm run dev
   ```

## Publish the Website

The Render Blueprint in `render.yaml` deploys the Node backend and Vite frontend together and provisions a PostgreSQL database. The backend serves the built frontend and `/api` from one public origin. The initial database setup creates the newsletter table automatically.

1. Push this project to a GitHub repository.
2. In the Render Dashboard, choose **New** → **Blueprint** and connect that repository.
3. Review the `mrbeast-community` web service and database, then apply the Blueprint. Render will build both applications, initialize the newsletter table, and provide a public `onrender.com` URL.

The Blueprint generates `JWT_SECRET` and supplies `DATABASE_URL` from its managed PostgreSQL database. Newsletter subscriptions and health checks are wired to the database. Comment, authentication, and moderation APIs are not deployment-ready yet and are not mounted in the public API until their implementation and authorization are completed.

## Testing
To run tests for the backend, navigate to the `backend` directory and execute:
```
npm test
```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## Disclaimer
This website is an independent, unofficial fan page and is not affiliated with, endorsed by, or operated by MrBeast or his companies. All content is based on publicly available information.

## License
This project is licensed under the MIT License. See the LICENSE file for details.