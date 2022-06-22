import { Route, Routes } from "react-router";
import { Miniapps } from "./pages/Miniapps";
import { NavBar } from "./pages/NavBar";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Miniapps />} />
        <Route path="/todoapp" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
