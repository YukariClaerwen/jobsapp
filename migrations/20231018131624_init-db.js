/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('posts', (table) => {
            table.specificType('id', 'CHAR(16)').primary();
            table.text('content').notNullable();
            table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now()).index();
            table.timestamp('updatedAt').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('posts');
};
