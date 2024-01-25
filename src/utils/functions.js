function addZeroIfUnderTen(value) {
  if (value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}

function addZeroIfUnderHundred(value) {
  if (value < 10) {
    return '00' + value;
  } else if (value < 100) {
    return '0' + value;
  } else {
    return value;
  }
}

export function formatMilliseconds(ms) {
  if (ms < 0) {
    return [
      {'value': '00', 'label': 'Hours'}, 
      {'value': '00', 'label': 'Minutes'}, 
      {'value': '00', 'label': 'Seconds'}, 
      {'value': '000', 'label': 'Milliseconds'}
    ];
  }

  let seconds = Math.trunc(ms / 1000);
  let extraMs = addZeroIfUnderHundred(Math.trunc(ms % 1000))
  let minutes = Math.trunc(seconds / 60);
  let extraSeconds = addZeroIfUnderTen(Math.trunc(seconds % 60));
  let hours = addZeroIfUnderTen(Math.trunc(minutes / 60));
  let extraMinutes = addZeroIfUnderTen(Math.trunc(minutes % 60));
  return [
    {'value': hours, 'label': 'Hours'}, 
    {'value': extraMinutes, 'label': 'Minutes'}, 
    {'value': extraSeconds, 'label': 'Seconds'}, 
    {'value': extraMs, 'label': 'Milliseconds'}
  ];
}

export function enableIfSame(value, target){
  if(value === target){
    return 'enabled';
  } else {
    return 'disabled';
  }
}