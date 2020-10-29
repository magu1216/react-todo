import Todo from "./Todo";
import Button from "./Button";

function App() {
  return (
    <div className="App">
     <Todo title="Milk" />
     <Todo title="Coffee" isDone />
     <Button background="papayawhip">Works fine</Button>
    </div>
  );
}

export default App;