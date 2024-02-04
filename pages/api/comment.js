import { createComment } from "@/src/lib/comments";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  if (!body.author || !body.authorEmail || !body.content || !body.postId) {
    return res.status(400).json({ message: "First name, email, and message fields are required!" });
  }

  try {
    const resJson = await createComment(body);

    if (resJson.errors?.length) {
      return res.status(500).json({ message: resJson.errors[0].message });
    } else if (resJson.data.createComment?.success === true) {
      return res.status(200).json({ message: "Your comment is awaiting approval" });
    }

    return res.status(500).json({ message: "Some error occurred" });
  } catch (error) {
    console.error("Error in handler:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
