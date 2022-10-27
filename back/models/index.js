import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    ID_SENASA: {
      type: String,
      required: true,
      maxLength: 16,
      unique: true,
      uppercase: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["novillo", "toro", "vaquillona"],
    },
    animal_weight: {
      type: Number,
    },
    potrero_name: {
      type: String,
      required: true,
      maxLength: 200,
    },
    dispositive_type: {
      type: String,
      enum: ["collar", "caravana"],
    },
    dispositive_number: {
      type: String,
      maxLength: 8,
    },
    creation_date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    modification_date: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Animal", animalSchema);
