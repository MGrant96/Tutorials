import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Field is required"] },
  gender: { type: String, required: [true, "Field is required"] },
  type: { type: String, required: [true, "Field is required"] },
  height: { type: Number, required: [true, "Field is required"] },
  weight: { type: Number, required: [true, "Field is required"] },
  photo: { type: String, required: [true, "Field is required"] },
});