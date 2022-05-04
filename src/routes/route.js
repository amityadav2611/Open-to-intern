const express = require('express');
const router = express.Router();

const collageCont= require("../controllers/collageController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/collages",  collageCont.createCollage)


module.exports = router;