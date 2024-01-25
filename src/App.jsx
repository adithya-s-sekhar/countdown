import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTargetTime, setMsUpdateSpeed } from './features/countdown/countdownSlice';
import { useSelector } from 'react-redux';
import { enableIfSame, formatMilliseconds } from './utils/functions';

function App() {
  const targetTime = useSelector(state => state.countdown?.targetTime);
  const msUpdateSpeed = useSelector(state => state.countdown?.msUpdateSpeed);

  const [currDate, setCurrDate] = useState(Date.now());
  const [showMs, setShowMs] = useState(false);

  const dispatch = useDispatch();

  const titles = ['Hours', 'Minutes', 'Seconds', 'Milliseconds'];

  function handleTargetTime(e) {
    dispatch(setTargetTime(Date.parse(e.target.value)));
  }

  function handleMsUpdateSpeed(value){
    dispatch(setMsUpdateSpeed(value));
  }

  function toggleShowMs() {
    setShowMs(!showMs);
  }

  useEffect(() => {
    const interval = setInterval(
      () => { setCurrDate(Date.now()); }, msUpdateSpeed
    );
    return () => clearInterval(interval);
  }, [msUpdateSpeed]);

  let difference = targetTime - currDate;

  let display = formatMilliseconds(difference);

  document.title = `${display[0]}:${display[1]}:${display[2]}`;

  return (
    <div className="app">
      <div className="display">
        {display.slice(0, (showMs ? 4 : 3)).map((value, index) => (
          <div key={index} className='display-item'>
            <div className='display-value'>{value}</div>
            <div className='display-title'>{titles[index]}</div>
          </div>
        ))}
      </div>
      <div>
        <button
          className={`button ${enableIfSame(showMs, true)}`} 
          onClick={toggleShowMs}
        >
          {showMs ? 'Hide' : 'Show'} ms
        </button>
      </div>
      <div
        className='speed-controls'
        style={{ 
          visibility: `${showMs ? 'visible' : 'hidden'}`, 
          height: `${showMs ? 'auto' : '0'}` 
        }}
      >
        <h2>Millisecond update speed</h2>
        <div className="speed-buttons">
          <button
            className={`button ${enableIfSame(1,msUpdateSpeed)}`}
            onClick={() => handleMsUpdateSpeed(1)}
          >
            1ms
          </button>
          <button
            className={`button ${enableIfSame(10,msUpdateSpeed)}`}
            onClick={() => handleMsUpdateSpeed(10)}
          >
            10ms
          </button>
          <button
            className={`button ${enableIfSame(100,msUpdateSpeed)}`}
            onClick={() => handleMsUpdateSpeed(100)}
          >
            100ms
          </button>
          <button
            className={`button ${enableIfSame(1000,msUpdateSpeed)}`}
            onClick={() => handleMsUpdateSpeed(1000)}
          >
            1000ms
          </button>
        </div>
      </div>
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
    </div>
  )
}

export default App
