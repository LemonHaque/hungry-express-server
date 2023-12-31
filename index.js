const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json');
const chefData = require('./data/chefData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Restaurent is running")
})


app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = recipes.find(r => r.id == id)
    res.send(selectedRecipe)
    console.log(id);
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`restaurent is running on port:${port} `);
})

