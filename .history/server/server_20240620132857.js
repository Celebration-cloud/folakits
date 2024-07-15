import express from "express"
import 
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.get("/", (req, res) => {
    res.send({msg: "hello word"})
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})