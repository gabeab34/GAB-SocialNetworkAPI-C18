import mongoose from "mongoose";
const {Schema, model} = mongoose;

const thoughtSchema = new Schema({
    thoughtText: {type: String,
               required: true,
               maxLength: 280
              },
    createdAt: {type: Date,
                default: Date.now,
               },
    username: {type: String,
               required: true
              },
    reactions: [reactionSchema]           
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const Thought = model('thought', thoughtSchema);
export default Thought;