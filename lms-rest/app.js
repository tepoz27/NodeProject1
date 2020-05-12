const express = require('express');
const app = express();
const mongo = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;

//Midleware
app.use(bodyParser.json());

//Import routes
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

//Routes
app.get('/', (req, res) => {
    res.send('Home');
});

//Mongo
const connection = "mongodb://localhost:27017/lms";
mongo.connect(connection, 
    { useUnifiedTopology: true }, 
    () => console.log('Mongo DB conected')
);

//Listener
app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`)
});