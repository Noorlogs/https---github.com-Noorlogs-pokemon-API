const express = require('express')
const router = express.Router()
const {
    NewUser,
    loginUser,
    getUserID,
    // getUserEmail,
    getAllUsers,
    updateProfile,
    deleteProfile
} = require('./controller');

router.post('/signup', NewUser);
router.post('/login', loginUser); //YE BANANI HAI ABHI

router.get('/get-user-id', getUserID);
// router.get('/get-user-email', getUserEmail); //YE NH CHAL RAHI SAHI
router.get('/get-all-users', getAllUsers);

router.put('/update-user', updateProfile);
router.delete('/delete-user', deleteProfile);

module.exports = router;
