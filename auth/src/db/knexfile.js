// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "authdb",
            user: "sai",
            password: "authdbpwd",
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
