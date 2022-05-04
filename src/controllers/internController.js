const internModel = require("../models/internModel")

//const jwt = require('jsonwebtoken')

// const validator = require("email-validator")

////////////////////////////////////////////////Create intern////////////////////////////////////////////////////////////////

const createIntern = async (req, res) => {
    try {
        let data1 = req.body      //data receiving from the request body
        let savedData1 = await internModel.create(data1); 
        res.status(201).send({status: true,message: "intern created successfully", data: savedData1 })   //sending the data in the respond body
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}


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

module.exports.createIntern = createIntern;