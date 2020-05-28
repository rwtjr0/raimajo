// package init
var express = require('express');
var router = express.Router();

// model vars

// middleware

// INDEX route - show all
router.get("/", (req, res) => {
    res.render("contact");
});


// return router object
module.exports = router;