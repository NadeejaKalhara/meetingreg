var express = require('express');
const TeleBot = require('telebot');
var bodyParser = require('body-parser');


const bot = new TeleBot({
    token: "5403190293:AAEHtiIEaSVESqcIrRmN202eOm5niqZ5_hA", // Required. Telegram Bot API token.
    polling: { // Optional. Use polling.
        interval: 1000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
    }});
    bot.start();
    bot.sendMessage(-1001615440082,"Hii")
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/register', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
    
    bot.sendMessage(-1001615440082,"Hello")
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);