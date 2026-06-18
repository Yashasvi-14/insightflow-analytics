const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },

    eventType: {
      type: String,
      required: true,
      enum: ["page_view", "click"],
    },

    pageUrl: {
      type: String,
      required: true,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },

    clickData: {
      x: Number,
      y: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);