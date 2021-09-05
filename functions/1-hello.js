
exports.handler = async(event,context,cb) =>{
    console.log(cb)
    return {
        statusCode:200,
        body:'Our First Serverless Example'
    }
}