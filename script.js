// Create a single square div with specified size and color
function createSquareDiv(size, color) {
  const squareDiv = document.createElement("div");
  squareDiv.style.width = size + "px";
  squareDiv.style.height = size + "px";
  squareDiv.style.backgroundColor = color;
  squareDiv.classList.add("etch-square");

  squareDiv.addEventListener("mouseenter", () => {
    squareDiv.classList.add("etched");
  });
  return squareDiv;
}

// Create a grid of square divs within the container
function createGrid(gridSize) {
  const container = document.getElementById("etch-a-sketch");
  container.innerHTML = ""; // Clear previous grid
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  let containerSize = container.offsetWidth;

  const squareSize = containerSize / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const squareDiv = createSquareDiv(squareSize, "lightgrey");
    container.appendChild(squareDiv);
  }
}

// Initial grid creation
createGrid(16);

function getUserGridSize() {
  let gridSize;
  while (true) {
    gridSize = prompt("Enter grid size (number between 2 and 100):", "16");
    if (gridSize === null) {
      return null; // User cancelled
    }
    gridSize = parseInt(gridSize);
    if (gridSize >= 2 && gridSize <= 100) {
      return gridSize;
    }
  }
}

document.getElementById("new-grid-button").addEventListener("click", function () {
  let newGridSize = getUserGridSize();
  if (newGridSize !== null) {
    createGrid(newGridSize); // Only run if valid input and not cancelled
  }
});
