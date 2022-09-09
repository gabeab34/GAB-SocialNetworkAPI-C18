import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {type: String,
               unique: true,
               required: true,
               trim: true
              },
    email: {type: String,
            unique: true,
            required: true,
            },
    thoughts: [{type: Schema.Types.ObjectId,
                ref: "thought"}],
    friends: [{type: Schema.Types.ObjectId,
               ref: "user"}]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const User = model('user', userSchema);
export default User;