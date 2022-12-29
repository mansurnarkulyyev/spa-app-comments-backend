const {Schema, model} = require("mongoose");
const Joi = require("joi");
// const moment = require("moment");

const {handleMongooseSchemaError} = require("../helpers");

// const data = moment().format("DD-MM-YYYY_hh:mm:ss")

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
    user: {
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
    favorite: {
        type: Boolean,
        default: false,
    },
    video: {
       type: String,
    },
    like: {
        type: Array,
        default:0,
    },
    disLike: {
        type: Array,
        default:0,
    },
     comments: [
            {
                user:{
                    type:Schema.Types.ObjectId,
                },
                userName: {
                    type: String,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
                like: {
                     type: Array,
                },
                 disLike: {
                    type: Array,
                },
            }
     ],
     cover: {
      type: String,
      required: true,
    },
    // genre: {
    //     type: String,
    //     enum: genres,
    // },
    // isbn: {
    //     type: String,
    //     match: isbnRegexp,
    //     required: true,
    //     unique: true,//если что то отправим уникальное 
    // },
   
}, {versionKey: false, timestamps: true, });

commentSchema.post("save", handleMongooseSchemaError);

const addSchema = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean(),
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

const Post= model("post", commentSchema);
// categories => category
// mice => mouse

module.exports = {
    Post,
    schemas,
};
