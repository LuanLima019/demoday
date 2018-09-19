const express = require('express');
const eventos = require('./data/eventos.json');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db'); 
const app = express();



app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
// app.use(bodyParser.urlencoded());
app.use(expressMongoDb('mongodb://localhost/Cultural'));

app.get('', (req, res) => {
    res.render('index', {'eventos': eventos});
});

app.post('', (req, res) => {
    req.db.collection('mensagens').insert(req.body, (erro) =>{
        console.log(erro);
        res.render('Obrigado');
    });
});

app.get('/quemsomos', (req, res) => {
    res.render('quemsomos');
});

app.get('/faleconosco', (req, res) => {
    res.render('faleconosco');
});

app.listen(3000, () =>{
    console.log('Começou')
})