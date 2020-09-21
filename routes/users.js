var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource from hasan ossaily");
});

/* GET users listing. */
router.get("/:id", function(req, res, next) {
    res.send("respond with a " + req.params.id);
});

/* GET users listing. */
router.get("/:id/app", function(req, res, next) {
    res.send("respond with a app" + req.params.id);
});

module.exports = router;