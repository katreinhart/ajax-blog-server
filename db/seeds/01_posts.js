
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'First Post!', content: `Forage mustache migas, poke raw denim four dollar toast tumblr health goth tote bag everyday carry kombucha keffiyeh activated charcoal viral. Af stumptown distillery cliche butcher affogato raclette pop-up coloring book selvage meditation lo-fi. Vape cray photo booth XOXO readymade banjo waistcoat forage cliche cardigan roof party kale chips 90s. Master cleanse vexillologist celiac vice retro single-origin coffee. Yuccie adaptogen butcher health goth activated charcoal VHS semiotics. Mustache meh succulents meggings selfies raw denim trust fund flexitarian blue bottle quinoa chicharrones kale chips.`},
        {id: 2, title: 'Second post!', content: 'Hello Knex!'},
        {id: 3, title: 'Third post...', content: 'This is dummy content'}
      ])
    }).then(()=> {
      knex.raw(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`)
    })
}
