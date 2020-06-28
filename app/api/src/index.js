const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://127.0.0.1:${port}`))