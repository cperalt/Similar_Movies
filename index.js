const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Set static folder
app.use(express.static('public'))

// Routes
app.use('/api', require('./routes'))

// Enable cors
app.use(cors())

app.listen(PORT, (arguments) => console.log(`Server running on port ${PORT}`))
