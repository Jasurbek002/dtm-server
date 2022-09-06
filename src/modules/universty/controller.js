const jwt = require('../../lib/jwt.js')
const model = require('./model.js')

const GET = async (req,res) =>{
try {
    let univer = await model.GET(req.body)
    if(univer){
        res.status(200).json({
            status:200,
            message:'sucsses',
            data:univer
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
        const admin = jwt.verify(req.body.token)
        if(admin === 'admin'){
            let univer = await model.POST(req.body)
            if(univer){
                res.status(200).json({
                    status:200,
                    message:'sucsses',
                    data:univer
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:'not found',
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
            const admin = jwt.verify(req.body.token)
            if(admin === 'admin'){
                let univer = await model.PUT(req.body)
                if(univer){
                    res.status(200).json({
                        status:200,
                        message:'sucsses',
                        data:univer
                    })
                }else{
                    res.status(404).json({
                        status:404,
                        message:'not found',
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

        const DELETE = async (req,res) =>{
            try {
                const admin = jwt.verify(req.body.token)
                if(admin === 'admin'){
                    let univer = await model.DELETE(req.body)
                    if(univer){
                        res.status(200).json({
                            status:200,
                            message:'sucsses',
                            data:univer
                        })
                    }else{
                        res.status(404).json({
                            status:404,
                            message:'not found',
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
module.exports = {
  GET, POST, PUT, DELETE
}