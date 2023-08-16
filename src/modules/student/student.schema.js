const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    skills: [
        {
            _id: false,
            name: { type: String, required: true },
            rate: { type: Number, required: true }
        }
    ]
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = { Student };