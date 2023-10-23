const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set("view engine", "ejs"); //렌더링 템플릿 엔진으로 ejs를 사용하겠다.

// db 연결
// mongoose.connect("mongodb://localhost:27017/test_db")

app.use("", require("./routes/routes"));

app.listen(3030,()=>{
    console.log('server started')
})