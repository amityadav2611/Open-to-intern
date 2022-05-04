const express = require('express');
const router = express.Router();

/////College API 
const collageCont = require("../controllers/collageController")
router.post("/collages", collageCont.createCollage)
router.get("/collegedetails",collageCont.collegeDetails)

////Intern API  
const internCont = require("../controllers/internController")
router.post("/interns", internCont.createIntern)












module.exports = router;