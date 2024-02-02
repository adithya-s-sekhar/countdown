import { useDispatch } from "react-redux";
import { setMsUpdateSpeed } from "../countdownSlice";
import { enableIfSame } from "../../../utils/functions";
import "./SpeedControls.css";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";

function SpeedControls() {
  const msUpdateSpeed = useSelector(state => state.countdown?.msUpdateSpeed);
  const showMs = useSelector(state => state.countdown?.showMs);

  const dispatch = useDispatch();

  const msPeriods = [1, 10, 100, 1000];

  function handleMsUpdateSpeed(value) {
    dispatch(setMsUpdateSpeed(value));
  }

  return (
    <div
      className={`speed-controls ${enableIfSame(showMs, true)}`}
    >
      <h3>Millisecond update speed</h3>
      <div className="speed-buttons">
        {
          msPeriods.map((value, index) => (
            <Button
              key={index}
              className={`button ${enableIfSame(value, msUpdateSpeed)}`}
              onClick={() => handleMsUpdateSpeed(value)}
              label={`${value}ms`}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SpeedControls;