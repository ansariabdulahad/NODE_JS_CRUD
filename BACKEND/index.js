const express = require('express');
const server = express();
const PORT = 8080;

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server listening on ${PORT}`);
});

