const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
// const authenticateSocial = require("./authenticate-social");

module.exports = {
    validateBody,
    isValidId,
    authenticate,
    //  authenticateSocial,
    upload,
}