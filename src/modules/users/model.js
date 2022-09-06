const {fetch} = require('../../lib/postgres.js')
const { GETLOGIN ,GETREGISTER} = require('./query.js')

const LOGIN = async ({username,password}) => {
try {
    let user = await fetch(GETLOGIN,username,password)
    return user
} catch (error) {
    console.log(error)
}
}


const REGISTER = async ({username,password,contact,gender}) => {
    try {
        let user = await fetch(GETREGISTER,username,password,contact,gender)
        return user
    } catch (error) {
        console.log(error)
    }
    }
module.exports ={
    LOGIN,
    REGISTER
}