const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

const modelScheman = new mongoose.Schema({

    nidUser : String,
    state : String,
    category : String,
    images : [Object],
    dateCreated : Date,
    title : String,
    price : Number,
    priceNegotiable : Booelan,
    description : String,
    views : Number,
    status : String
})


const modelName = 'Ads';
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName]
} else {
    module.exports = mongoose.model(modelName, modelScheman)
}