// id
// title
// content

exports.up = knex => {
  return knex.schema.createTable('posts', table => {
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.text('content').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('posts')
