const {fetch} = require('../../lib/postgres.js')
const jwt = require('../../lib/jwt.js')
const {GETLOGIN,GETREGISTER} = require('./query.js')

const LOGIN = async ({adminname,password}) =>{
    try {
        let admin = await fetch(GETLOGIN,adminname,password)
        return admin
    } catch (error) {
        console.log(error)
    }
}



const REGISTER = async ({adminname,password,status},{token}) =>{
    try {
        let adminstatus = jwt.verify(token)
        if(adminstatus === 'supperadmin'){
            let admin = await fetch(GETREGISTER,adminname,password,status)
            return admin
        }else{
            return 'not satatus'
        }
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    LOGIN,REGISTER
}



