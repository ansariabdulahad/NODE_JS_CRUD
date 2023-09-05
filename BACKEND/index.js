const express = require('express');
const server = express();
const PORT = 8080;

server.listen('/', (req, res) => {
    res.status(200).json({
        message: "SUCCESS"
    });
});

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server listening on ${PORT}`);
});

