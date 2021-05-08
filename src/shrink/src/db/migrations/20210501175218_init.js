
exports.up = function(knex) {
    return knex.schema.createTable("free_urls", (table) => {
        // primary key
        table.increments();
        // short url -> Obtained from MD5 hash of longurl
        table.string("shorturl", 6).unique().notNullable();
        // long url -> Obtained from user
        table.string("longurl", 512);
        // Time at which the short url was created at -> defaults to now 
        table.timestamp('created_at').defaultTo(knex.fn.now())
    }).createTable("registered_urls", (table) => {
        // primary key
        table.increments();
        // userid
        table.integer('userid').unsigned().notNullable();
        // short url
        table.string("shorturl", 6).unique().notNullable();
        // long url
        table.string("longurl", 512).unique().notNullable();
        // number of times the shorturl was used
        table.integer('redirects').unsigned().notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("free_urls");
};
