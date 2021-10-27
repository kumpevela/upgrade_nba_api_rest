const express = require("express");
const router = express.Router();

const { createTeams, getAllTeams, getTeamsById } = require("../controllers/teams.controllers")

router.post("/create", createTeams);
router.get("/", getAllTeams);
router.get("/:teamsId", getTeamsById);

module.exports = router;