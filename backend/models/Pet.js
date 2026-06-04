const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    petType: {
      type: String,
      default: "Cat",
    },

    hunger: {
      type: Number,
      default: 70,
    },

    happiness: {
      type: Number,
      default: 70,
    },

    energy: {
      type: Number,
      default: 70,
    },

    level: {
      type: Number,
      default: 1,
    },

    coins: {
      type: Number,
      default: 0,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },

    xp: {
      type: Number,
      default: 0,
    },

    inventory: {
        food: {
          type: Number,
          default: 0,
        },

        toys: {
          type: Number,
          default: 0,
        },
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", petSchema);