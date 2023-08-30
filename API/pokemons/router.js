const express = require('express')
const router = express.Router()
const {
    createPokemon,
    getAllPokemon,
    getPokemonbyID,
    updatePokemon,
    deletePokemon
} = require('./controller');

router.post('/add-pokemon', createPokemon);

router.get('/all-pokemon', getAllPokemon);
router.get('/pokemon-id', getPokemonbyID);

router.put('/update-pokemon', updatePokemon);
router.delete('/delete-pokemon', deletePokemon);

module.exports = router;
