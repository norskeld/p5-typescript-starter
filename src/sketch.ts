import p5 from 'p5'

/**
 * @param {p5} p
 */
export const sketch = (p: p5) => {
  p.setup = () => {
    // Define your initial environment props & other stuff here
  }

  p.draw = () => {
    // Define render logic for your sketch here
  }

  p.keyPressed = () => {
    // Export sketch's canvas to file
    if (p.keyCode === 80) {
      p.saveCanvas('sketch', 'png')
    }
  }
}
