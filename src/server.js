const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors( ))
app.use(express.json())
app.use(cors())
const appRouter = require('./modules/index.js')
app.use(appRouter)



app.listen(process.env.PORT||5555,() =>console.log('server run'))