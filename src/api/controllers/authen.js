const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../models/users');


class authentication {
       register(req, res, next) {
          const info = req.body;
          info.credit = Math.round(Math.random() *1000);
          bcrypt.hash(info.password, saltRounds).then(function(hash) {
            const user = new users({username: info.username, password:hash, credit: info.credit})
            user.save()
            res.status(200).json({message :' Thanh cong'})
        });
       }
       login(req, res){
              const username = req.body.username;
              const password = req.body.password;

              users.findOne({username})
              .then(function(users){
                 if(users){
            bcrypt.compare(password, users.password, function(err, result) {
                if(result){
                  req.session.username = username;
                  res.redirect('/')
                  
                }
            });
                }
              })
       }
      
       
}


module.exports = new authentication;