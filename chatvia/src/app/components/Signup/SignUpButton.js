import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-black w-60 text-white rounded-md">
      {pending ? "Adding User...." : " Add User"}
    </button>
  );
}
