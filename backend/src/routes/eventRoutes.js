const express = require("express");

const {
  createEvent,
  getSessions,
  getSessionEvents,
  getHeatmapData,
  getStats,
  getPages
} = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/pages", getPages);
router.get("/stats", getStats);
router.get("/sessions", getSessions);
router.get(
  "/sessions/:sessionId",
  getSessionEvents
);
router.get(
  "/heatmap",
  getHeatmapData
);
module.exports = router;