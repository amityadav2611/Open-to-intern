const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId

const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
<<<<<<< HEAD
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
=======
        required: 'Please enter a name'
    }, 
    fullName: {
        type: String,
        required: 'Please enter a fullname'
    }, 
>>>>>>> aae25015c311e49e588e46203871c1715fb7ce36
    logoLink: {
        type: String,
        required: 'please link a logolink'
    },
<<<<<<< HEAD

=======
    // interests: {
    //     type: ObjectId,
    //     ref: "intern"
    // },
    
>>>>>>> aae25015c311e49e588e46203871c1715fb7ce36
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('collage', collageSchema)

