const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  nameProject: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    //this field is to join the model Users with the ObjectId that the way to attached the id
    ref: "User",
    trim: true,
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
