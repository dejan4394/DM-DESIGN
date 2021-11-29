const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require("mongoose");
const passport = require("./passport");
const cors = require("cors");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const path = require("path")
const PORT = process.env.PORT || 8080;
const log = console.log;

const app = express();

mongoose.connect('mongodb://ilina2018:ilinamalinova2018@signup-shard-00-00.pdmrz.mongodb.net:27017,signup-shard-00-01.pdmrz.mongodb.net:27017,signup-shard-00-02.pdmrz.mongodb.net:27017/DmDesignUsers?ssl=true&replicaSet=atlas-10ipbb-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//-----BODY PARSER------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//----------------------------

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
app.use(cors());


//------INNITIALIZE PASSPORT---
app.use(passport.initialize());
app.use(passport.session());


//------ROOT ROUTES----------
app.use('/', indexRouter);
app.use('/users', usersRouter);
//---------------------------

//====Serve static assets if in production==
if(process.env.NODE_ENV === "production"){
  //Set static folder//
  app.use(express.static("build"));

  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  })
}

//-------SERVER--------------

app.listen( PORT, () => log(`Server started at ${PORT}`));


module.exports = app;
