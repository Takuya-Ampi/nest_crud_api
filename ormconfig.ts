module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 13306,
  username: 'root',
  password: 'root',
  database: 'root',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/db/migrations/*.ts'],
  synchronize: false,
  cli: {
      migrationsDir: 'src/db/migrations'
  }
}
