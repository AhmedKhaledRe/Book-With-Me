const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const app = express();

const rentalRoutes = require('./routes/rentals');

/*mongoose
    .connect(config.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });*/

mongoose
    .connect(config.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
        console.log("Connection succed!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("Server is Running");
});