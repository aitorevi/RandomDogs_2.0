import express from "express";

const app = express();


app.get('/', async (req, res) => {  // Es necesario hacer asincrona la función para que espere a resolver el fetch antes de devolver la Url

    const url = 'https://dog.ceo/api/breeds/image/random'
    const dogUrl = await fetch(url)
        .then(res => res.json()) // Convierte a JSON las respuesta que devuelve la API en texto plano
        .then(json => json.message)  // Extrae del JSON la Url
     // res.send("https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_381.jpg"
    res.send(JSON.stringify({url: dogUrl}) // parsea a String el objeto JSON
    );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));

