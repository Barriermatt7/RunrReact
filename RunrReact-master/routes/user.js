const express = require("express");
const router = express.Router();
const db = require("../models");
router.get("/api/user", function(req, res){
    res.send("Get Users")
});

router.post("/api/user", function(req, res){
    db.User.create(req.body, function(error, response){
      if(error){
          return res.json(error)
      }  
      return res.json(response); 
    })
})
router.post("/login", function(req, res){
    console.log(res.body);
    db.User.findOne({username:req.body.username},function(error,response){
        console.log(req.body)
        if(error){
            return res.json(error)
        }
        console.log(response);
        response.comparePassword(req.body.password, function (error, user) {
            if(error){
               return res.json(error)
            }
            res.json(user);
        });
    })
})
router.put("/api/user/:id", function(req, res){
    res.send("Update Users")
})

router.delete("/api/user/:id", function(req, res){
    res.send("Delete Users")
})

module.exports = router;