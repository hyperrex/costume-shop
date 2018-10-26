exports.up = function(knex) {
  return knex.schema.createTable('costumes', function(table) {
    // ID
    table.increments();
    // Name
    table.text('name').notNullable();
    // Description
    table.text('description').notNullable();
    // Price
    table.integer('price').notNullable();
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('costumes');
};