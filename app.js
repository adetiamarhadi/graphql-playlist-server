const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const URI = 'mongodb+srv://<user>:<password>@<host>/<dbName>?retryWrites=true&w=majority';
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server run on port 4000');
});