
import React from "react";
import { useCounter } from "../context/CounterContext"; 

const Counter = () => {
  const { state, dispatch } = useCounter(); 

    const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

    const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Counter: {state.count}</h1> 
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button> 
    </div>
  );
};

export default Counter;
