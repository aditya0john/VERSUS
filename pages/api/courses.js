import { supabase } from "../../lib/supabaseClient";

export default async function handle(req, res) {
  const { method } = req;

  try {
    if (method === "GET") {
      if (req.query?.id && req.query?.chapterId) {
        const { data, error } = await supabase
          .from("chapters")
          .select("*")
          .eq("id", chapterId)
          .eq("course_id", id)
          .single();

        if (error) throw error;
        return res.status(200).json(data);

        // // Find the specific chapter within the course
        // const chapter = course.chapters.find(
        //   (chapter) => chapter._id.toString() === req.query.chapterId
        // );

        // // Return only the filtered chapter object
        // res.json(chapter);
      } else if (req.query?.id) {
        const { data: course, error } = await supabase
          .from("courses")
          .select("*, chapters(*), tests(*, questions(*), problems(*))")
          .eq("id", id)
          .single();

        if (error) throw error;
        return res.status(200).json(course);
      } else {
        // Fetch all courses if no specific courseId is provided
        const { data, error } = await supabase.from("courses").select("*");
        if (error) throw error;
        return res.status(200).json(data);
      }
    }
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
}
