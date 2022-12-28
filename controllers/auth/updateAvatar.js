const fs = require("fs/promises");
const path = require("path");

const {User} = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatar");

const updateAvatar = async(req, res) =>{
        const {path:tempUpload, originalname} = req.file;
        const {_id} = req.user;
        const extension = originalname.split(".").pop();//перименуем имя файла на айди пользователья
        const filename = `${_id}.${extension}`;
        const resultUpload = path.join(avatarsDir, filename);
        await fs.rename(tempUpload, resultUpload);//перемещаем что бы созранить в базе
        const avatarURL = path.join("avatars", filename);
        await User.findByIdAndUpdate(_id,{avatarURL});//сохраняем  в базе
        res.json({
            avatarURL,
        })
};

module.exports = updateAvatar;