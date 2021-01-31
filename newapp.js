var express = require('express')
var bodyParser = require('body-parser')

var newapp = express()
var port = 2021
    // parse application/x-www-form-urlencoded
newapp.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
newapp.use(bodyParser.json())



//a. tạo api hiển thị toàn bộ thuộc tính của obj
var obj = { name: "nodemy" }
newapp.get("/obj", function(req, res) {
        res.json(obj)
    })
    //b.tạo api hiển thị giá trị thuộc tính của obj theo key
newapp.get("/obj/:name", function(req, res) {
    res.json(Object.values(obj))
})



newapp.post("/obj/:name", function(req, res) {


            //d. Tạo 1 api cập nhật giá trị thuộc của obj theo key, nếu key không tồn tại hãy in ra thông báo






            newapp.listen(port, function() {
                console.log(("Server chay tai cong: ") + port);
            })