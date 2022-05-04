const collageModel = require("../models/collageModel")

//const jwt = require('jsonwebtoken')

// const validator = require("email-validator")

////////////////////////////////////////////////Create Collage////////////////////////////////////////////////////////////////

const createCollage = async (req, res) => {
    try {
        let data = req.body      //data receiving from the request body
        let savedData = await collageModel.create(data); 
        res.status(201).send({status: true,message: "Collage created successfully", data: savedData })   //sending the data in the respond body
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}

module.exports.createCollage = createCollage;