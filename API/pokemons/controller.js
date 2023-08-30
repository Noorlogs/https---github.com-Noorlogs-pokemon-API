const { connect } = require('mongoose');
const newPokemonSchema = require('./schema');
require('dotenv').config()

const createPokemon = async (req, res) => {

    const { pokemonname, image, typeofpokemon, trainer, abilities, weaknesses, strength,
        attack, defence, speed } = req.body;

    try {
        // Save the pokemon to the database
        await connect(process.env.MONGO_URL)

        await newPokemonSchema.create({
            pokemonname, image, typeofpokemon, trainer, abilities, weaknesses, strength,
            attack, defence, speed
        })
        // GETTING ALL POKEMONS 
        const allPokemons = await newPokemonSchema.find()

        res.json({
            message: "New Pokemon Has Been Created To DB",
            showAll: allPokemons
        });
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        });

    }
};

const getAllPokemon = async (req, res) => {

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL POKEMONS 
        const allPokemons = await newPokemonSchema.find()

        res.json({
            showAll: allPokemons
        });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }

}

const getPokemonbyID = async (req, res) => {
    const { _id } = req.query

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL CATEGORIES 
        const pokemonid = await newPokemonSchema.findOne({ _id })

        res.json({ pokemonid });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }
};

const updatePokemon = async (req, res) => {

    const { _id, pokemonname, image, typeofpokemon, trainer, abilities, weaknesses, strength,
        attack, defence, speed } = req.body;
    const filter = { _id }
    const update = {
        pokemonname, image, typeofpokemon, trainer, abilities, weaknesses, strength,
        attack, defence, speed
    }

    try {
        // Save the user to the database
        await connect(process.env.MONGO_URL)

        const categoryid = await newPokemonSchema.findOneAndUpdate

            (filter, update, { new: true })

        res.json({
            message: "Updated Successfully!",
            categoryid
        })

    }
    catch (error) {
        res.json({
            message: error.message
        });
    }

};

const deletePokemon = async (req, res) => {

    const { _id } = req.body

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // DELETING POKEMON 
        const userid = await newPokemonSchema.findOneAndDelete({ _id })
        res.json({
            message: "Field Deleted Successfully!",
            userid
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports = {
    createPokemon,
    getAllPokemon,
    getPokemonbyID,
    updatePokemon,
    deletePokemon
}