const PollController=require('../controllers/poll.controller');
const Auth=require('../middaleware/userTakenValidate');

module.exports=function(app){
    app.post('/poll',[Auth.isValideToken],PollController.create);
    app.get('/poll/:id',[Auth.isValideToken],PollController.getPoll);
    app.get('/poll',[Auth.isValideToken],PollController.getAllPolls);
    app.delete('/poll/:id',[Auth.isValideToken],PollController.destroy);
    app.put('/poll/:id',[Auth.isValideToken],PollController.update);
}