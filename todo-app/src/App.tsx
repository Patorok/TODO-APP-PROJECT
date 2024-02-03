// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import TodoList from "./views/todo-list/TodoList";
import './App.css';

function App() {
    // const [alertVisible, setAlertVisibility] = useState(false);
    // { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World!</Alert>}
    // <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

    return (
        <div className="container-sm pt-3 border border-primary rounded-3">
            <TodoList />
        </div>
    );
}

export default App;