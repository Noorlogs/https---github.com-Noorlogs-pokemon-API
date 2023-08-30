const { Schema, model } = require('mongoose')

const PokemonSchema = new Schema({
    pokemonname: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    typeofpokemon: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    abilities: {
        type: String,
        required: true
    },
    weaknesses: {
        type: String,
        required: true
    },
    strength: {
        type: String,
        required: true
    },
    attack: {
        type: String,
        required: true
    },
    defence: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    }


})
const newPokemonSchema = model('Pokemon', PokemonSchema);

module.exports = newPokemonSchema;