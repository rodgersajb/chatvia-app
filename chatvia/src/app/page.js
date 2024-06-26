import Sidebar from "@/app/components/Sidebar";
import Chats from "./components/Chats/Chats";
import Conversations from "@/app/components/Conversations";

export default function Home() {
  return (
    <main className="grid grid-cols-20 min-h-screen w-100%">
      <Sidebar />
      <Chats />
      <Conversations />

    </main>
  );
}
