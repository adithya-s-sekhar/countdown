import { useState } from 'react'
import './App.css'

function App() {
  const [currDate, setCurrDate] = useState(Date.now());
  const [dateTime, setDateTime] = useState(Date.parse('2024-01-25T15:00'));

  function handleTime(e){
    setDateTime(Date.parse(e.target.value))
  }

  setInterval(() => {
    setCurrDate(Date.now());
  }, 1000);

  function addZeroIfUnderTen(value){
    if(value<10){
      return '0'+value;
    } else{
      return value;
    }
  }

  function addZeroIfUnderHundred(value){
    if(value<100){
      return '0'+value;
    } else if(value<10){
      return '00'+value;
    } else{
      return value;
    }
  }

  function formatMilliseconds(milliseconds){
    let seconds = Math.trunc(milliseconds/1000);
    // let extraMilliseconds = addZeroIfUnderHundred(Math.trunc(milliseconds%1000));
    let minutes = Math.trunc(seconds/60);
    let extraSeconds = addZeroIfUnderTen(Math.trunc(seconds%60));
    let hours = addZeroIfUnderTen(Math.trunc(minutes/60));
    let extraMinutes = addZeroIfUnderTen(Math.trunc(minutes%60));
    // return([hours,extraMinutes,extraSeconds,extraMilliseconds]);
    return([hours,extraMinutes,extraSeconds]);
  }

  let milliseconds = dateTime - currDate;

  let display = formatMilliseconds(milliseconds);

  document.title = `${display[0]}:${display[1]}:${display[2]}`;

  return (
    <div className="app">
      <div className="display">
        {display.map((value,index) => <div key={index}>{value}</div>)}
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
