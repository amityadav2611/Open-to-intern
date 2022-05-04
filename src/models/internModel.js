const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema( {
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(email){
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
            }, message: "Please fill a valid email address"
        }
    }, 
    mobile: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(mobile){
                return /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/
            },message: "please fill a valid mobile number"
        }
    },
    collageId: {
        type: ObjectId,
        required: true,
        ref: "collage"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('intern', internSchema)



// { name: {mandatory},
//  email: {mandatory, valid email, unique},
//   mobile: {mandatory, valid mobile number, unique},
//    collegeId: {ObjectId, ref to college model, 
//     isDeleted: {boolean, default: false}}