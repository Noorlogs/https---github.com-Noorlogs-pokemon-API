const { connect } = require('mongoose');
const pokemonCharactersSchema = require('./schema');
require('dotenv').config()

const newcharacter = async (req, res) => {

    const { charactername, characterimage, characterDescription } = req.body;

    if (!charactername || !characterimage || !characterDescription) {
        res.status(403).json({
            message: "missing required field"
        })
    }
    else {
        try {

            // Save the user to the database
            await connect(process.env.MONGO_URL)

            const checkExistingfile = await pokemonCharactersSchema.exists({ charactername })

            if (checkExistingfile) {
                res.status(400).json({
                    message: "Duplicate Name Field"
                })
            }

            else {
                await pokemonCharactersSchema.create({ charactername, characterimage, characterDescription })
                // GETTING ALL characters
                const allcharacters = await pokemonCharactersSchema.find()

                res.json({
                    message: "New character Has Been Created To DB",
                    showAll: allcharacters
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

const allcharacter = async (req, res) => {
    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL characters 
        const allcharacters = await pokemonCharactersSchema.find()

        res.json({
            showAll: allcharacters
        });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }

};

const characterbyID = async (req, res) => {
    const { _id } = req.query;

    try {
        // Connect to the database
        await connect(process.env.MONGO_URL);

        // Find a document by its _id
        const character = await pokemonCharactersSchema.findById(_id);

        if (!character) {
            return res.json({ message: 'Character not found' });
        }

        res.json({ character });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updatecharacter = async (req, res) => {
    const { _id, charactername, characterimage, characterDescription } = req.body;
    const filter = { _id }
    const update = { charactername, characterimage, characterDescription }

    try {
        // Save the user to the database
        await connect(process.env.MONGO_URL)

        const characterid = await pokemonCharactersSchema.findOneAndUpdate
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

const deletecharacter = async (req, res) => {
    const { _id } = req.body

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL characters 
        const characterid = await pokemonCharactersSchema.findOneAndDelete({ _id })

        res.json({
            message: "Field Deleted Successfully!",
            characterid
        });
    }

    catch (error) {
        res.json({
            message: error.message
        });
    }
};
 
module.exports = {
    newcharacter,
    allcharacter,
    characterbyID,
    updatecharacter,
    deletecharacter
}