// Memoization object for Fibonacci numbers
const fibCache = {}

function fibonacci(n) {
    // Base case: return Fibonacci number for n = 0 or n = 1
    if (n === 0) return 0
    if (n === 1) return 1
    // Check if already computed
    if (fibCache[n] !== undefined) {
        return fibCache[n]
    }
    // Recursive calculation with memoization
    fibCache[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return fibCache[n]
}

function setup() {
  createCanvas(400, 400)
  translate(width / 2, height / 2)
  noLoop() 
}

function draw() {
  background(220)
  drawCircles(0, 0, 100, 4)
}

function drawCircles(x, y, radius, depth) {
    if (depth === 0) {
        return
    }

    noFill()
    stroke(0, 0, 255)
    ellipse(x, y, radius * 2, radius * 2)

    const newRadius = radius * 0.5;
    drawCircles(x + radius, y, newRadius, depth - 1)
    drawCircles(x - radius, y, newRadius, depth - 1)
    drawCircles(x, y + radius, newRadius, depth - 1)
    drawCircles(x, y - radius, newRadius, depth - 1)
}

console.log("Fibonacci(10):", fibonacci(10))
