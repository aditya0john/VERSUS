import { Schema, model, models } from "mongoose";

const BdaySchema = new Schema({
  Name: { type: String },
  Favourites: { type: Boolean },
  date: { type: Date },
});

export const Bday = models.Bday || model("Bday", BdaySchema);
