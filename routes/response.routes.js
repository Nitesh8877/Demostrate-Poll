const ResponseController=require('../controllers/response.controller');
const Auth=require('../middaleware/userTakenValidate');

module.exports=function(app){
    app.post('/poll/response',Auth.isValideToken,ResponseController.create);
    app.get('/poll/response/:pollid',Auth.isValideToken,ResponseController.getAllPollsResponse);
}