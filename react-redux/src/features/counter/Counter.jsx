import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount, decrement, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [amountOfCount, setAmountOfCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          onChange={(e) => setAmountOfCount(Number(e.target.value))}
          type="number"
          name="inp-ba"
          id="inp-ba"
        />
        <button onClick={() => dispatch(incrementByAmount(amountOfCount))}>
          add by amount
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
