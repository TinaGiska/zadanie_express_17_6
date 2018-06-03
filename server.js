var express = require('express');
var app = express();

app.use(express.static('views'));

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});


app.get('/dynamic', function(req, res){
    res.render('dynamic', {
        instruction: "Zaloguj się"
    });
});

app.get('/auth/google', function(req, res){
    res.render('google', {
      instruction: "Jesteś zalogowany!"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
