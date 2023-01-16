const mongoose = requried('mongoose');
const URI = "mongoDB://127.0.0.1:27012/WebDB2";
//connect the MongoDB to react
const connectToMongo = () => {
    mongoose.connect(URI, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Database connected successfully");
        }
    })
}
//this is help to export the data
module.exports = connectToMongo;