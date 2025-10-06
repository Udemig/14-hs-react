import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../../redux/slices/counterSlice";
import { Button, Stack } from "react-bootstrap";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <Stack direction="horizontal" gap={5} className="justify-content-center mt-5">
      <Button variant="secondary" onClick={() => dispatch(setCount(99))}>
        Sıfırla
      </Button>

      <Button variant="danger" onClick={() => dispatch(decrease())}>
        Azalt
      </Button>

      <h2>{count}</h2>

      <Button onClick={() => dispatch(increase())}>Arttır</Button>
    </Stack>
  );
};

export default Counter;
