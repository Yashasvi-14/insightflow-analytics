const Event = require("../models/Event");

const createEvent = async (req, res) => {
  try {
    const {
      sessionId,
      eventType,
      pageUrl,
      timestamp,
      x,
      y,
    } = req.body;

    const event = await Event.create({
      sessionId,
      eventType,
      pageUrl,
      timestamp,
      clickData: {
        x,
        y,
      },
    });

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await Event.aggregate([
      {
        $group: {
          _id: "$sessionId",

          eventCount: {
            $sum: 1,
          },

          lastActivity: {
            $max: "$timestamp",
          },
        },
      },

      {
        $project: {
          _id: 0,
          sessionId: "$_id",
          eventCount: 1,
          lastActivity: 1,
        },
      },

      {
        $sort: {
          eventCount: -1,
        },
      },
    ]);

    res.json(sessions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getSessionEvents = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const events = await Event.find({
      sessionId,
    }).sort({
      timestamp: 1,
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getHeatmapData = async (req, res) => {
  try {
    const { pageUrl } = req.query;

    const events = await Event.find({
      eventType: "click",
      pageUrl,
    });

    const heatmapData = events.map((event) => ({
      x: event.clickData?.x,
      y: event.clickData?.y,
    }));

    res.json(heatmapData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getStats = async (req, res) => {
  try {
    const totalEvents =
      await Event.countDocuments();

    const totalClicks =
      await Event.countDocuments({
        eventType: "click",
      });

    const sessions =
      await Event.distinct("sessionId");

    res.json({
      totalSessions: sessions.length,
      totalEvents,
      totalClicks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPages = async (req, res) => {
  try {
    const pages = await Event.distinct(
      "pageUrl"
    );

    res.json(pages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createEvent,
  getSessions,
  getSessionEvents,
  getHeatmapData,
  getStats,
  getPages,
};