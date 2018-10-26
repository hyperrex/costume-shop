
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('costumes').insert([
        {
          id: 1,
          name: 'shirt',
          description: 'Cool Shirt',
          price: 1500
        },
        {
          id: 2,
          name: 'pants',
          description: 'Cool Pants',
          price: 2500
        },
        {
          id: 3,
          name: 'hat',
          description: 'Cool Hat',
          price: 1000
        },
        {
          id: 4,
          name: 'sweater',
          description: 'Warm Sweater',
          price: 3500
        },
        {
          id: 5,
          name: 'socks',
          description: 'Cool Socks',
          price: 500,
        },
        {
          id: 6,
          name: 'watch',
          description: 'Cool Watch',
          price: 5000
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"costumes_id_seq"', (SELECT MAX("id") FROM "costumes"))`
      )
    )
}