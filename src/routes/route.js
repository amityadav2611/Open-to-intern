const express = require('express');
const router = express.Router();

const collageCont= require("../controllers/collageController")
const internCont = require("../controllers/internController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/collages",  collageCont.createCollage)

router.post("/interns",  internCont.createIntern)


module.exports = router;