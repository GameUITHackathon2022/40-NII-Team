const users = require('../models/users');
const status = require('../models/status');
const multer = require('multer');
const comments = require('../models/comments');

class home {
       homePage(req, res, next){

           const allSTT = status.find({}).sort({createdAt: -1})
                .then(function(data) {
                    return data; 
                })
           const topUser = users.find({}).limit(5).sort({credits: -1}).then(function(user){
            return user;
           })
          // const getComment = status.find({})
          // .then(function(comment))

           async function renderPage(){
                const allStatus = await allSTT;
                const topUsers = await topUser;
        
                res.render('home', {layout: 'layouts/main', status : allStatus, topUsers})
           }
               renderPage()
           
       }
      postStatus(req, res, next){
           const st = new status({
            username: req.session.username,
            content: req.body.content,
            img: req.body.imgLink
           })
           st.save()
           res.redirect('/') 
           


      }

      comment(req, res, next){
          const id = req.query.id
          console.log(id)
          console.log(req.body.content) 
          const cm = new comments({
               statusID: id,
               name:req.session.username,
               content: req.body.content
       
     })
     cm.save()
    res.redirect('/')
     }

}
module.exports = new home;