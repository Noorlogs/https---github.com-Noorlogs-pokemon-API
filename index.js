const express = require('express');
const app = express();
require('dotenv').config()
// const cors = require('cors');

const port = process.env.PORT || 1234;

// Use routers for handling routes
app.use(express.json()); // Parse JSON request body


app.use('/api', require('./api/user/Router')); 
app.use('/api', require('./api/characters/router')); 
app.use('/api', require('./api/types/router'));
app.use('/api', require('./API/pokemons/router'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
