const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{res.render("../views/index",{title:"조회페이지"})})

module.exports = router;
