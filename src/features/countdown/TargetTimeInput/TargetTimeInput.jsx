import "./TargetTimeInput.css";
import { useDispatch } from "react-redux";
import { setTargetTime } from "../countdownSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { msToHumanDate } from "../../../utils/functions";

function TargetTimeInput() {
  const dispatch = useDispatch();

  const defaultTime = useSelector(state => state.countdown?.targetTime);

  const [inputTime, setInputTime] = useState(msToHumanDate(defaultTime));

  function handleInputTime(e) {
    setInputTime(e.target.value);
    dispatch(setTargetTime(Date.parse(e.target.value)));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor='time'
      >
        Enter time:
      </label>
      <input
        type="datetime-local"
        onChange={(e) => handleInputTime(e)}
        id="time"
        value={inputTime}
        autoFocus
      />
    </form>
  )
}

export default TargetTimeInput;