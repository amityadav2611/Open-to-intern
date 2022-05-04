const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
<<<<<<< HEAD
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
            }, message: "Please fill a valid email address"
        }
    },
    mobile: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate: {
            validator: function (mobile) {
                return /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/
            }, message: "please fill a valid mobile number"
        }
=======
        required: 'Please Enter a Name'
    }, 
    email: {
        type: String,
        unique: true,
        required: 'Please Enter a email',
        // validate: {
        //     validator: function(email){
        //         return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        //     }, message: "Please fill a valid email address"
        // }
    }, 
    mobile: {
        type: String,
        unique: true,
        required: 'Please enter a number',
        minlength: 10,
        maxlength: 10,
        // validate: {
        //     validator: function(mobile){
        //         return /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/
        //     },message: "please fill a valid mobile number"
        // }
>>>>>>> aae25015c311e49e588e46203871c1715fb7ce36
    },
    collageId: {
        type: ObjectId,
        required: true,
        trim: true,
        ref: "collage"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('intern', internSchema)

