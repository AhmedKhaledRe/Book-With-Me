const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const FakeDb = require('./fake-db');
const path = require('path');

const rentalRoutes = require('./routes/rentals'),
    userRoutes = require('./routes/users'),
    bookingRoutes = require('./routes/bookings'),
    imageUploadRoutes = require('./routes/image-upload'),
    paymentRoutes = require('./routes/payments');



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
        // if (process.env.NODE_ENV !== 'production') {
        const fakeDb = new FakeDb();
        //fakeDb.seedDb();
        // }
        console.log("Connection succed!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

/*mongoose.connect(config.DB_URI).then(() => {
  // if (process.env.NODE_ENV !== 'production') {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  // }
});*/


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

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1', imageUploadRoutes);
app.use('/api/v1/payments', paymentRoutes);

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist');
    app.use(express.static(appPath));

    app.get('*', function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
}
/////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "server")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "server", "index.html"));
});
//////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("Server is Running");
});
