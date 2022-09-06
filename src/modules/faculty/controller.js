const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const GET = async (req,res) =>{
    try {
        let faculty = await model.GET(req.body)
        if(faculty){
            res.status(200).json({
                status:200,
                message:'sucssess',
                data:faculty
            })
        }else{
            res.status(404).json({
                status:404,
                message:'not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const POST = async (req,res) =>{
    try {

        const admin = jwt.verify(req.headers.token)

        if(admin === 'admin'){

            let faculty = await model.POST(req.body)
            if(faculty){
                res.status(200).json({
                    status:200,
                    message:'updated',
                    data:faculty
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:'not found',
                    data:null
                })
            }
        }else{
              throw new Error('youre not admin')
        }
       
    } catch (error) {
        console.log(error)
    }
}

const PUT = async (req,res) =>{
    try {

        const admin = jwt.verify(req.headers.token)

        if(admin === 'admin'){

            let faculty = await model.PUT(req.body)
            if(faculty){
                res.status(200).json({
                    status:200,
                    message:'upadted',
                    data:faculty
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:'not found',
                    data:null
                })
            }
        }else{
              throw new Error('youre not admin')
        }
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    GET, POST, PUT
}