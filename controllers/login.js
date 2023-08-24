const titlePage = "Login View";



const bcrypt = require('bcrypt');

exports.login_view = (req,res)=>{
    res.render('login',{
        titlePage
    });
}



exports.loginPost = (req,res)=>{
    
}

