import express from "express";

const app = express();

// test route
app.get('/test', (_, res)=> res.send('This works!'))

// set port
const port = 5000;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback)
