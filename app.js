var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var port = 1911
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



var array = [{
        id: 1,
        name: "Phong",
        password: "1",
        address: "HN"
    }, {
        id: 2,
        name: "Sang",
        password: "1",
        address: "HP"
    },
    {
        id: 3,
        name: "Tan",
        password: "1",
        address: "Bắc Ninh"
    },
    {
        id: 4,
        name: "Dũng",
        password: "1",
        address: "TQ"
    },
]


app.get("/user", function(req, res) {
    res.json(array)
})

app.get("/user/:id", function(req, res) {
    var id = req.params.id
    var checkUser = array.filter(function(userItem) {
        return id == userItem.id
    })
    if (checkUser.length) {
        res.json(checkUser)
    } else {
        res.json("Khong ton tai")
    }
})



app.post("/user", function(req, res) {
    array.push({
        id: 6,
        name: "Dat",
        password: "69",
        address: "VN"
    })
    res.json(array)
});


app.put("/user/:id", function(req, res) {
    for (var i = 0; i < array.length; i++) {
        var count = 0;
        if (array[i].id == req.params.id) {
            array[i].name = "Vinh";
            array[i].password = 1;
            array[i].address = "My";
            return res.json(array)
        } else {
            count++
        }
    }
    if (count) {
        res.json("Nhap lai id")
    }
});

app.delete("/user/:id", function(req, res) {
    for (var i = 0; i < array.length; i++) {
        var count = 0;
        if (array[i].id == req.params.id) {
            var pos = array.indexOf(array[i])
            array.splice(pos, 1)
            return res.json(array)
        } else {
            count++
        }
    }
    if (count) {
        res.json("Nhap lai id")
    }
})



app.listen(port, function() {
    console.log(("Server chay tai cong: ") + port);
})