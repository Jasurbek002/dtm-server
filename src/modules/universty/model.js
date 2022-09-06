const {fetchAll,fetch} = require('../../lib/postgres.js')
const {GETSELECT,POSTSELECT,PUTSELECT} = require('./query.js')

const GET = async ({blok1,blok2}) =>{
    try {
        let univer  = await fetchAll(GETSELECT,blok1,blok2)
        return univer
    } catch (error) {
        console.log(error)
    }
}

const POST = async ({univername,region}) =>{
    try {
        let univer  = await fetch(POSTSELECT,univername,region)
        return univer
    } catch (error) {
        console.log(error)
    }
}

const PUT = async ({univername,region,univerId}) =>{
    try {
        let univer  = await fetch(PUTSELECT,univername,region,univerId)
        return univer
    } catch (error) {
        console.log(error)
    }
}



module.exports ={
    GET,
    POST,
    PUT
}