import { revalidatePath } from "next/cache";
import User from "../models/user";
// import SignUpForm from "../components/Signup/SignUpForm";
import "../db/mongoose";
import { redirect } from 'next/navigation'

export default async function SignUp() {
  // const users = await User.find();

  const handleSubmit = async (formData) => {
    "use server";
    const user = await User.find();
    console.log(user);

    const { name, age } = Object.fromEntries(formData.entries());
    console.log(name, "name", age)
    
    try {
       // Create a new user instance
       const newUser = new User({
         name: name,
         age: age,
       });

       
       // Save the user to the database
       const savedUser = await newUser.save();
       console.log("User saved:", savedUser);
    } catch (error) {
        console.error("Error saving user:", error);
    }
    
    revalidatePath("/users");
    redirect('/')
  };

  return (
    <main>
      <h1>Sign Up Page</h1>
      <form action={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age if you want"
        />

        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}
