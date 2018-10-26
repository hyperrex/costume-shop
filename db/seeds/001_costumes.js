exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('costumes').insert([
        {
          id: 1,
          name: 'Reaper',
          description: 'The closest thing Overwatch has to an Edgelord.',
          price: 5500
        },
        {
          id: 2,
          name: 'Baby Shark',
          description:
            'Admit it. You heard that song in your head the moment you read the title.',
          price: 2500
        },
        {
          id: 3,
          name: 'Bullet Storm Jonesy',
          description: 'Ride the Fortnite hype train!',
          price: 6500
        },
        {
          id: 4,
          name: 'Rainbow Unicorn',
          description: 'Made for your Instagram.',
          price: 3500
        },
        {
          id: 5,
          name: 'Spider-Man',
          description: 'Do whatever a spider can!',
          price: 3500
        },
        {
          id: 6,
          name: 'Harley Quinn',
          description: "Daddy's 'Lil Monster.",
          price: 5000
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"costumes_id_seq"', (SELECT MAX("id") FROM "costumes"))`
      )
    );
};
