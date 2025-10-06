import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <div>
      <button onClick={() => dispatch(setCount(99))}>Sıfırla</button>

      <br />
      <br />

      <button onClick={() => dispatch(decrease())}>Azalt</button>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increase())}>Arttır</button>
    </div>
  );
};

export default Counter;
