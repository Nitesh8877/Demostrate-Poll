const PollService=require('../Services/poll.services');
exports.create=async(req,res)=>{
    try {
        let poll=await PollService.create(req.body);
        res.status(200).send({
            message:"Poll create successful",
            status:true,
            pollDetails:poll
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}

exports.destroy=async(req,res)=>{

        try {
            let poll=await PollService.destroy(req.params.id);
            res.status(200).send({
                message:"Poll delete successfully",
                status:true,
                PollDetails:poll
            })
            
        } catch (error) {
            res.status(500).send({
                message:"Something went wrong",
                status:false,
                ErrorMessage:error.message
            })
        }

}

exports.update=async(req,res)=>{

    try {

        let pollUpdated=await PollService.update(req.body.status,req.params.id)
        console.log(pollUpdated)
        res.status(200).send({
            message:"Poll update successfully",
            status:true,
            PollDetails:pollUpdated
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}

exports.getAllPolls=async(req,res)=>{
    try {
        let poll=await PollService.getAllPolls()
        res.status(200).send({
            message:"All poll details created by user!",
            status:true,
            PollDetails:poll
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}

exports.getPoll=async(req,res)=>{
    let id=req.params.id
    try {
        let poll=await PollService.getPoll(id);
        res.status(200).send({
            message:"Poll details by this id: "+id,
            status:true,
            PollDetails:poll
        })

    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
    
}