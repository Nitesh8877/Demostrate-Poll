const UserController=require('../controllers/user.controller');

module.exports=function(app){
    app.post('/poll/signup',UserController.signup);
    app.post('/poll/signin',UserController.signin);
}