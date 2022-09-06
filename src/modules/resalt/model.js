const {fetch,fetchAll} = require('../../lib/postgres.js')
const {GETRESALET} = require('./query.js')


const POST = async () =>{
    try {
        let resalt = await fetchAll(GETRESALET)
        return resalt
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    POST
}