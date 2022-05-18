// Objeto express
const express = require('express');

// App de express
const app = express();
app.use(express.json())     // Indicamos el uso de JSON

// Puerto de la app
const port = 3000;

// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`ÀPI Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Jose"}
    const explorer2 = {id: 2, name: "Javier"}
    const explorer3 = {id: 3, name: "Memo"}
    const explorer4 = {id: 4, name: "Jessamyn"}
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers)
});

// Inicializacion de la app:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})