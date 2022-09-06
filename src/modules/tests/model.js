const {fetch,fetchAll} = require('../../lib/postgres.js')
const {GETSELECT,POSTSELECT,PUTSELECT} = require('./query.js')


const GET = async ({scienceId}) =>{
    try {
        let tests = await fetchAll(GETSELECT,scienceId)
        return tests
    } catch (error) {
        console.log(error)
    }
}

const POST = async ({title,scienceId}) =>{
    try {
        let tests = await fetch(POSTSELECT,title,scienceId)
        return tests
    } catch (error) {
        console.log(error)
    }
}


const PUT = async ({title,scienceId},{testId}) =>{
    try {
        let tests = await fetch(PUTSELECT,title,scienceId,testId)
        return tests
    } catch (error) {
        console.log(error)
    }
}


const DELETE = async ({title,scienceId}) =>{
    try {
        let tests = await fetch(DELETESELECT,title,scienceId)
        return tests
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    GET , POST, PUT, DELETE
}