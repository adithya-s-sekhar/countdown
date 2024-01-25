import { useSelector } from "react-redux";
import "./Display.css";
import { useEffect } from "react";
import { useState } from "react";
import { enableIfSame, formatMilliseconds } from "../../../utils/functions";
import Button from "../../../components/Button/Button";
import { setShowMs } from "../countdownSlice";
import { useDispatch } from "react-redux";

function Display(){
  const targetTime = useSelector(state => state.countdown?.targetTime);
  const msUpdateSpeed = useSelector(state => state.countdown?.msUpdateSpeed);
  const showMs = useSelector(state => state.countdown?.showMs);

  const [currentTime, setCurrentTime] = useState(Date.now());

  const dispatch = useDispatch();

  const titles = ['Hours', 'Minutes', 'Seconds', 'Milliseconds'];

  useEffect(() => {
    const interval = setInterval(
      () => { setCurrentTime(Date.now()); }, msUpdateSpeed
    );
    return () => clearInterval(interval);
  }, [msUpdateSpeed]);

  const formattedTime = formatMilliseconds(targetTime - currentTime);

  document.title = `${formattedTime[0]}:${formattedTime[1]}:${formattedTime[2]}`;

  return (
    <>
      <div className="display">
        {formattedTime.slice(0, (showMs ? 4 : 3)).map((value, index) => (
          <div key={index} className='display-item'>
            <div className='display-value'>{value}</div>
            <div className='display-title'>{titles[index]}</div>
          </div>
        ))}
      </div>
      <div>
        <Button
          className={`button ${enableIfSame(showMs, true)}`}
          onClick={() => dispatch(setShowMs(!showMs))}
          label={showMs ? 'Hide ms' : 'Show ms'}
        />
      </div>
    </>
  )
}

export default Display;