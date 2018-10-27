
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        {
          id: 1,
          name: 'New',
          color: 'white'
        },
        {
          id: 2,
          name: 'Adult',
          color: 'blue'
        },
        {
          id: 3,
          name: 'Sale',
          color: 'orange'
        },
        {
          id: 4,
          name: 'Clearance',
          color: 'red'
        },
        {
          id: 5,
          name: 'Child',
          color: 'green'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"tags_id_seq"', (SELECT MAX("id") FROM "tags"))`
      )
    );
};
