const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const updateLike = require("./updateLike");
const updateDislike = require("./updateDislike");
const updateFavorite = require("./updateFavorite");
const updateComment = require("./updateComment");
const removeById = require("./removeById");

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    updateFavorite,
    removeById,
    updateLike,
    updateDislike,
    updateComment,
}