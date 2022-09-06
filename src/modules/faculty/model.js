const {fetch,fetchAll} = require('../../lib/postgres.js')
const {GETSELECT} = require('./query.js')

const GET = async ({univerId}) =>{
    try {
        let faculty = await fetchAll(GETSELECT,univerId)
        return faculty
    } catch (error) {
        console.log(error)
    }
}


const POST = async ({univerId,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count}) =>{
    try {
        let faculty = await fetch(GETSELECT,univerId,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count)
        return faculty
    } catch (error) {
        console.log(error)
    }
}


const PUT = async ({univerId,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count}) =>{
    try {
        let faculty = await fetch(GETSELECT,univerId,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count)
        return faculty
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    GET, POST, PUT
}