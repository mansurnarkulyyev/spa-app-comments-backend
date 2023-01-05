// const fs = require("fs/promises");
// const path = require("path");

// const {User} = require("../../models/user");

// const avatarsDir = path.join(__dirname, "../../", "public", "comments");

// const updateAvatar = async(req, res) =>{
//       const { path: tempUpload, originalname } = req.file;

//   const result = path.join(avatarsDir, originalname);
//   const cover = path.join(`comments`, originalname);

//   await fs.rename(tempUpload, result);
//   const response = await User.create({ ...req.body, cover });

//   res.status(201).json(response);
//         // const {path:tempUpload, originalname} = req.file;
//         // const {_id} = req.user;
//         // const extension = originalname.split(".").pop();//перименуем имя файла на айди пользователья
//         // const filename = `${_id}.${extension}`;
//         // const resultUpload = path.join(avatarsDir, filename);
//         // await fs.rename(tempUpload, resultUpload);//перемещаем что бы созранить в базе
//         // const avatarURL = path.join("comments", filename);
//         // await User.findByIdAndUpdate(_id,{avatarURL});//сохраняем  в базе
//         // res.json({
//         //     avatarURL,
//         // })
// };

// module.exports = updateAvatar;