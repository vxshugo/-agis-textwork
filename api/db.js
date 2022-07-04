const mongoose = require("mongoose");
const uri = "mongodb+srv://vxshugo:root@cluster0.nlia0.mongodb.net/usermanagment?retryWrites=true&w=majority"
module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        await mongoose.connect(uri, connectionParams);
        console.log("db connected")
    }catch (error) {
        console.log("could not connect to database.", error);
    }
}