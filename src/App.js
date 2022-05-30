import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoApp from "./Pages/TodoApp";
import Update from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoApp />}></Route>
          <Route path="update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
