let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
   FirstName : String,
   LastName : String,
   Age : Number
},
{
    collection:"First"
}
);


module.exports = mongoose.model('test',contactSchema)