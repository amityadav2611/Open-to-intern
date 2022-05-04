const internModel = require("../models/internModel")
const mongoose = require('mongoose');
const validEmail = require("email-validator")

////////////////////////////////////////////////Create intern////////////////////////////////////////////////////////////////

const createIntern = async (req, res) => {
    try {
        let data = req.body      //data receiving from the request body

        if(Object.keys(data).length == 0) return res.status(400).send({status: false, Error: "Please fill the data to apply for internship"})
        if(!data.name) return res.status(400).send({status: false, Error: "Name is Required"})
        if(!data.email) return res.status(400).send({status: false, Error: "Email is Required"})
        if(!data.mobile) return res.status(400).send({status: false, Error: "Mobile Number is Required"})
        if(!data.collegeId) return res.send(400).send({status: false, Error: "CollegeId is Required"})

        let nameString = /^[A-Za-z\s]+$/
        if (!nameString.test(data.name)) return res.status(400).send({ status: false, Error: "Name must be in String" })
        if(!validEmail.validate(data.email)) return res.status(400).send({status: false, Error: "Please Enter a valid Email Id"})
        let mobileNo = /^[0-9]+$/   //'^[0-9]*$'
        if(!mobileNo.test(data.mobile)) return res.status(400).send({status: false, Error: "Only Number is Allowed"})
        if (data.mobile.length !== 10) return res.status(400).send({ status: false, Error: "Mobile number should be of 10 digits excluding (+91)" });
        if (!mongoose.isValidObjectId(collegeId)) return res.status(404).send({ status: false, Error: "Enter a valid collegeId" })

        let getUniqueValues = await internModel.findOne({ $or: [{ email: data.email }, { mobile: data.mobile }] });
        if (getUniqueValues) return res.status(400).send({ status: false, Error: "Email or Mobile number already exist" })


        let showInternData = await internModel.create(data); 
        res.status(201).send({status: true,message: "intern created successfully", data: showInternData })   //sending the data in the respond body
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}

<<<<<<< HEAD

//get
let getDetails = async (req, res) => {
    try {
        let intern = await internModel.find()
        //res.send({ data: bookget})
        res.status(200).send({ status: true, message: "Collage Details", data: intern })  //it will send the data to response body
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message });

    }
}

module.exports = {createIntern,getDetails}
=======
module.exports.createIntern = createIntern;
>>>>>>> aae25015c311e49e588e46203871c1715fb7ce36
