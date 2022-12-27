const {Schema, model} = require("mongoose");
const Joi = require("joi");
// const moment = require("moment");

const {handleMongooseSchemaError} = require("../helpers");

// const data = moment().format("DD-MM-YYYY_hh:mm:ss")

// const genres = ["fantastic", "love"];

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
    // cover: {
    //   type: String,
    //   require: true,
    // },
}, {versionKey: false, timestamps: true, });

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
