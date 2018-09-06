const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ok');
});

app.listen(3030, () => {
    console.log('Server is listening on http://localhost:3030');
});