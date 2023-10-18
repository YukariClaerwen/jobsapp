// // Update with your config settings.
require("dotenv").config({path: '.env.development'});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: 'pg',
  connection: 
    process.env.POSTGRES_URL + 
    (process.env.NODE_ENV === 'development' ? '' : '?sslmode=require'),
  migrations: {
    tableName: 'knex_migrations'
  }
}

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
// }
// const config = Knex.Config({
//   client: "pg",
//   connection: process.env.DATABASE_URL,
//   migrations: {
//     extension: "js",
//     tableName: 'knex_migrations'
//   }
// })

// export default config
