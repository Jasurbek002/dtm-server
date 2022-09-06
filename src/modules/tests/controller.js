const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const GET = async (req,res) =>{
    try {
        let tests = await model.GET(req.body)
     
        if(tests){
            res.status(200).json({
                status:200,
                message:"sucssess",
                data:tests
            })
        }else{
            res.status(404).json({
                status:404,
                message:"test not found",
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const POST = async (req,res) =>{
    try {
        let supperAdmin = jwt.verify(req.headers.token)

        if(supperAdmin === 'admin'){

            let tests = await model.POST(req.body)
            if(tests){
                res.status(201).json({
                    status:201,
                    message:"sucssess",
                    data:tests
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"test not found",
                    data:null
                })
            }

        }else{
            throw new Error('your not admin')
        }
        
    } catch (error) {
        console.log(error)
    }
}



const PUT = async (req,res) =>{
    try {
        let supperAdmin = jwt.verify(req.headers.token)

        if(supperAdmin === 'admin'){

            let tests = await model.PUT(req.body,req.params)
            if(tests){
                res.status(201).json({
                    status:201,
                    message:"sucssess",
                    data:tests
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"test not found",
                    data:null
                })
            }

        }else{
            throw new Error('your not admin')
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports ={
    GET,POST, PUT
}