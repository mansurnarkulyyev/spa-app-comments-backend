const {Schema, model} = require("mongoose");
const Joi = require("joi");
// const moment = require("moment");

const {handleMongooseSchemaError} = require("../helpers");

// const data = moment().format("DD-MM-YYYY_hh:mm:ss")

// const genres = ["fantastic", "love"];


const commentSchema = new Schema({
    user: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
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
   
}, {versionKey: false, timestamps: true, });

commentSchema.post("save", handleMongooseSchemaError);

const addSchema = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean(),
     video:Joi.string(),
     link:Joi.string(),
    // genre: Joi.string().valueOf(genres).required(),
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
