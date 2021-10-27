const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamsSchema = new Schema(
    {
        name: { type: String, require: true, unique: true }, 
        city: { type: String, require: true },
        stadium: { type: String, require: true },
        fundation: { type: Number, require: true }
    },
    { timestamps: true }
);

const teams = mongoose.model("teams", teamsSchema);
module.exports = teams;