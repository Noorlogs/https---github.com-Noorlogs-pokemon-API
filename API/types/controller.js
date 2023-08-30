const { connect } = require('mongoose');
const pokemonTypeschema = require('./schema');
require('dotenv').config()

const newpokemonType = async (req, res) => {

    const { pokemonTypename, pokemonTypeimage, pokemonTypeDes } = req.body;

    if (!pokemonTypename || !pokemonTypeimage) {
        res.status(403).json({
            message: "missing required field"
        })
    }
    else {
        try {

            // Save the user to the database
            await connect(process.env.MONGO_URL)

            const checkExistingfile = await pokemonTypeschema.exists({ pokemonTypename })

            if (checkExistingfile) {
                res.status(400).json({
                    message: "Duplicate Name Field"
                })
            }

            else {
                await pokemonTypeschema.create({ pokemonTypename, pokemonTypeimage, pokemonTypeDes })
                // GETTING ALL pokemonTypes
                const allpokemonTypes = await pokemonTypeschema.find()

                res.json({
                    message: "New pokemonType Has Been Created To DB",
                    showAll: allpokemonTypes
                });
            }

        }


        catch (error) {
            res.json({
                message: error.message
            });
        }
    }
};

const allpokemonTypes = async (req, res) => {
    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL pokemonTypes 
        const allpokemonTypes = await pokemonTypeschema.find()

        res.json({
            showAll: allpokemonTypes
        });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }

};

const pokemonTypebyID = async (req, res) => {
    const { _id } = req.query

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL pokemonTypes 
        const pokemonTypeid = await pokemonTypeschema.findOne({ _id })

        res.json({ pokemonTypeid });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }
};

const updatepokemonType = async (req, res) => {
    const { _id, pokemonTypename, pokemonTypeimage, pokemonTypeDes } = req.body;
    const filter = { _id }
    const update = { pokemonTypename, pokemonTypeimage, pokemonTypeDes }

    try {
        // Save the user to the database
        await connect(process.env.MONGO_URL)

        const pokemonTypeid = await pokemonTypeschema.findOneAndUpdate
            (filter, update, { new: true })

        res.json({
            message: "Updated Successfully!"
        })

    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

const deletepokemonType = async (req, res) => {
    const { _id } = req.body

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL pokemonTypes 
        const pokemonTypeid = await pokemonTypeschema.findOneAndDelete({ _id })

        res.json({
            message: "Field Deleted Successfully!",
            pokemonTypeid
        });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }
};


module.exports = {
    newpokemonType,
    allpokemonTypes,
    pokemonTypebyID,
    updatepokemonType,
    deletepokemonType
}