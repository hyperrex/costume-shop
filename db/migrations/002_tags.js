
exports.up = function(knex) {
  return knex.schema.createTable('tags', function(table) {
    // ID
    table.increments();
    // Name
    table.text('name').notNullable();
    // Color
    table.text('color').notNullable();
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};