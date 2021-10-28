const League = require("../models/league.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createLeague = async (req, res, next) => {
    try {
        const newLeague = new League();
        newLeague.name = req.body.name;
        newLeague.description = req.body.description;
        newLeague.teams = req.body.teams;
        const leagueDb = await newLeague.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { leagueDbb: leagueDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllLeagues = async (req, res, next) => {
    try {
        const allLeagues = await League.find().populate("teams");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { leagues: allLeagues }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createLeague, getAllLeagues }