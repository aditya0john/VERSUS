import { mongooseConnect } from "@/lib/mongoose";
import { Bday } from "@/models/Bday";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    try {
      if (req.query?.id) {
        const result = await Bday.findOne({ _id: req.query.id });
        if (!result) {
          res.status(404).json({ message: "Birthday not found" });
        } else {
          res.json(result);
        }
      } else {
        const results = await Bday.find();
        res.json(results);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  if (method === "POST") {
    const { Name, date, Favourites } = req.body;
    console.log("FAV BDAY REQUEST", req.body);
    const bdayDoc = await Bday.create({
      Name,

      Favourites,
      date,
    });
    console.log("DATA PUSHED", bdayDoc);
    res.json(bdayDoc);
  }

  if (method === "DELETE") {
    const { id } = req.query;
    if (id) {
      await Bday.deleteOne({ _id: id });
      console.log("DATA DELETED", res);
      res.json(true);
    }
  }
}
