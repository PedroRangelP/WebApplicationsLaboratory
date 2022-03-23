/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
    .createTable('bicicletas', (table) => {
      table.increments('id');
      table.string('color').notNullable()
      table.string('modelo').notNullable()
      table.float('lat', 9, 6).notNullable()
      table.float('lon', 9, 6).notNullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('bicicletas')
}