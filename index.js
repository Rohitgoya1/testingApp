const express = require('express')

const monsoose = require('mongoose');

const app = express();

// monsoose.set("useCreateIndex", true);
monsoose
.connect('mongodb+srv://rohit_1234:rohit_1234@cluster0.7p21u.mongodb.net/test', {
        // useFindAndModify: false,
        useNewUrlParser: true,
        // useUnifiedTopology: true,
}).then(
    ()=>{
        console.log("mongoDB connnection Estabilished");
    },
    (err) => {
        console.log("mongoDB Connection failed", err);
    }
)
app.get('/', (req, res)=>{
    res.send('hiiii this server successfully created...')
});

app.listen(5000,()=>{
    console.log("server successfully created....")
});