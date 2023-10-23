const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{res.render("../views/index",{title:"Offline"})})
router.get('/login', (req,res)=>{res.render("../views/login",{title:"Offline - Login"})})

module.exports = router;
