const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGODB_URL');

const connectDB = async () =>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected ...');
    }catch (e) {
        console.log('not connecting');
        console.error(e.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;