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
        id: 1,
        name: 'celebartion'
    }
]

app.get("/users", (req, res) => {

    res.send(usersData)
})

app.post('/users', (req, res) => {
    const {body} = req
    const newUser = {
        id: usersData.length + 1,
        name: body.name
    }
    console.log(body)
    if(newUser){
      usersData.push(newUser);
      res.send(usersData);
    } else {
    res.status(400).send({message: 'Invalid request'})
}
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})