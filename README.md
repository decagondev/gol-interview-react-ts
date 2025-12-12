# Conway's Game of Life - TypeScript React Interview Project

## Overview

This is a coding challenge to implement **Conway's Game of Life**, a classic cellular automaton simulation, using React and TypeScript. The project uses Vite for development and Tailwind CSS for styling.

## What is Conway's Game of Life?

Conway's Game of Life is a zero-player game that simulates the evolution of cells on a grid based on simple rules. Each cell can be either alive or dead, and the state of each cell in the next generation depends on the number of living neighbors it has.

### Rules

1. **Survival**: A live cell with 2 or 3 live neighbors survives to the next generation.
2. **Birth**: A dead cell with exactly 3 live neighbors becomes alive in the next generation.
3. **Death**: All other cells die or stay dead:
   - A live cell with fewer than 2 neighbors dies (underpopulation)
   - A live cell with more than 3 neighbors dies (overpopulation)

## Project Structure

```
gol-interview-ts/
├── src/
│   ├── components/
│   │   └── Gol.tsx          # Main component (YOUR TASK: implement the TODOs)
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Your Task

The starter code in `src/components/Gol.tsx` contains a React component with several TODO comments. Your task is to implement the following functions:

### 1. `initGrid()`
Initialize a 2D array of size 30×40 (ROWS × COLS) with all cells set to `false` (dead).

### 2. `countNeighbors(currentGrid, row, col)`
Count the number of live neighbors for a cell at position (row, col). Check all 8 surrounding cells (including diagonals) and ensure you handle array bounds correctly.

### 3. `nextGeneration()`
Calculate the next generation of cells based on Conway's rules:
- Live cell with 2-3 neighbors: survives
- Dead cell with exactly 3 neighbors: becomes alive
- All other cells: die or stay dead

**Important**: Create a new grid array; don't modify the current grid directly.

### 4. `toggleCell(row, col)`
Toggle a cell's state (alive ↔ dead) when clicked. This should only work when the simulation is not running.

### 5. `start()`
Start the simulation by:
- Setting `running` to `true`
- Using `setInterval` to call `nextGeneration` at the current speed interval
- Storing the interval ID in `intervalRef.current`

### 6. `stop()`
Stop the simulation by:
- Setting `running` to `false`
- Clearing the interval using `clearInterval`

### 7. `clear()`
Reset the grid to all dead cells and set generation to 0. Should only work when not running.

### 8. `randomize()`
Generate a random pattern by setting each cell to alive with approximately 30% probability. Reset generation to 0. Should only work when not running.

### 9. `updateSpeed(value)`
Update the simulation speed. If the simulation is currently running, restart the interval with the new speed.

## Features to Implement

The UI is already provided with the following features:

- **Start/Stop buttons**: Control the simulation
- **Clear button**: Reset the grid
- **Random button**: Generate a random pattern
- **Speed slider**: Adjust simulation speed (50ms - 1000ms)
- **Generation counter**: Display the current generation number
- **Interactive grid**: Click cells to toggle them (when not running)

## Technical Requirements

- Use React hooks (`useState`, `useEffect`, `useCallback`, `useRef`)
- Follow TypeScript best practices
- Ensure proper cleanup of intervals
- Handle edge cases (array bounds, running state)
- Maintain immutability when updating state

## Grid Dimensions

- **Rows**: 30
- **Columns**: 40
- Each cell is 15px × 15px

## Tips

1. **Immutability**: Always create new arrays/objects when updating state. Don't mutate existing state directly.

2. **Boundary Checking**: When counting neighbors, make sure to check that row and column indices are within bounds (0 to ROWS-1, 0 to COLS-1).

3. **Interval Management**: Properly clean up intervals to prevent memory leaks. The component already has cleanup logic in `useEffect`, but make sure your `start()` and `stop()` functions work correctly with it.

4. **State Updates**: Use functional updates (`setGrid((currentGrid) => ...)`) when the new state depends on the previous state, especially in `nextGeneration()`.

5. **Performance**: The `useCallback` hooks are already set up. Make sure your dependencies are correct to avoid unnecessary re-renders.

## Testing Your Implementation

1. **Initialization**: The grid should start empty (all white cells) when the page loads.

2. **Cell Toggling**: Click cells to toggle them on/off. They should turn indigo when alive.

3. **Random Pattern**: Click "Random" to generate a random pattern. Verify cells are randomly distributed.

4. **Simulation**: Click "Start" and watch the cells evolve according to Conway's rules.

5. **Speed Control**: Adjust the speed slider while the simulation is running to verify it updates correctly.

6. **Clear**: Click "Clear" to reset the grid. The generation counter should reset to 0.

## Common Patterns to Test

Once implemented, try these classic patterns:

- **Still Life**: Blocks, beehives (should remain stable)
- **Oscillators**: Blinkers, toads (should repeat every 2-3 generations)
- **Spaceships**: Gliders (should move across the grid)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Good Luck!

Take your time, read the code comments carefully, and implement each function step by step. The component structure and UI are already in place - you just need to fill in the logic!
