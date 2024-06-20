import Form from "./Form";


function Chats() {
 
  // const response = await fetch('http://localhost:3000/api/route')
  // const data = await response.json()
  // console.log(data)


  return (
    <main className="min-h-screen col-span-5 w-full bg-customLightGrey justify-between items">
      <div className=" flex flex-col w-full gap-2 items-start  mx-auto">
        <h1 className="w-4/5 mx-auto">Chats</h1>
        <Form />
        {/* <ul>
          {users.map((user, i) => {
            <li key={i}>
              <p>{user.name}</p>
            </li>
            
          })}
        </ul> */}
      </div>
    </main>
  );
}

export default Chats;