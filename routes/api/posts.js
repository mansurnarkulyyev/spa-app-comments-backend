const express = require("express");

const ctrl = require("../../controllers/comments");

const {ctrlWrapper} = require("../../helpers");

const {validateBody, isValidId, authenticate, upload} = require("../../middlewares");

const {schemas} = require("../../models/post");

const router = express.Router();

//add post
router.post( "/", authenticate, upload.single("cover"), validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

//get all post
router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

// get post by id
router.get("/:id",authenticate, isValidId, ctrlWrapper(ctrl.getById));

//update post
router.patch("/:id", authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

//like
router.put("/:id/like",authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateLike));

//dislike
router.put("/:id/dislike",authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateDislike));

//comment
router.put("/comment/post",authenticate,  ctrlWrapper(ctrl.updateComment));

//favorite
router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFovirteSchema), ctrlWrapper(ctrl.updateFavorite));

//delete
router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeById));



module.exports = router;