import mongoose from "mongoose";

const connectToDb = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectToDb;
