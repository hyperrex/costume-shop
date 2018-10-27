
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
          color: '#ffffff'
        },
        {
          id: 2,
          name: 'Adult',
          color: '#0000FF'
        },
        {
          id: 3,
          name: 'Sale',
          color: '#FFA500'
        },
        {
          id: 4,
          name: 'Clearance',
          color: '#FF0000'
        },
        {
          id: 5,
          name: 'Child',
          color: '#00FF00'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"tags_id_seq"', (SELECT MAX("id") FROM "tags"))`
      )
    );
};
