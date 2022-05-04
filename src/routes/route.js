const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const collageCont = require("../controllers/collageController")
=======
const collageCont= require("../controllers/collageController")
const internCont = require("../controllers/internController")
>>>>>>> bebe19ba1cd2a7c7fea1a87d997b3012ac596633



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/collages",  collageCont.createCollage)

router.post("/interns",  internCont.createIntern)


module.exports = router;