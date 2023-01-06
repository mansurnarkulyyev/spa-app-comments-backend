const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseSchemaError } = require("../helpers");

const commentSchema = new Schema(
  {
    user: {
      type: String,
        required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    owner: {
      //владелец комментарии который он добавил (автор)
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },

        // userName: {
        //     type: String,
        //     required: true,
        // },
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
      },
    ],
    cover: {
      type: String,
      required: true,
    },
    // genre: {
    //     type: String,
    //     enum: genres,
    // },
  },
  { versionKey: false, timestamps: true }
);

commentSchema.post("save", handleMongooseSchemaError);

const addSchema = Joi.object({
  user: Joi.string().required(),
  tags: Joi.array(),
  text: Joi.string().required(),
  //  name: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Post = model("post", commentSchema);
// categories => category
// mice => mouse

module.exports = {
  Post,
  schemas,
};
