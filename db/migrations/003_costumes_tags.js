exports.up = function(knex) {
  return knex.schema.createTable('costumes_tags', function(table) {
    // ID
    table.increments();
    // costume_id
    table.integer('costume_id').references('costumes.id').onDelete('cascade');
    // tag_id
    table.integer('tag_id').references('tags.id').onDelete('cascade');
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('costumes_tags');
};