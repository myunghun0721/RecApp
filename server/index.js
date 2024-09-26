import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./config/keys.js";
import { profiles } from "./routes/profiles.js";



const app = express();
app.use(express.json())
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('MongoDB is successfully connected'))
.catch(err => console.log(err))

// test route
app.get('/test', (_, res)=> res.send('This works!'))

app.use('/api/profiles', profiles)

// set port
const port = 5000;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback)
