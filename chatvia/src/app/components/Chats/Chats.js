import Form from "../Form";
import '../../db/mongoose'
import User from "@/app/models/user";




export default async function Chats() {
  const users = await User.find();

  console.log(users);

  return (
    <main className="min-h-screen col-span-5 w-full bg-customLightGrey justify-between items">
      <div className=" flex flex-col w-full gap-2 items-start  mx-auto">
        <h1 className="w-4/5 mx-auto">Chats</h1>
        <Form />
        <ul className="w-100">
          {users?.map((user) => {
            console.log(user, "her");
            return (
              <li className="text-black" key={user._id}>
                <p className="text-black">
                  {user.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
