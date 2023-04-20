const ResponseService=require('../Services/response.services');

exports.create=async(req,res)=>{
    try {
        let response=await ResponseService.create(req.body);
        res.status(200).send({
            message:"Fetch response",
            status:true,
            data:response
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}

exports.getAllPollsResponse=async(req,res)=>{
    try {
        let response=await ResponseService.getAllResponsesForAPoll(req.params.pollid);
        res.status(200).send({
            message:"Poll Response success",
            status:true,
            data:response
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}