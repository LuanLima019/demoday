const express = require('express');
const fotos = require('./data/fotos.json');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.get('', (req, res) => {
    res.render('index');
});

app.get('/cultural', (req, res) => {
    res.render('cultural ', {'fotos': fotos});
});

app.get('/faleconosco', (req, res) => {
    res.render('faleconosco');
});

app.listen(3000, () =>{
    console.log('Começou')
})