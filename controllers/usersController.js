const models = require('../models');
const passHash = require('password-hash');
const jwt = require('jsonwebtoken');


var methode = {}


methode.signup = (req, res, next)=>{
  models.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then ((query)=>{
    if(!query){
      models.User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        dateofbirth : req.body.dateofbirth,
        gender : req.body.gender,
        username : req.body.username,
        password : passHash.generate(req.body.password),
        access : req.body.access || 'user'
      })
      .then(()=>{
        res.send('User added')
      })
    }else{
      res.send('Username already exists')
    }
  })
};

methode.signin = (username, password, callback)=>{
  models.User.findOne({
    where :{
      username : username
    }
  })
  .then((query)=>{
    if(passHash.verify(password, query.password)){
      var myToken = jwt.sign({username : query.username, access : query.access}, 'secret', {expiresIn : '1h'});
      callback(null,{token : myToken})
    }else{
      callback(null,"gagal")
    }
  })
}



methode.getAllData = function(req, res, next) {
  models.User.findAll({})
  .then((query)=>{
    res.send(query)
  })
};

methode.getDataById = function(req, res, next) {
  models.User.findOne({
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
} ;

methode.insert = (req, res, next)=>{
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender,
    username : req.body.username,
    password : passHash.generate(req.body.password),
    access : req.body.access || 'user'
  })
  .then((query)=>{
    res.send(query)
  })
};

methode.delete = (req, res, next)=>{
  models.User.destroy({
    where :{
      id : req.params.id
    }
  })
  .then(()=>{
    res.send("Data Deleted with id : "+req.params.id)
  })
};

methode.updates = (req, res, next)=>{
  models.User.update({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender,
    username : req.body.username,
    password : passHash.generate(req.body.password),
    access : req.body.access,
    updatedAt : new Date()
  },{
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
};


module.exports = methode
