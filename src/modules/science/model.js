const {fetchAll,fetch} = require('../../lib/postgres.js')
const {GETSELECT,POSTSELECT} = require('./query.js')


const GET = async () =>{
    try {
        let science = await fetchAll(GETSELECT)
        return science
    } catch (error) {
        console.log(error)
    }
}

const POST = async ({univerId,sciencename}) =>{
    try {
        let science = await fetch(POSTSELECT,univerId,sciencename)
        return science
    } catch (error) {
        console.log(error)
    }
}


const PUT = async ({univerId,sciencename},{scienceId}) =>{
    try {
        let science = await fetch(POSTSELECT,univerId,sciencename,scienceId)
        return science
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    GET,
    POST,
    PUT
}