// Objeto express
const express = require('express');

// App de express
const app = express();
app.use(express.json())     // Indicamos el uso de JSON

// Puerto de la app
const port = 3000;

// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Jose"}
    const explorer2 = {id: 2, name: "Javier"}
    const explorer3 = {id: 3, name: "Memo"}
    const explorer4 = {id: 4, name: "Jessamyn"}
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers)
});

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Jose"}
    res.status(200).json(explorer)
});

app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST Request ${new Date()}`)
    const requestBody = req.body        // Parametros de un cliente
    res.status(201).json({message: "Created"});
});

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body        // Parametros de un cliente
    res.status(200).json({message: "Updated!"})
});

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`DELETE explorer with id ${req.params.id}`)
    const requestBody = req.body        // Parametros de un cliente
    res.status(200).json({message: "Deleted"})
});

// Inicializacion de la app:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});