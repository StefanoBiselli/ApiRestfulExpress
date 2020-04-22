const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OKAY'
    });
});

module.exports = app;