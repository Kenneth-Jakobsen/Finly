const User = require('../libs/models/user.model');

const createUser = async(req, res)=>{
    await User.create({
        email:'ken@mail.com',
        password:'password',
    });

    res.render('user',{message:'User created', user:null});
}

const getUser = async(req,res)=>{
    await User.findOne({email:'ken@mail.com'});
    res.render('user', {message:'User Retrieved', user:User});
};

const deleteUser = async(req,res)=>{
    await User.findOneAndDelete({email:'ken@mail.com'});
    res.render('user', {message:'User Deleted', user:null});
};


module.exports={
    getUser,
    createUser,
    deleteUser
};