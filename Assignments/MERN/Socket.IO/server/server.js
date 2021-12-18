const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const socket = require('socket.io');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "*"
}));


mongoose
    .connect("mongodb://localhost/chatApp", {
        // Note: The useNewUrlParser and useUnifiedTopology are options we pass to handle deprecation warnings in our terminal.
        useNewUrlParser: true,
        useunifiedTopology: true,
    })
    .then(() => {
        console.log("You are connected to the database called chatApp");
    })
    .catch((err) => {
        console.log(
            "There was an error connection to the database called: chatApp",
        );
        console.log(err);
    });


const MessageSchema = new mongoose.Schema({
    content:{
        type: String,
        required:[true, "Please enter message"]
    },
    username:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User"
        type: String
    }

}, {timestamps: true})


const Message = mongoose.model("Message", MessageSchema);



const UserSchema = new mongoose.Schema({

        name: {
            type: String,
            required: [true, "Please enter message"],
        },
        messages: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    
    },
    { timestamps: true });


const User = mongoose.model("User", UserSchema);



app.get("/api/allMessages", (req, res)=>{
    Message.find({})
    .then((allMessages)=>{
        console.log(allMessages);
        res.json(allMessages);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.post("/api/new", (req, res) => {
    Message.create(req.body)
        .then((allMessages) => {
            console.log(allMessages);
            res.json(allMessages);
        })
        .catch((err) => {
            console.log(err);
        });
});


const server = app.listen(8000, ()=> console.log("Connected on port 8000"))

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors

//
const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});


io.on("connection", socket =>{
    console.log("socket id" + socket.id);

    socket.on("Update_chat", (data)=>{
        console.log("The payload: ", data);
        io.emit("Update_chat", data);
    });

        socket.on("newUser", (username) => {
            io.emit("newUser", username);
        });

})


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const socket = require('socket.io');
// const port = 8000;
// app.use(cors());



// const server = app.listen(port, () => {
//     console.log(`Listening on port: ${port}`)
// });

// // to initialize the socket, we need to invoke a new instance
// //     of socket.io and pass it our express server instance
// // We must also include a configuration settings object to prevent CORS errors
// const io = socket(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['*'],
//         credentials: true,
//     }
// });

// io.on("connection", socket => {
//     console.log("Nice to meet you (shake hand)");

//     socket.emit("event_to_all_other_clients");
// });