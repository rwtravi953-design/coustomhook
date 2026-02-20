import useToggle from "./useToggle";
import "./App.css";

function App() {
  const { toggle, handleToggle } = useToggle(false);

  return (
    <>
      <button className="btn" onClick={handleToggle}>Popup</button>
      <br/>
      {toggle && <h2>This is Popup</h2>}
    </>
  );
}

export default App;