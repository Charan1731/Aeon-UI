# Cable Wrap Problem - Solution

## Overview
This solution solves the Cable Wrap problem using the concept of **topological winding number** from knot theory. The cable must be unwrapped from around a rod by switching positions at intersection points.

## Solution Approach

### Key Insights
1. **Grid Representation**:
   - `'C'`: Cable cell OR intersection where cable is **above** the rod
   - `'R'`: Rod cell OR intersection where rod is **above** the cable (cable below)
   - `'.'`: Empty cell

2. **Winding Number**: The minimum switches needed equals the absolute value of the winding number - how many net times the cable wraps around the rod.

### Algorithm Steps

1. **Parse Input**: Identify all cable cells (`C`) and rod cells (`R`)

2. **Determine Rod Orientation**: Check if the rod is horizontal or vertical by examining rod cell positions

3. **Find Cable Path**: Use BFS to find the longest possible cable path from edge to edge, ensuring we capture the complete cable route

4. **Calculate Winding Number**:
   - For each intersection point in the cable path
   - Find the previous and next non-rod positions
   - Check if cable crosses from one side of the rod to the other
   - Add signed crossing based on:
     - Direction of crossing (which side to which side)
     - Whether cable is above or below at the intersection

5. **Return Result**: The absolute value of the winding number

### Example Breakdown

**Example 1** (Answer = 1):
```
. . R . .
C C C C C
. . R . C
C C R C C
. . R . .
```
- Vertical rod at column 2
- Cable crosses from left to right above the rod at row 1
- Cable crosses from right to left below the rod at row 3
- Net winding = 1 ? Need 1 switch

**Example 2** (Answer = 2):
```
C C C . C C C . C C C
C . C . C . C . C . C
C R C R C R R R C R R
C . C . C . C . C . C
C . C C C . C C C . C
```
- Horizontal rod at row 2
- Multiple vertical cable segments crossing the rod
- Net winding = 2 ? Need 2 switches

**Example 3** (Answer = 0):
```
C C C R C C
. . . R . C
C C C C C C
C . . R . .
C C C C C C
. . . R . C
C C C R C C
```
- Vertical rod at column 3
- Cable crosses in opposite directions that cancel out
- Net winding = 0 ? Cable can be pulled free without switches

## Usage

```bash
python3 solution.py < input.txt
```

### Input Format
```
N M
grid[0][0] grid[0][1] ... grid[0][M-1]
grid[1][0] grid[1][1] ... grid[1][M-1]
...
grid[N-1][0] grid[N-1][1] ... grid[N-1][M-1]
```

### Output
Single integer: minimum number of switches required

## Complexity
- **Time**: O(N ? M ? E) where E is the number of edge cells
- **Space**: O(N ? M) for storing the grid and cable path

## Implementation Notes
- Uses BFS to find the longest cable path, ensuring we capture as much of the cable route as possible
- Handles both horizontal and vertical rod orientations
- Correctly calculates signed crossings to determine net winding
- The queue size is limited during BFS to prevent memory explosion on large grids
