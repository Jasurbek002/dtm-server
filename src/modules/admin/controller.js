const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const LOGIN = async (req,res) =>{
    try {
         let admin = await model.LOGIN(req.body)
         if(admin){
            res.status(200).json({
                status:200,
                message:'your are loginging',
                token:jwt.sign(admin.status)
            })
         }else{
            res.status(403).json({
                status:403,
                message:'Folbiddin acssess',
                token:null
            })
         }
    } catch (error) {
        console.log(error)
    }
}


const REGISTER = async (req,res) =>{
    try {
         let admin = await model.REGISTER(req.body,req.headers)
         if(admin){
            res.status(200).json({
                status:200,
                message:'your are registred',
                token:jwt.sign(admin.status)
            })
         }else{
            res.status(403).json({
                status:403,
                message:'Folbiddin acssess',
                token:null
            })
         }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    LOGIN,
    REGISTER
}