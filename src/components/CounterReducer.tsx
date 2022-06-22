import { useReducer } from "react";

const initialState = {
  counter: 0,
};

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2 className="mt-5">Contador: {state.counter}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "reset", payload: 0 })}
      >
        Reset
      </button>
    </>
  );
}

export default CounterReducer;
