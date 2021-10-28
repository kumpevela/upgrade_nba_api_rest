const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    teams: [{ type: Schema.Types.ObjectId, ref: "teams", required: true }]
});

const League = mongoose.model("league", LeagueSchema);
module.exports = League;