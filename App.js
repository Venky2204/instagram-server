const express =require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const {MONGOURI} = require('./keys');
// const cors = require('cors');

// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah");
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err);
})


require('./models/user');
require('./models/post');

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

//if(process.env.NODE_ENV == "production"){
//   app.use(express.static('client/build'))
//    const path = require('path')
//    app.get("*",(req,res)=>{
//        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//    })
//}

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
})

// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));
