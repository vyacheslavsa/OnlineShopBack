const express = require('express');
const PORT = 8000;
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./src/modules/routes/routes');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use("/", apiRoutes);

// errorMiddleware

async function start() {
    try {
        await app.listen(PORT, () => {
            console.log(`Start server on port ${PORT}`)
        });
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('Database connected')).catch((e) => console.log(e))
    } catch (e) {
        console.log(e)
    }
}

start();