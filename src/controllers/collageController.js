const collageModel = require("../models/collageModel")
const internModel = require("../models/internModel")

////////////////////////////////////////////////Create Collage////////////////////////////////////////////////////////////////




const createCollage = async (req, res) => {
    try {
        let data = req.body      //data receiving from the request body

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, Error: "Please fill the college data" })
        if (!data.name) return res.status(400).send({ status: false, Error: "Name is Required" })
        if (!data.fullName) return res.status(400).send({ status: false, Error: "fullName is Required" })
        if (!data.logoLink) return res.status(400).send({ status: false, Error: "logoLink is Required" })

        let nameString = /^[A-Za-z\s]+$/
        if (!nameString.test(data.name)) return res.status(400).send({ status: false, Error: "Name must be in String" })
        if (!nameString.test(data.fullName)) return res.status(400).send({ status: false, Error: "fullName must be in String" })

        let nameCheck = await collageModel.findOne({ name: data.name })
        if (nameCheck) return res.status(401).send({ status: false, Error: "name is already used" })


        let showCollegeData = await collageModel.create(data);
        res.status(201).send({ status: true, message: "Collage created successfully", data: showCollegeData })
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}

//get
const collegeDetails = async (req, res) => {
    try {
        let collegeName = req.query.collegeName;
        if (!collegeName) return res.status(400).send({ status: false, Error: "Enter College Name" });
        let collName = /^[A-Za-z\s]+$/
        if (!collName.test(collegeName)) return res.status(400).send({ status: false, Error: "Collage name only in Alphabetics" })

        let getCollegeData = await collageModel.findOne({ name: collegeName }).select({ name: 1, fullName: 1, logoLink: 1 });
        if (!getCollegeData) return res.status(404).send({ status: false, Error: "College not found! check the name and try again" });

        let { ...data } = getCollegeData._doc
        // console.log(data)

        let getInterns = await internModel.find({ collegeId: data._id }).select({ name: 1, email: 1, mobile: 1 });
        //console.log(getInterns)
        if (!getInterns) return res.status(404).send({ status: false, Error: "No interns found" });

        delete (data._id);
        data.interests = getInterns;

        res.status(200).send({ status: true, Message: "Collage details", data: data });
    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.createCollage = createCollage;

module.exports.collegeDetails = collegeDetails