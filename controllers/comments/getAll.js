const {Comment} = require("../../models/comment");

const getAll = async(_, res) => {
    const result = await Comment.find({}, "-createdAt -updatedAt"); //если хотим отдавать какой то поля в массиве то передаем их в скобке на пример "title author name"б а ессли из не передавать то поставим передними минус как в примере "-title -author -name"
    res.json(result);
}

module.exports = getAll;