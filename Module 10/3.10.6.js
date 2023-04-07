function getLeftTop(eventX, eventY, rect, size) {
  let x = eventX;
  let y = eventY;
  if (eventY <= rect.top){
      y = rect.top + 1;
  }
  else if (eventY >= rect.bottom - size){
      y = rect.bottom - size - 1;
  }
    
  if (eventX <= rect.left){
      x = rect.left + 1;
  }
  else if (eventX >= rect.right - size){
      x = rect.right - size - 1;
  }
    
  return [x, y];
}
