const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseSchemaError} = require("../helpers");

const genres = ["fantastic", "love"];
const isbnRegexp = /^\d{3}-\d-\d{3}-\d{5}-\d$/

const bookSchema = new Schema({
     name: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genres,
        required: true,
    },
    isbn: {
        type: String,
        match: isbnRegexp,
        required: true,
        unique: true,
    },
    cover: {
      type: String,
      require: true,
    },
}, {versionKey: false, timestamps: true});

bookSchema.post("save", handleMongooseSchemaError);

const addSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean(),
    genre: Joi.string().valueOf(genres).required(),
    isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFovirteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    addSchema,
    updateFovirteSchema,
}

const Book = model("book", bookSchema);
// categories => category
// mice => mouse

module.exports = {
    Book,
    schemas,
};
