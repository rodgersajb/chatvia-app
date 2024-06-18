import { CiSearch } from "react-icons/ci";

export default async function Chats() {
  return (
    <main className="min-h-screen col-span-5 w-full bg-customLightGrey justify-between items">
      <div className=" flex flex-col w-full gap-2 items-start  mx-auto">
        <h1 className="w-4/5 mx-auto">Chats</h1>
        <form
          className="flex w-4/5 mx-auto justify-center items-center gap-2 bg-customGrey px-2 rounded-lg"
          action=""
        >
          <CiSearch className="" />
          <input
            type="text"
            className="appearance-none bg-customGrey rounded-md focus:outline-none focus:border-customGrey"
            placeholder="Search messages or users"
          />
          
        </form>
      </div>
    </main>
  );
}
