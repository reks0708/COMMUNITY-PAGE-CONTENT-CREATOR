# Database Setup Documentation

This README file provides information about the database setup for the MRBEAST — ESPRESSO & GOLD FAN COMMUNITY project.

## Database Structure

The database is structured to support the following features:

- **Newsletter Subscriptions**: Stores user email addresses for newsletter sign-ups.
- **Comments**: Manages user comments on content.
- **Likes**: Tracks likes on comments.
- **Reports**: Handles reports for inappropriate comments.
- **Moderation**: Manages moderation actions on comments.

## Migrations

The database schema is defined through SQL migration files located in the `migrations` directory. Each migration file contains SQL commands to create or modify database tables:

1. **001_init.sql**: Initializes the database.
2. **002_newsletter.sql**: Creates the newsletter subscriptions table.
3. **003_comments.sql**: Creates the comments table.
4. **004_likes.sql**: Creates the likes table.
5. **005_reports.sql**: Creates the reports table.
6. **006_moderation.sql**: Creates the moderation table.

To apply these migrations, execute the SQL commands in the order listed above.

## Seeding the Database

The `seed.sql` file contains SQL commands to populate the database with initial data. This can be useful for testing and development purposes.

## Schema Definition

The `schema.sql` file provides a comprehensive definition of the database schema, including table structures, relationships, and constraints.

## Setup Instructions

1. **Database Creation**: Create a new PostgreSQL database for the project.
2. **Run Migrations**: Execute the migration files in the specified order to set up the database structure.
3. **Seed Database**: Optionally, run the `seed.sql` file to populate the database with initial data.
4. **Configuration**: Ensure that the backend is configured to connect to the database using the appropriate environment variables.

## Environment Variables

Make sure to set the following environment variables in your `.env` file for database connectivity:

- `DB_HOST`: The hostname of your PostgreSQL database.
- `DB_PORT`: The port number for your PostgreSQL database (default is 5432).
- `DB_USER`: The username for accessing the database.
- `DB_PASSWORD`: The password for the database user.
- `DB_NAME`: The name of the database you created for this project.

## Conclusion

This README serves as a guide for setting up the database for the MRBEAST — ESPRESSO & GOLD FAN COMMUNITY project. Follow the instructions carefully to ensure a successful setup.