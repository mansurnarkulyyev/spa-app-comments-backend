const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseSchemaError} = require("../helpers");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    token:{//для логаута
        type:String,
        default:""
    },
    avatarURL: {
      type: String,
    //   require: true,
    },
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseSchemaError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const schemas = {
    registerSchema,
    loginSchema,
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
}