const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello bro!")
    console.log("it works!")
})


app.listen(8000, ()=> {
    console.log(`Server listening on 8000`)
})