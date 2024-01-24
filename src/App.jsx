import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [currDate, setCurrDate] = useState(Date.now());
  const [dateTime, setDateTime] = useState(Date.parse('2024-01-25T15:00'));
  const [msUpdateSpeed, setMsUpdateSpeed] = useState(1000);

  const [showMs, setShowMs] = useState(false);

  function handleTime(e){
    setDateTime(Date.parse(e.target.value))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(Date.now());
    }, msUpdateSpeed);
    return () => clearInterval(interval);
  },[msUpdateSpeed])

  function addZeroIfUnderTen(value){
    if(value<10){
      return '0'+value;
    } else{
      return value;
    }
  }

  function addZeroIfUnderHundred(value){
    if(value<10){
      return '00'+value;
    } else if(value<100){
      return '0'+value;
    } else{
      return value;
    }
  }

  function toggleShowMs(){
    setShowMs(!showMs);
  }

  function setUpdateSpeed(value){
    setMsUpdateSpeed(value);
  }

  function formatMilliseconds(milliseconds){
    let seconds = Math.trunc(milliseconds/1000);
    let extraMilliseconds;
    if (showMs) {extraMilliseconds = addZeroIfUnderHundred(Math.trunc(milliseconds%1000))}
    let minutes = Math.trunc(seconds/60);
    let extraSeconds = addZeroIfUnderTen(Math.trunc(seconds%60));
    let hours = addZeroIfUnderTen(Math.trunc(minutes/60));
    let extraMinutes = addZeroIfUnderTen(Math.trunc(minutes%60));
    if (showMs) {return([hours,extraMinutes,extraSeconds,extraMilliseconds])}
    else {
      return([hours,extraMinutes,extraSeconds])
    }

  }

  let milliseconds = dateTime - currDate;

  let display = formatMilliseconds(milliseconds);

  const titles = ['Hours', 'Minutes', 'Seconds', 'Milliseconds']

  document.title = `${display[0]}:${display[1]}:${display[2]}`;

  return (
    <div className="app">
      <div className="display">
        {display.map((value,index) => <div key={index} className='display-item'><div className='display-value'>{value}</div><div className='display-title'>{titles[index]}</div></div>)}
      </div>
      <div>
        <button className={`button ${showMs ? 'enabled' : 'disabled'}`} onClick={toggleShowMs}>{showMs ? 'Hide' : 'Show'} ms</button>
      </div>
      <div className='speed-controls' style={{visibility: `${showMs ? 'visible' : 'hidden'}`, height: `${showMs ? 'auto' : '0'}`}}>
        <h2>Millisecond update speed</h2>
        <div className="speed-buttons">
          <button className={`button ${msUpdateSpeed === 1 ? 'enabled' : 'disabled'}`} onClick={() => setUpdateSpeed(1)}>1ms</button>
          <button className={`button ${msUpdateSpeed === 10 ? 'enabled' : 'disabled'}`} onClick={() => setUpdateSpeed(10)}>10ms</button>
          <button className={`button ${msUpdateSpeed === 100 ? 'enabled' : 'disabled'}`} onClick={() => setUpdateSpeed(100)}>100ms</button>
          <button className={`button ${msUpdateSpeed === 1000 ? 'enabled' : 'disabled'}`} onClick={() => setUpdateSpeed(1000)}>1000ms</button>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='time'>Enter time</label>
        <input
          type="datetime-local"
          onChange={(e) => handleTime(e)}
          id="time"
        />
      </form>
    </div>
  )
}

export default App
