import { decrement, increment } from "@/store/slices/counterSlice";
import { RootState } from "@/store/store";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

const SamplePage: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      The value of count is {count}.

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div >
  );
}

export default SamplePage;
