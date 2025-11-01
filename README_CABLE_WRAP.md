# Cable Wrap Problem - Solution

## Problem Summary
Given a 2D grid with a rod ('R') and a cable ('C'), determine the minimum number of switches needed to unwrap the cable so it can be pulled free without getting caught on the rod.

## Key Concepts

### Grid Representation
- **'C'**: Cable cell OR intersection where cable is **above** the rod
- **'R'**: Rod cell OR intersection where rod is **above** the cable
- **'.'**: Empty cell

### Solution Approach
The solution uses the **topological winding number** concept to determine how many times the cable wraps around the rod.

## Algorithm

### 1. Parse Input
- Identify all cable cells (marked 'C')
- Identify all rod cells (marked 'R')
- Note that 'R' cells are intersections where the rod is above the cable

### 2. Determine Rod Orientation
- Check if the rod is horizontal or vertical
- Find the rod's axis (row number for horizontal, column number for vertical)

### 3. Trace Cable Path
- Find all edge cells (cells on grid boundaries)
- Try multiple starting points to find the complete cable path
- Prefer non-rod edge cells as starting points
- Use greedy DFS that prioritizes non-rod neighbors

### 4. Calculate Winding Number
For each intersection point in the cable path:
- Determine if cable is above (C) or below (R) the rod
- Find the previous and next non-rod positions in the path
- Check if cable crosses from one side of the rod to the other
- Add +1 or -1 to winding number based on:
  - Direction of crossing (which side to which side)
  - Whether cable is above or below at the intersection

### 5. Return Result
The minimum number of switches = **absolute value of winding number**

## Complexity Analysis
- **Time Complexity**: O(N ? M ? E) where:
  - N, M are grid dimensions
  - E is the number of edge cells (typically O(N+M))
  - In practice, this is efficient for the given constraints (N, M ? 20)
  
- **Space Complexity**: O(N ? M) for storing grid and cable path

## Example Walkthrough

### Example 1: Answer = 1
```
. . R . .
C C C C C
. . R . C
C C R C C
. . R . .
```
- The cable forms a U-shape around the vertical rod at column 2
- Net winding number = 1 (cable wraps once around the rod)
- Switching at any one intersection point unwraps the cable

### Example 2: Answer = 2
```
C C C . C C C . C C C
C . C . C . C . C . C
C R C R C R R R C R R
C . C . C . C . C . C
C . C C C . C C C . C
```
- The cable has multiple vertical segments crossing the horizontal rod
- Net winding number = 2 (cable wraps twice)
- Need to switch at 2 intersection points to unwrap

### Example 3: Answer = 0
```
C C C R C C
. . . R . C
C C C C C C
C . . R . .
C C C C C C
. . . R . C
C C C R C C
```
- The cable passes through the rod intersections but doesn't wrap around it
- Net winding number = 0 (no wrapping)
- Cable can be pulled free without any switches

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

## Implementation Notes
- The solution tries multiple starting points to ensure the complete cable path is traced
- Non-rod edge cells are preferred as starting points for more reliable path tracing
- The winding number calculation uses signed crossings to handle cables that wrap in different directions
