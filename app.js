const express = require("express");
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    let articles = [
    {
        id: 1,
        text: "Inter hat gegen Sassuelo gewonnen",
        titel: "Inter gegen Sassuelo"
    },
    {
        id: 2,
        text: "Milan hat gegen Atalanta gewonnen",
        titel: "Milan vs Atalanta"
    },
    {
        id: 3,
        text: "Juventus hat gegen Torino gewonnen",
        titel: "Juventus gegen Torino"
    }
    ]
    res.render('show',{
        titel: "Show all Articles",
        articles: articles
    })
});

app.get('/add_article', function(req, res){
    res.render('add_article', {
        titel: "Add Article"
    })
});

app.get('/history', function(req, res){
    res.render('history', {
        titel: 'Inter History'
    });
});

app.listen(5000, function(req, res){
    console.log("Server started on port 5000....");
})