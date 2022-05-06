const internModel = require("../models/internModel")
const validator = require("../Validator/validation")
const validEmail = require("email-validator")
const collageModel = require("../models/collageModel")

////////////////////////////////////////////////Create intern////////////////////////////////////////////////////////////////


const createIntern = async (req, res) => {
    try {

        const body = req.body;
        const { name, mobile, email, collegeName, isDeleted } = body;



        // Validate body

        if (!validator.isValidBody(body)) {
            return res.status(400).send({ status: false, msg: "Intern body should not be empty" });
        }

        // Validate name

        if (!body.name) {
            return res.status(400).send({ status: false, msg: "Intern name is required" });
        }

        // Validate mobile

        if (!body.mobile) {
            return res.status(400).send({ status: false, msg: "Mobile number is required" });
        }

        // Validation mobile number

        if (!validator.isValidMobile(mobile)) {
            return res.status(400).send({ status: false, msg: 'Valid Mobile number is required' })
        }

        // Validate email

        if (!body.email) {
            return res.status(400).send({ status: false, msg: "email is required" });;
        }

        // Validation of Email

        if (!validator.isValidEmail(email)) {
            return res.status(400).send({ status: false, msg: "Valid email is required" });
        }

        //validating college name

        if (!body.collegeName) {
            return res.status(400).send({ status: false, msg: "collegeName is required" });;
        }



        // Checking duplicate entry of intern

        let duplicateEntries = await internModel.find();
        let duplicateLength = duplicateEntries.length

        if (duplicateLength != 0) {

            //Cheking duplicate email

            const IsEmailUsed = await internModel.findOne({ email: email });
            if (IsEmailUsed.length !== 0) {
                return res.status(409).send({ status: false, msg: "email already exists" });
            }

            // Checking duplicate mobile    

            const duplicateMobile = await internModel.findOne({ mobile: mobile })
            if (duplicateMobile) {
                return res.status(409).send({ status: false, msg: "Mobile number already exists" });
            }
        }


        if (isDeleted === true) {
            return res.status(400).send({ status: false, msg: "New entries can't be deleted" });
        }

        
        let collegeData = await collageModel.findOne({ name: collegeName })
        if (!collegeData) {
            return res.status(404).send({ status: false, msg: "collegeName invalid" })
        }



        const collegeId = collegeData._id


        // Finally the registration of intern is successful

        let data = { name, mobile, email, collegeId, isDeleted }

        let showInternData = await internModel.create(data);
        res.status(201).send({ status: true, message: "intern created successfully", data: showInternData })   //sending the data in the respond body
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}




module.exports = { createIntern }
