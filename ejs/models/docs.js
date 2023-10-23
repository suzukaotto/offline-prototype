const mongoose = require('mongoose');
const docSchema = new mongoose.Schema({
    Subject: {
        type: 'String',
        required: true,
    },
    LastStatus: {
        type: 'String',
        require: true,
    },
    WriteUserName: {
        type: 'String',
        require: true,
    },
    BodyDesc: {
        type: 'String',
        require: true,
    },
    Thumbnail: {
        type: 'String',
        require: true,
    },
    CntFiles: {
      type: 'Number',
      default: 0,        
    },
    RegDate: {
        type: 'Date',
        require: false,
        default: Date.now()
    }
})
module.exports = mongoose.model("Doc", docSchema);
