const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/ajax_blog_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    }, 
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
