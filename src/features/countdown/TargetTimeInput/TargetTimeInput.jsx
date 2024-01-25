import { useDispatch } from "react-redux";
import { setTargetTime } from "../countdownSlice";

function TargetTimeInput() {
  const dispatch = useDispatch();

  function handleTargetTime(e) {
    dispatch(setTargetTime(Date.parse(e.target.value)));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor='time'
      >
        Enter time
      </label>
      <input
        type="datetime-local"
        onChange={(e) => handleTargetTime(e)}
        id="time"
      />
    </form>
  )
}

export default TargetTimeInput;