const mongoose = require('mongoose');

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => {console.log("DB connected")})
        .catch((err) => {console.log("DB connect ERROR :", err)})