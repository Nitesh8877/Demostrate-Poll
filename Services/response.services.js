const Response = require('../models/response.model');
const Poll = require('../models/poll.model');

const create = async (data) => {
    try {
        const response = await Response.create({
            user: data.user,
            poll: data.poll,
            selectedOption: data.option
        });
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const getAllResponsesForAPoll = async (pollId) => {
    try {
         const poll = await Poll.findById(pollId);
         const responses = await Response.find({poll: poll._id});
         return responses;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    create,
    getAllResponsesForAPoll
}