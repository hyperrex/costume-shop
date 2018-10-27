
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes_tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('costumes_tags').insert([
        {
          id: 1,
          costume_id: 1,
          tag_id: 2
        },
        {
          id: 2,
          costume_id: 2,
          tag_id: 2
        },
        {
          id: 3,
          costume_id: 2,
          tag_id: 3
        },
        {
          id: 4,
          costume_id: 4,
          tag_id: 1
        },
        {
          id: 5,
          costume_id: 6,
          tag_id: 3
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"costumes_tags_id_seq"', (SELECT MAX("id") FROM "costumes_tags"))`
      )
    );
};
