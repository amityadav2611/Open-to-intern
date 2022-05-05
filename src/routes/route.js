const express = require('express');
const router = express.Router();

/////College API 
const collageCont = require("../controllers/collageController")
router.post("/functionup/colleges", collageCont.createCollage)
router.get("/functionup/collegeDetails", collageCont.collegeDetails)

////Intern API  
const internCont = require("../controllers/internController")
router.post("/functionup/interns", internCont.createIntern)

module.exports = router;