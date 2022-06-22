import { Counter } from "./components/Counter";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";

function App() {
  return (
    <>
     <h1 className="mt-10">React + typescript</h1>
     <hr />
     <h2>UseState</h2>
     <Counter />
     <User />
     <hr />
    <h2>useEffect - useRef</h2>
    <TimerParent />
    </>
  );
}

export default App;
