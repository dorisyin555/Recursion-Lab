function setup() {
  createCanvas(400, 400)
  noLoop() // Ensures the draw function runs only once
}

function draw() {
  background(220)
  drawCircles(0, 0, 100, 4) // Start drawing with radius 100 and depth 4
}

// Function to draw recursively drawn circles
function drawCircles(x, y, radius, depth) {
    // Base case: stop recursion when depth is zero
    if (depth === 0) {
        return
    }

    // Draw the current circle
    noFill()
    stroke(0, 0, 255)
    ellipse(x, y, radius * 2, radius * 2)

    // Recursive calls for smaller circles along axes
    const newRadius = radius * 0.5
    drawCircles(x + radius, y, newRadius, depth - 1) // Right
    drawCircles(x - radius, y, newRadius, depth - 1) // Left
    drawCircles(x, y + radius, newRadius, depth - 1) // Down
    drawCircles(x, y - radius, newRadius, depth - 1) // Up
}

