const express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config/dev'),
    Rental = require('./models/rental'),
    FakeDb = require('./fake-db'),
    app = express(),
    bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rentals'),
    userRoutes = require('./routes/users'),
    bookingRoutes = require('./routes/bookings');


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
        //fakeDb.seedDb();
        console.log("Connection succed!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });


/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("Server is Running");
});