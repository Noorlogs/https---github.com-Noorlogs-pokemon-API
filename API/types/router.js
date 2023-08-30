const express = require('express')
const router = express.Router()
const {
    newpokemonType,
    allpokemonTypes,
    pokemonTypebyID,
    updatepokemonType,
    deletepokemonType
} = require('./controller');

router.post('/add-pokemon-type', newpokemonType);
router.get('/all-pokemon-type', allpokemonTypes);
router.get('/pokemon-type-by-id', pokemonTypebyID);
router.put('/update-pokemon-type', updatepokemonType);
router.delete('/delete-pokemon-type', deletepokemonType);

module.exports = router;