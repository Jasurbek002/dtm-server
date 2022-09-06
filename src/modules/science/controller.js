const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const GET = async (req,res) =>{
  
    try {
            let science = await model.GET()

            if(science){
                res.status(200).json({
                    status:200,
                    message:'sucsess',
                    data:science
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:'scinece not found',
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

            let science = await model.POST(req.body)

            if(science){

                res.status(201).json({
                    status:201,
                    message:'new science added',
                    data:science
                })

            }else{

                res.status(404).json({
                    status:404,
                    message:'scinece not found',
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

        const admin = jwt.verify(req.headers.token)

        if(admin === 'admin'){

            let science = await model.PUT(req.body)

            if(science){

                res.status(201).json({
                    status:201,
                    message:'new science updated',
                    data:science
                })

            }else{

                res.status(404).json({
                    status:404,
                    message:'scinece not found',
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
    GET,
    POST,
    PUT
}