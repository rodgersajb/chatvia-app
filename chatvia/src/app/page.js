import Sidebar from "@/app/components/Sidebar";
import Chats from "@/app/components/Chats";
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
