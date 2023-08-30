const express = require('express')
const router = express.Router()
const {
    newcharacter,
    allcharacter,
    characterbyID,
    updatecharacter,
    deletecharacter
} = require('./controller');

router.post('/add-character', newcharacter);
router.get('/all-character', allcharacter);
router.get('/character-by-id', characterbyID);
router.put('/update-character', updatecharacter);
router.delete('/delete-character', deletecharacter);

module.exports = router;