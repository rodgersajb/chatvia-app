import Sidebar from "@/components/Sidebar";
import Chats from "@/components/Chats";
import Conversations from "@/components/Conversations";

export default function Home() {
  return (
    <main className="grid grid-cols-20 min-h-screen w-100%">
      <Sidebar />
      <Chats />
      <Conversations />

    </main>
  );
}
