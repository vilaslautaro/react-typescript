import { Counter } from "../components/Counter";
import CounterReducer from "../components/CounterReducer";
import { Form } from "../components/Form";
import { TimerParent } from "../components/TimerParent";
import { User } from "../components/User";

export const Miniapps = () => {
  return (
    <>
      <h1 className="mt-5">React + typescript</h1>
      <hr />
      <h2 className="mt-5">UseState</h2>
      <Counter />
      <User />
      <hr />
      <h2 className="mt-5">useEffect - useRef</h2>
      <TimerParent />
      <hr />
      <h3 className="mt-5">UseReducer</h3>
      <CounterReducer />
      <hr />
      <h3 className="mt-5">CustomHooks</h3>
      <Form />
      <br />
      <br />
      <br />
    </>
  );
};
