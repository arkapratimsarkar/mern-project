require('dotenv').config()

// sudo systemctl start mongod => Linux systemd command to start mongodb
// testing git
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//My Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

const app = express();

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch((err) => {
    console.log("DB NOT CONNECTED");
});

// Midddlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
});
