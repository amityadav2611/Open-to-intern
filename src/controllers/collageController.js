const collageModel = require("../models/collageModel")
const internModel = require("../models/internModel")
const validator = require("../Validator/validator")

////////////////////////////////////////////////Create Collage////////////////////////////////////////////////////////////////


const createCollage = async (req, res) => {
    try {

        let data = req.body      //data receiving from the request body

        const { name, fullName, logoLink, isDeleted } = data
        //Validate the body

        if (!validator.isValidBody(data)) {
            return res.status(400).send({ status: false, Msg: "College Body should not be empty" })
        }

        //validate the name

        if (!validator.isValid(data.name)) {
            return res.status(400).send({ status: false, Msg: "College Name is reuired" })
        }

        // Validation of name in lowercase

        if (!validator.isValidName(name)) {
            return res.status(400).send({ status: false, msg: "name should be lower case" })
        }

        //validate the full name

        if (!validator.isValid(data.fullName)) {
            return res.status(400).send({ status: false, Msg: "Enter the full name of college" })
        }

        // validate the logolink 

        if (!validator.isValid(data.logoLink)) {
            return res.status(400).send({ status: false, msg: "Valid Logo link is required" })
        }

        // Validate the Link of the logo

        if (!validator.isValidLink(logoLink)) {
            return res.status(400).send({ status: false, msg: "Valid Logo link is required" })
        }


        //Abbrevation must be in single word

        if (name.split(" ").length > 1) {
            return res.status(400).send({ status: false, msg: "please provide the Valid Abbreviation" });
        }

        // checkking the duplicate entries of college 

        let duplicateentry = await collageModel.find()
        let duplicatelen = duplicateentry.length

        if (duplicatelen !== 0) {
            const duplicatename = await collageModel.findOne({ name: name })
            if (duplicatename) {
                return res.status(409).send({ status: false, msg: "College  Name already exists" });
            }
        }

        //checking the duplicate  entries of full name of college

        const duplicateCollegeName = await collageModel.findOne({ fullName: fullName });
        if (duplicateCollegeName) {
            return res.status(409).send({ status: false, msg: "College Full Name already exists" });
        }

        //checking the  logo link 

        const duplicatelog = await collageModel.findOne({ logoLink: logoLink })
        if (duplicatelog) {
            return res.status(409).send({ status: false, msg: 'The logo link which you have entered belong to some other college' })
        }

        if (isDeleted === true) {
            return res.status(400).send({ status: false, msg: "New entries can't be deleted" });
        }

        let showCollegeData = await collageModel.create(data);
        res.status(201).send({ status: true, message: "Collage created successfully", data: showCollegeData })
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}

//////////////////////////////////////////////////////////////////////////////get Collage Details///////////////////////////////////////////////////////////////////

const collegeDetails = async (req, res) => {
    try {


        const queryParams = req.query
        const { collegeName } = req.query

        // Validate body

        if (!validator.isValidBody(queryParams)) {
            return res.status(400).send({ status: false, message: "Invalid Input Parameters" })
        }

        if (Object.keys(queryParams).length > 1) {
            return res.status(400).send({ status: false, message: "Invalid Input" })
        }

        if (!collegeName) {
            return res.status(400).send({ status: false, message: "collegeName Is Required" })
        }

        // Validation of collegeName in lowercase

        if (!validator.isValidName(collegeName)) {
            return res.status(400).send({ status: false, msg: "Invalid collegeName" })
        }

        //collegeName must be a single word

        if (collegeName.split(" ").length > 1) {
            return res.status(400).send({ status: false, message: "please provide The Valid Abbreviation" })
        }


        // if name is invalid

        const collegeNames = await collageModel.findOne({ name: collegeName })

        if (!collegeNames) {
            return res.status(404).send({ status: false, message: "College Not Found, Please Check College Name" })
        }
        const collegeId = collegeNames._id

        const InternsInCollege = await internModel.find({ collegeId: collegeId }).select({ _id: 1, email: 1, name: 1, mobile: 1 })

        const { name, fullName, logoLink } = collegeNames


        // Final list of College details with students name who applied for internship

        const finalData = {

            name: name,
            fullName: fullName,
            logoLink: logoLink,
            interns: InternsInCollege.length ? InternsInCollege : { message: "No one applied for internship in this college" }

        }
        return res.status(200).send({ status: true, message: "College Details", Data: finalData })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


module.exports.createCollage = createCollage;
module.exports.collegeDetails = collegeDetails



























//create
// if (Object.keys(data).length == 0) return res.status(400).send({ status: false, Error: "Please fill the college data" })
// if (!data.name) return res.status(400).send({ status: false, Error: "Name is Required" })
// if (!data.fullName) return res.status(400).send({ status: false, Error: "fullName is Required" })
// if (!data.logoLink) return res.status(400).send({ status: false, Error: "logoLink is Required" })

// let nameString = /^[A-Za-z\s]+$/
// if (!nameString.test(data.name)) return res.status(400).send({ status: false, Error: "Name must be in String" })
// if (!nameString.test(data.fullName)) return res.status(400).send({ status: false, Error: "fullName must be in String" })

// let nameCheck = await collageModel.findOne({ name: data.name })
// if (nameCheck) return res.status(401).send({ status: false, Error: "name is already used" })


//get College Details with intern data

//get
 // let collegeName = req.query
        // if (!collegeName) return res.status(400).send({ status: false, Error: "Enter College Name" });
        // let collName = /^[A-Za-z\s]+$/
        // if (!collName.test(collegeName)) return res.status(400).send({ status: false, Error: "Collage name only in Alphabetics" })

        // let getCollegeData = await collageModel.findOne({ name: collegeName }).select({ name: 1, fullName: 1, logoLink: 1 });
        // if (!getCollegeData) return res.status(404).send({ status: false, Error: "College not found! check the name and try again" });

        // let { ...data } = getCollegeData._doc
        // // console.log(data)

        // let getInterns = await internModel.find({ collegeId: data._id }).select({ name: 1, email: 1, mobile: 1 });
        // //console.log(getInterns)
        // if (!getInterns) return res.status(404).send({ status: false, Error: "No interns found" });

        // delete (data._id);
        // data.interests = getInterns;

        // res.status(200).send({ status: true, Message: "Collage details", data: data });
