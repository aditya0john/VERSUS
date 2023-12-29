import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  chapters: [
    {
      title: { type: String, required: true },
      content: String,
    },
  ],
 
});

export const Course = models.Course || model("Course", CourseSchema);
