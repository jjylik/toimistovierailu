// fork from http://prgreen.github.io/blog/2013/09/30/the-bouncing-dvd-logo-explained/

//edit these to change the screensaver size
const iconWidth = 90
const iconHeight = 60
const canwasWidth = 400
const canvasHeight = 300

// main loop, vx, vy are velocities, x, y are positions
const animate = (x, y, vx, vy) => () => {
  const reqAnimFrame = window.requestAnimationFrame || window.msRequestAnimationFrame
  const animationSpeed = 3 // try changing this
  for (let i = 0; i < animationSpeed; i++) {
    x += vx
    y += vy
    if (x + iconWidth === canwasWidth) vx = -vx
    if (y + iconHeight === canvasHeight) vy = -vy
    if (x === 0) vx = -vx
    if (y === 0) vy = -vy
  }
  draw(x, y)
  reqAnimFrame(animate(x, y, vx, vy)) // renders a new frame
}

function draw (x, y) {
  const canvas = document.getElementById('screensaver')
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canwasWidth, canvasHeight)
  context.fillStyle = '#000000'
  context.fillRect(0, 0, canwasWidth, canvasHeight)
  context.fillStyle = '#e73b2b'
  context.fillRect(x, y, iconWidth, iconHeight)
}

const screensaverContext = document.getElementById('screensaver').getContext('2d')
screensaverContext.canvas.width = canwasWidth
screensaverContext.canvas.height = canvasHeight

//initial position
const initialXPosition = 0
const initialYPosition = 0
const initialXVelocity = 1
const initialYVelocity = 1
// start main loop
animate(initialXPosition, initialYPosition, initialXVelocity, initialYVelocity)()
