// import dbConnect from "@/db/connect";
// import User from "@/app/models/test";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ error: "Name and email are required" });
//   }

//   try {
//     await dbConnect();
//     const user = await User.create({ name, email });
//     res.status(201).json({ user });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
