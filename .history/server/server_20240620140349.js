import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const usersData = [
    {
        
    }
]

app.get("/", (req, res) => {

    res.send({msg: "hello word"})
})

app.post('/user', (req, res) => {
    const {body, params: {id}} = req
    console.log(body)
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})