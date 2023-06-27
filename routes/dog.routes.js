const express = require("express");
const router = express.Router();



/* GET display pet */
router.get("/", (req, res,next) => {
    res.render("index");
});


module.exports = router;