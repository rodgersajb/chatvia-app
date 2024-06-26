// "use server";

// import { revalidatePath } from "next/cache";
// import User from "@/models/user1";
// import "../src/app/utils/mongoose";

// export const addUser = async (formData) => {
 
//     const name = formData.get("name")
//     const email = formData.get("email")
//     const file  = formData.get("file")
//   console.log(name, email, file);

//   await User.create({
//     name: name,
//     email: email,
//     file: file,
//   });

//   revalidatePath("/users");
// };

// export const getUser = async (formData) => {
//   const { name, email, file } = Object.fromEntries(formData.entries());

//   try {
//     await User.findOne({
//       name: name,
//     });
//   } catch (error) {}
// };
