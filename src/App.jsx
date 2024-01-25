import './App.css';
import Display from './features/countdown/Display/Display';
import SpeedControls from './features/countdown/SpeedControls/SpeedControls';
import TargetTimeInput from './features/countdown/TargetTimeInput/TargetTimeInput';

function App() {

  return (
    <div className="app">
      <Display />
      <SpeedControls />
      <TargetTimeInput />
    </div>
  )
}

export default App;
