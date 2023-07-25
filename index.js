const express = require('express');
const db = require('./config/mongoose');
const port = 8000;

const app = express();

// setting view engine
app.set('view engine', 'ejs');
app.set(express.static('./static'));



app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Server is running on port:${port}.`);
})