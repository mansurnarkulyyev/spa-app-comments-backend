const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");


const router = express.Router();

router.get("/", ctrlWrapper(ctrl.captcha))

// console.log(ctrl.captcha);

module.exports = router;