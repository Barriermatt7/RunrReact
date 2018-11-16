var express = require('express');
var app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

const userRoutes = require("./routes/user.js");
app.use(userRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactfullstack");

<<<<<<< HEAD
// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
=======
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes('delayresponse')) {
        setTimeout(function(){
            next();
        }, 500);
    } else {
        next();
    }
});

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Opened Tickets", "Closed Tickets"];
    let colors = ["#e74c3c", "#27ae60"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});
>>>>>>> d0fc3fac7ca80c3f465bdcc1077c01303d1f5e3b

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/stats/days', function (req, res) {
    res.json([
        {
            label: "Monday",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "Tuesday",
            value: Math.floor(Math.random() * 5) + 7
        },
        {
            label: "Wednesday",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Thursday",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Friday",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Saturday",
            value: Math.floor(Math.random() * 5) + 25
        },
        {
            label: "Sunday",
            value: Math.floor(Math.random() * 5) + 10
        }

    ]);    
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});



app.listen(PORT, function () {
    console.log('Data being served from http://localhost:3001');
});