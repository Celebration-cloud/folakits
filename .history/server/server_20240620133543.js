import express from "express"

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use(e)
app.get("/", (req, res) => {
    res.send({msg: "hello word"})
})
ap
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})