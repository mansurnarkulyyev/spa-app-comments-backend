const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseSchemaError} = require("../helpers");

// const genres = ["fantastic", "love"];
// const isbnRegexp = /^\d{3}-\d-\d{3}-\d{5}-\d$/

// Приклад:
// ISBN 5-02-013850-?
//   5  0  2  0  1  3  8  5  0  -  цифрова частина
//  10  9  8  7  6  5  4  3  2  -  вагові коефіцієнти
//  50  0 16  0  6 15 32 15  0  -  добутки цифр на вагові коефіцієнти

//  50 + 0 + 16 + 0 + 6 + 15 + 32 + 15 + 0 = 134.
//  Наступне ціле число кратне 11 це 143 = 11*13, тому
//  143 – 134 = 9               -  контрольна цифра

const commentSchema = new Schema({
     name: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
    },
    owner:{//владелец комментарии который он добавил (автор)
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    author: {
        type: String,
        required: true,
    },
    // favorite: {
    //     type: Boolean,
    //     default: false,
    // },
    // genre: {
    //     type: String,
    //     enum: genres,
    //     required: true,
    // },
    // isbn: {
    //     type: String,
    //     match: isbnRegexp,
    //     required: true,
    //     unique: true,//если что то отправим уникальное 
    // },
    // cover: {
    //   type: String,
    //   require: true,
    // },
}, {versionKey: false, timestamps: true});

commentSchema.post("save", handleMongooseSchemaError);

const addSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    // favorite: Joi.boolean(),
    // genre: Joi.string().valueOf(genres).required(),
    // isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFovirteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    addSchema,
    updateFovirteSchema,
}

const Comment= model("comment", commentSchema);
// categories => category
// mice => mouse

module.exports = {
    Comment,
    schemas,
};
