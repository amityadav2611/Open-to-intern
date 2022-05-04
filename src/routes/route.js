const express = require('express');
const router = express.Router();

/////College API 
const collageCont = require("../controllers/collageController")
router.post("/collages", collageCont.createCollage)

////Intern API  
const internCont = require("../controllers/internController")
router.post("/interns", internCont.createIntern)








<<<<<<< HEAD
=======
router.post("/functionup/colleges",  collageCont.createCollage)

router.post("/functionup/interns",  internCont.createIntern)

//router.get("/collegeDetails", internCont.getDetails)

router.get("/functionup/collegeDetails", collageCont.collegeDetails)
>>>>>>> aae25015c311e49e588e46203871c1715fb7ce36



module.exports = router;