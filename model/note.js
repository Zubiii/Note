var mongoose = require('mongoose')
var Schema = mongoose.Schema
var NoteSchema = Schema(
    {
        title:  {type: String, required:true},
        body:   {type: String, required:true}
    },
    {
        timestamps:     true
    }
);
module.exports = mongoose.model("Note", NoteSchema);