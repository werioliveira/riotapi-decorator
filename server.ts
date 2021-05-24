require('dotenv/config');
import express from 'express'
const PORT = process.env.PORT || 3000
import routes from './routes'

const server = express()
server.use(routes)
server.listen(PORT ,()=>{console.log('Running on port: ',PORT)})