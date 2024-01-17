export default function App()
{
  return <div className="app">
    <Logo />
    <Form/>
    <PackingList/>
  </div>
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
  return <div className="list">
    LIST
  </div>
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

