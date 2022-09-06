const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const POST = async (req,res) =>{
    try {
        let token = jwt.verify(req.headers.token)
        console.log(req.headers.token)
        if(token){
            let resalt = await model.POST(req.body,token)
            if(resalt){
                res.status(200).json({
                    status:200,
                    message:'sucsses',
                    data:resalt
                })
            }else{
                res.status(400).json({
                    status:400,
                    message:'bed equest',
                    data:null
                })
            }
        }else{
            throw new Error('your are not token')
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    POST
}