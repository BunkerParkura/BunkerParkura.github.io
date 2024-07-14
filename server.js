const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/quotes', (req, res) => {
    fs.readFile(path.join(__dirname, 'quotes.txt'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading quotes file');
            return;
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
