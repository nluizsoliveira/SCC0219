const express = require('express');
const path = require('path');
var cors = require('cors');


const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
const port = 8080
app.listen(port);

let perifericos = {
    data: [
        {
            id: 1,
            name: 'Fortrek Teclado Gamer BLACKFIRE NEW, PRETO',
            price: 53.69,
            image: 'https://m.media-amazon.com/images/I/71zU97W-bcL._AC_SX679_.jpg',
            available: 4
        },
        {
            id: 2,
            name: 'Fortrek PRO M7 RGB - Mouse Gamer, Preto',
            price: 33.92,
            image: 'https://m.media-amazon.com/images/I/616+-6pFrVL._AC_SX679_.jpg',
            available: 10
        },
        {
            id: 3,
            name: 'Teclado Mecânico Gamer Redragon Dark Avenger Lunar White IIuminação Rainbow Switch Marrom K568W-R',
            price: 155.00,
            image: 'https://m.media-amazon.com/images/I/61WAWOSLs+L._AC_SX679_.jpg',
            available: 5
        },
        {
            id: 4,
            name: 'HyperX SoloCast USB WHT Microphone, Modelo: 519T2AA',
            price: 289.00,
            image: 'https://m.media-amazon.com/images/I/61jGpHM55ML._AC_SX679_.jpg',
            available: 2
        },
        {
            id: 5,
            name: 'MOUSE HP M100S BLACK - 1000 / 3200 DPI',
            price: 81.63,
            image: 'https://m.media-amazon.com/images/I/61BGJUXgpNL._AC_SX679_.jpg',
            available: 1
        }
    ]
}

app.get('/perifericos', function(req, res) {
    console.log('GET: perifericos')
    res.json(perifericos)
});

console.log(`Running at localhost:${port}`)