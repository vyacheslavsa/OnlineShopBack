const express = require('express');
const PORT = 8000;
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./src/modules/routes/routes')

const DB_URL = "mongodb+srv://Vyacheslav8465398453:ZwKcbAQBihzXnHaF@alldara.5ep4omg.mongodb.net/?retryWrites=true&w=majority";

async function start(){
    try {
        await app.listen(PORT, () => {console.log(`Start server on port ${PORT}`)});
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Database connected'));
    } catch (e) {
        console.log(e)
    }
}

start();

app.use("/",apiRoutes);