const {Post} = require("../../models/post");


const getAll = async(req, res) => {//вернем не все книги а тот который добавил пользователь 
   const {_id: owner} = req.user;
   const{page = 1, limit = 10} = req.query;
   const skip = (page - 1) * limit;//пагинация
//    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
   const result = await Post.find({owner}, " -updatedAt",{skip,limit}) //если хотим отдавать какой то поля в массиве то передаем их в скобке на пример "title author name"б а ессли из не передавать то поставим передними минус как в примере "-title -author -name"
                            .populate("owner", "-password -createdAt -updatedAt")//все данные пользователья включае эмаил
    res.json(result);
}

module.exports = getAll;




// const getAll = async(_, res) => {
//     const result = await Comment.find({}, "-createdAt -updatedAt"); //если хотим отдавать какой то поля в массиве то передаем их в скобке на пример "title author name"б а ессли из не передавать то поставим передними минус как в примере "-title -author -name"
//     res.json(result);
// }

