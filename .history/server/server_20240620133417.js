import express from "express"

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use()
app.get("/", (req, res) => {
    res.send({msg: "hello word"})
})
const express = require('express');
const app = express();

app.get('path', (req, res) => {
return 	body
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port`);
});

//npm start, open your browser and run localhost:port
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})