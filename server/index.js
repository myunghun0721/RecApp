import express from "express";
import { profiles } from "./routes/profiles.js";



const app = express();

// test route
app.get('/test', (_, res)=> res.send('This works!'))

app.use('/api/profiles', profiles)

// set port
const port = 5000;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback)
