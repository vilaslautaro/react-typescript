import { TodoState } from "../interfaces";
import { TodoContext } from "./TodoContext";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "The 7 dragon spheres",
      completed: false,
    },
    {
      id: "2",
      desc: "Goku",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({type: 'toggleTodo', payload: {id}})
  }

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
