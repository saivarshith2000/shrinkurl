exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments();
        table.string("username", 30).notNullable();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
