import { timeStamp } from "console";
import mongoose from "mongoose";

const chatModel = mongoose.Schema({
    chat: {type: String},
    isGroupChat: {
        type: Boolean, default: false
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
}, {
    timeStamp: true,
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatModel);

export default Chat;