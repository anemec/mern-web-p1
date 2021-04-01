import mongoose from "mongoose";

const boxSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [],
  category: String,
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Box = mongoose.model("Box", boxSchema);

export default Box;
