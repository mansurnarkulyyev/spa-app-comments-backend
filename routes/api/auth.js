const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validateBody, authenticate, upload, authenticateSocial} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

//данные пользователья
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));//если пользователь зарегистрирован то можем получать его данные 

//logout
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));//если пользователь зарегистрирован то можем получать его данные 

//user avatar 
// router.patch("/avatars",authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));


// router.get(
//   "/google",
//   authenticateSocial.authenticate("google", { scope: ["email", "profile"] })
// );


// router.get(
//   "/google/callback",
//   authenticateSocial.authenticate("google", {
//     scope: ["email", "profile"],
//     session: false,
//   }),
//   ctrlWrapper(googleAuth)
// );

// // 
// authenticateSocial.serializeUser((user) => {
//   return done(null, user._id);
// });

// authenticateSocial.deserializeUser((id) => {

//   User.findById(id, (err) => {
//     // Whatever we return goes to the client and binds to the req.user property
//     return done(null, doc);
//   })
// })



module.exports = router;