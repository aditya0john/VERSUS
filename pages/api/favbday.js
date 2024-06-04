import { mongooseConnect } from "@/lib/mongoose";
import { Bday } from "@/models/Bday";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Bday.findOne({ _id: req.query.id }));
    } else {
      res.json(await Bday.find());
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
    if (req.query?._id) {
      await Bday.deleteOne({ _id: req.query._id });
      console.log("DATA DELETED", res);
      res.json(true);
    }
  }
}
