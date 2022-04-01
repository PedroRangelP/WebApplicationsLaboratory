/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicicletas').del()
  await knex('bicicletas').insert([
    {color: 'Rojo', modelo: 'BMX', lat: 19.283358, lon: -99.137333},
    {color: 'Azul', modelo: 'Benotto', lat: 19.285857, lon: -99.135223}
  ])
}
