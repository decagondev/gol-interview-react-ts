import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Constants for grid dimensions
 */
const ROWS = 30;
const COLS = 40;

/**
 * Type definition for the grid state
 */
type Grid = boolean[][];

/**
 * Conway's Game of Life React Component
 * 
 * A cellular automaton simulation where cells live, die, or multiply
 * based on simple rules applied to each generation.
 */
export const Gol = () => {
  const [grid, setGrid] = useState<Grid>([]);
  const [running, setRunning] = useState<boolean>(false);
  const [generation, setGeneration] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(200);
  const intervalRef = useRef<number | null>(null);

  /**
   * TODO: Initialize the grid with all dead cells (false)
   * Create a 2D array of size ROWS x COLS
   */
  const initGrid = useCallback(() => {
    // Your code here
  }, []);

  /**
   * Initialize grid on component mount
   */
  useEffect(() => {
    initGrid();
  }, [initGrid]);

  /**
   * TODO: Count the number of live neighbors for a cell at (row, col)
   * Check all 8 surrounding cells (including diagonals)
   * Make sure to check array bounds
   * 
   * @param currentGrid - The current grid state
   * @param row - Row index of the cell
   * @param col - Column index of the cell
   * @returns Number of live neighbors
   */
  const countNeighbors = useCallback((currentGrid: Grid, row: number, col: number): number => {
    // Your code here
    return 0;
  }, []);

  /**
   * TODO: Calculate and render the next generation
   * Rules:
   * - Live cell with 2-3 neighbors: survives
   * - Dead cell with exactly 3 neighbors: becomes alive
   * - All other cells: die or stay dead
   * 
   * Important: Create a new grid, don't modify the current one directly
   */
  const nextGeneration = useCallback(() => {
    // Your code here
  }, []);

  /**
   * TODO: Toggle a cell's state when clicked (only when not running)
   * 
   * @param row - Row index of the cell
   * @param col - Column index of the cell
   */
  const toggleCell = useCallback(
    (row: number, col: number) => {
      // Your code here
    },
    [running]
  );

  /**
   * TODO: Start the simulation
   * Set running to true, disable/enable appropriate buttons
   * Use setInterval to call nextGeneration at the current speed
   */
  const start = useCallback(() => {
    // Your code here
  }, [running, nextGeneration, speed]);

  /**
   * TODO: Stop the simulation
   * Set running to false, enable/disable appropriate buttons
   * Clear the interval
   */
  const stop = useCallback(() => {
    // Your code here
  }, []);

  /**
   * TODO: Clear the grid (only when not running)
   * Reset all cells to dead and generation to 0
   */
  const clear = useCallback(() => {
    // Your code here
  }, [running, initGrid]);

  /**
   * TODO: Generate a random pattern (only when not running)
   * Set each cell to alive with ~30% probability
   * Reset generation to 0
   */
  const randomize = useCallback(() => {
    // Your code here
  }, [running]);

  /**
   * TODO: Update the speed and restart interval if running
   * 
   * @param value - New speed value in milliseconds
   */
  const updateSpeed = useCallback(
    (value: number) => {
      // Your code here
    },
    [running, stop, nextGeneration]
  );

  /**
   * Cleanup interval on unmount
   */
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  /**
   * Restart interval when speed changes while running
   */
  useEffect(() => {
    if (running) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(nextGeneration, speed);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [running, speed, nextGeneration]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="mb-5 text-center text-3xl font-bold text-gray-800">
          Conway's Game of Life
        </h1>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={start}
            disabled={running}
            className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            Start
          </button>

          <button
            onClick={stop}
            disabled={!running}
            className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            Stop
          </button>

          <button
            onClick={clear}
            disabled={running}
            className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            Clear
          </button>

          <button
            onClick={randomize}
            disabled={running}
            className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            Random
          </button>

          <div className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2">
            <label htmlFor="speedSlider" className="font-semibold text-gray-700">
              Speed:
            </label>
            <input
              type="range"
              id="speedSlider"
              min="50"
              max="1000"
              value={speed}
              step="50"
              onChange={(e) => updateSpeed(Number(e.target.value))}
              className="w-32"
            />
            <span className="min-w-[50px] font-semibold text-indigo-500">
              {speed}ms
            </span>
          </div>
        </div>

        <div className="mx-auto mb-5 grid w-fit grid-cols-[repeat(40,15px)] gap-px rounded-lg bg-gray-300 p-px">
          {grid.map((row, i) => (
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => toggleCell(i, j)}
                className={`h-[15px] w-[15px] cursor-pointer transition-colors duration-200 ${
                  cell
                    ? 'bg-indigo-500'
                    : 'bg-white hover:opacity-70'
                }`}
              />
            ))
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-1">
            Generation: <span className="font-bold text-indigo-500">{generation}</span>
          </p>
          <p className="text-sm">Click cells to toggle them on/off</p>
        </div>
      </div>
    </div>
  );
};

