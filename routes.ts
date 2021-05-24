import {Router} from 'express'

import index from './controller/index'
const route = Router()

route.use('/:params',index)
route.use('/',(req,res)=>{
    return res.json('digite o nick ex: localhost:3000/Programo NodeJS')
})

export default route