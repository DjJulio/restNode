const { Schema, model } = require("mongoose");

const guestsSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  phone: {
    type: String,
  },
  tickets: {
    type: Number,
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
  },
  updatedDate: {
    type: Date,
  },
});

guestsSchema.methods.toJSON = function () {
  const { __v, ...guests } = this.toObject();
  return guests;
};

module.exports = model("Guests", guestsSchema);
