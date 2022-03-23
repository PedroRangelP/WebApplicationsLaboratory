const knex = require('../database/connection')

exports.allBicicletas = () => {
  return knex
    .select('*')
    .from('bicicletas')
}

exports.add = (color, modelo, lat, lon) => {
  return knex('bicicletas')
    .insert({
      color: color, 
      modelo: modelo, 
      lat: lat, 
      lon: lon
    })
}

exports.removeById = (id) => {
  return knex('bicicletas')
    .where('id', id)
    .del()
}

exports.updateById = (id, color, modelo, lat, lon) => {
  return knex('bicicletas')
    .where('id', id)
    .update({
      color: color, 
      modelo: modelo, 
      lat: lat, 
      lon: lon
    })
}

exports.findById = (id) => {
  return knex
  .select('*')
  .from('bicicletas')
  .where('id', id)
}