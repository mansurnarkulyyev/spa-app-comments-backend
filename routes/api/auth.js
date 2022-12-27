const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

//данные пользователья
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));//если пользователь зарегистрирован то можем получать его данные 

//logout
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));//если пользователь зарегистрирован то можем получать его данные 

module.exports = router;