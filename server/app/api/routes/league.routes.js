const express = require("express");
const router = express.Router();

const { createLeague, getAllLeagues } = require("../controllers/league.controllers");

router.post("/create", createLeague);
router.get("/", getAllLeagues);

module.exports = router;