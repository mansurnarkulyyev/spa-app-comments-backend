const { Post } = require("../../models/post");

const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  Post.findOneAndUpdate(
    { _id: id }, //тут уже нельзя использовать await вместо него функцию передаем
    {
      $inc: { viewsCount: 1 },
    },
    {
      returnDocument: "after",
    },
    (err, result) => {
      if (err) {
        return RequestError(500, "Failed to return post!");
      }

      if (!result) {
        throw RequestError(404, "Not found");
      }
      res.json(result);
    },
    "-createdAt -updatedAt"
  );
  // const result = await Book.findOne({_id: id}, "-createdAt -updatedAt"); //если хотим отдавать какой то поля в массиве то передаем их в скобке на пример "title author name"б а ессли из не передавать то поставим передними минус как в примере "-title -author -name"
};

module.exports = getById;
