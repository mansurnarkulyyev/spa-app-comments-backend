const express = require("express");

const ctrl = require("../../controllers/comments");

const {ctrlWrapper} = require("../../helpers");

const {validateBody, isValidId, authenticate, upload} = require("../../middlewares");

const {schemas} = require("../../models/comment");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id",authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post( "/", authenticate, upload.single("cover"), validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put("/:id",authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFovirteSchema), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeById));



module.exports = router;