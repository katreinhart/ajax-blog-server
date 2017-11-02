const fs = require('fs')
const path = require('path')
const uuid = require('uuid/v4')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/connection')

function _read () {
  return JSON.parse(fs.readFileSync(db, 'utf-8'))
}

function _write (obj) {
  fs.writeFileSync(db, JSON.stringify(obj))
}

function _byId (id) {
  return (el) => el.id === id
}

function get () {
  return knex('posts')
}

function create (body) {
  const id = uuid()
  const posts = _read()
  const post = { id, ...body }

  posts.push(post)
  _write(posts)

  return post
}

function find (id) {
  return knex('posts').where('id', id)
}

function destroy (id) {
  const content = _read()
  const post = content.find(_byId(id))
  const index = content.indexOf(post)

  content.splice(index, 1)
  _write(content)

  return post
}

function patch (id, patch) {
  const post = destroy(id)
  const content = _read()
  const newPost = Object.assign(post, patch)

  content.push(newPost)
  _write(content)

  return newPost
}

module.exports = {
  get, create, find, destroy, patch
}
