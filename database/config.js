const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);

    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error to connect with database");
  }
};

module.exports = {
  dbConnection,
};