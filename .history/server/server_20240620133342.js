import express from "express"

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use()
app.get("/", (req, res) => {
    res.send({msg: "hello word"})
})
app.ge
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})