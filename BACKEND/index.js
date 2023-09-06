const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const PORT = 8080;
const urlEncoded = bodyParser.urlencoded({ extended: false });
const jsonEncoded = bodyParser.json();

// Require routes
const registerRouter = require('./routes/register.routes');

// Enable body parser
server.use(urlEncoded);
server.use(jsonEncoded);
// Enable cors
server.use(cors());

server.use('/register', registerRouter);

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server listening on ${PORT}`);
});