import { CiSearch } from "react-icons/ci";

export default function Form() {
  return (
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
  );
}
