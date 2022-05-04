const express = require('express');
const router = express.Router();

const collageCont= require("../controllers/collageController")
const internCont = require("../controllers/internController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/functionup/colleges",  collageCont.createCollage)

router.post("/functionup/interns",  internCont.createIntern)

//router.get("/collegeDetails", internCont.getDetails)

router.get("/functionup/collegeDetails", collageCont.collegeDetails)



module.exports = router;