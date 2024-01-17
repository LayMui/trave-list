
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chargers", quantity: 1, packed: true },
];


export default function App()
{
  return ( <div className="app">
    <Logo />
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
  );
}

function Logo() {
  return <h1>🐐Far Away🎋</h1>
}

function Form() {
  return (
    <>
      <div className="add-form"></div>
      <h3>What do you need for your 😍 trip?</h3>
    </>
  );
}

function PackingList() {
  return
  <div className="list"> 
    <ul className="list">
      {initialItems.map(item => <Item item={item}/>)}
    </ul>
  </div>
}

function Item({item}) {
  return (
    <li>
      <span> 
        {item.quantity} {item.description}
        </span>
      <button>X&times;</button>
    </li>
  )
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

