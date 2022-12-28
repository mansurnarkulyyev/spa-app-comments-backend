const multer = require("multer");
const path = require("path");


const tempDir = path.join(__dirname,"../", "temp");
const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (_, file, callback) => {
        callback(null, file.originalname)
        // callback(null, new Date().toISOString() + path.join(__dirname, '/temp/'));
    },
});


const upload = multer({
    storage: multerConfig,
});

module.exports = upload;
