// Objeto express
const express = require('express');

// App de express
const app = express();
app.use(express.json())     // Indicamos el uso de JSON

// Puerto de la app
const port = 3000;

// Inicializacion de la app:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})