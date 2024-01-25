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
  let seconds = Math.trunc(ms / 1000);
  let extraMs = addZeroIfUnderHundred(Math.trunc(ms % 1000))
  let minutes = Math.trunc(seconds / 60);
  let extraSeconds = addZeroIfUnderTen(Math.trunc(seconds % 60));
  let hours = addZeroIfUnderTen(Math.trunc(minutes / 60));
  let extraMinutes = addZeroIfUnderTen(Math.trunc(minutes % 60));
  return [hours, extraMinutes, extraSeconds, extraMs];
}

export function enableIfSame(value, target){
  if(value === target){
    return 'enabled';
  } else {
    return 'disabled';
  }
}