const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Get current mouse X and Y positions
function getMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var isDrawing = false

function start() {
  isDrawing = true
  console.log('Drawing :', isDrawing)
}

function draw(evt) {
  if (isDrawing) {
    var position = getMousePos(evt);
    var interval = setInterval(function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    // Pick a random color 
    const colors = ['red', 'purple', 'blue', 'yellow', 'green'];
    let random = Math.floor(Math.random() * colors.length);
    let color = colors[random]
    
    // Draw circle
    c.beginPath();
    c.arc(position.x, position.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
  }, 60)
  setTimeout(function() {
    clearInterval(interval);
  }, 80)
  }
}

// Stop drawing if mouse left the screen or click is released
function stop() {
  isDrawing = false
  console.log('Drawing:', isDrawing)
}

// Call this function whenever mouse is moving
function moveMouse(evt) {
  let pos = getMousePos(canvas, evt);
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  // Pick a random color 
  const colors = ['red', 'purple', 'blue', 'yellow', 'green'];
  let random = Math.floor(Math.random() * colors.length);
  let color = colors[random]
  
  // Draw circle
  c.beginPath();
  c.arc(pos.x, pos.y, 20, 0, Math.PI * 2, false);
  c.strokeStyle = color;
  c.stroke();  
}

// // Create circles with random position and color
// for (let i = 0; i < 50; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   // Pick a random color 
//   const colors = ['red', 'purple', 'blue', 'yellow', 'green'];
//   let random = Math.floor(Math.random() * colors.length);
//   let color = colors[random]
//   console.log(color)
  
//   // Draw circle
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color;
//   c.stroke();
// }