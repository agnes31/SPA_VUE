const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOption = {
 origin: 'http://localhost:8083'
}

app.use(cors(corsOption)) // permettre à l'application d'utiliser les données de n'importe quelle origine
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))


//test
// app.get('/', (req, res) => {
//  res.json({message: 'Welcome'})
// })
//route

const db = require('./app/models')
db.connex.sync() // sync() method creates the table if it doesn't exist in database


require('./app/routes/product.route')(app)
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`)
})