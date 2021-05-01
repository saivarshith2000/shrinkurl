// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            host: "shrink-pg-srv",
            database: "shrinkdb",
            user: "testuser",
            password: "testpwd",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        ...knexSnakeCaseMappers(),
    },
};
