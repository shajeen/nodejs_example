const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send("hello world, Server !")
})

app.listen(port, () => {
    console.log('app listening at http://localhost:'+ port)
})