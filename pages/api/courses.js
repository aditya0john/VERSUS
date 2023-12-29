import { mongooseConnect } from "@/lib/mongoose";
import { Course } from "@/models/Course";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Course.findOne({ _id: req.query.id }));
    } else {
      res.json(await Course.find());
    }
  }
}
