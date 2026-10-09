const db = require('../services/db');

class User {
    constructor({ id, display_name, email, created_at }) {
        this.id = id;
        this.display_name = display_name;
        this.email = email;
        this.created_at = created_at;
    }

    static async create({ display_name, email }) {
        const result = await db.query(
            'INSERT INTO users (display_name, email) VALUES ($1, $2) RETURNING id, display_name, email, created_at',
            [display_name, email]
        );

        return new User(result.rows[0]);
    }

    static async findById(id) {
        const result = await db.query(
            'SELECT id, display_name, email, created_at FROM users WHERE id = $1',
            [id]
        );

        return result.rows[0] ? new User(result.rows[0]) : null;
    }

    static async findByEmail(email) {
        const result = await db.query(
            'SELECT id, display_name, email, created_at FROM users WHERE email = $1',
            [email]
        );

        return result.rows[0] ? new User(result.rows[0]) : null;
    }
}

module.exports = User;
