var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 定义用户数据模型
var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createTime: {
        type: Date,
        default: Date.now
    }
});

exports.User = mongoose.model('User', userSchema);

// 定义笔记数据模型
var noteSchema = new Schema({
    title: String,
    author: String,
    tag: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})

exports.Note = mongoose.model("Note", noteSchema);