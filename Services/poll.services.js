const Poll = require('../models/poll.model');

const create = async (data) => {
    try {
        const response = await new Poll(data).save();
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const destroy = async (id) => {
    try {
        const response = await Poll.findByIdAndDelete(id);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const update = async (data,id) => {

    try {
        const response = await Poll.findByIdAndUpdate(id, {status: data}, {new: true});
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}


const getPoll = async (id) => {
    try {
        const response = await Poll.findById(id);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const getAllPolls = async () => {
    try {
         const response = await Poll.find();
         return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    create,
    destroy,
    update,
    getPoll,
    getAllPolls
}