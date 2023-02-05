const express = require('express');
const PORT = 8000;
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./src/modules/routes/routes');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

async function start(){
    try {
        await app.listen(PORT, () => {console.log(`Start server on port ${PORT}`)});
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Database connected')).catch((e)=>console.log(e))
    } catch (e) {
        console.log(e)
    }
}

app.use("/", apiRoutes);
start();