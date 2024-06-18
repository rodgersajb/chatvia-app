import Form from './Form';


export default async function Chats() {



  return (
    <main className="min-h-screen col-span-5 w-full bg-customLightGrey justify-between items">
      <div className=" flex flex-col w-full gap-2 items-start  mx-auto">
        <h1 className="w-4/5 mx-auto">Chats</h1>
        <Form />
      </div>
    </main>
  );
}
