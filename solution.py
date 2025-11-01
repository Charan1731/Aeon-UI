"""
Cable Wrap Problem Solution

This solution calculates the minimum number of switches needed to unwrap a cable
from around a rod using topological winding number concept.

Algorithm:
1. Parse the grid and identify cable cells (C) and rod cells (R)
2. Rod cells with 'R' mark intersections where rod is above cable
3. Determine rod orientation (horizontal or vertical)
4. Trace the complete cable path from edge to edge
5. Calculate winding number by counting signed crossings
6. Return absolute value of winding number as the result

Time Complexity: O(N*M) where N,M are grid dimensions
Space Complexity: O(N*M) for storing the grid and path
"""

from collections import deque

def solve():
    # Read input
    n, m = map(int, input().split())
    grid = []
    for _ in range(n):
        row = input().split()
        grid.append(row)
    
    # Find cable and rod cells
    cable_or_intersection = set()
    rod_cells = set()
    
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'C':
                cable_or_intersection.add((i, j))
            elif grid[i][j] == 'R':
                rod_cells.add((i, j))
                cable_or_intersection.add((i, j))  # R means rod is above cable at intersection
    
    if not rod_cells:
        print(0)
        return
    
    # Determine rod orientation and axis
    rod_list = sorted(rod_cells)
    if len(rod_list) > 1:
        if rod_list[0][0] == rod_list[1][0]:
            rod_orientation = 'horizontal'
            rod_axis = rod_list[0][0]
        else:
            rod_orientation = 'vertical'
            rod_axis = rod_list[0][1]
    else:
        rod_orientation = 'vertical'
        rod_axis = rod_list[0][1]
    
    # Build complete cable path - try different starting points
    edge_cells = []
    for i, j in cable_or_intersection:
        if i == 0 or i == n-1 or j == 0 or j == m-1:
            edge_cells.append((i, j))
    
    if len(edge_cells) < 1:
        print(0)
        return
    
    def try_path_from(start):
        """Try to trace cable path from given start point"""
        path = [start]
        visited = {start}
        current = start
        
        while len(visited) < len(cable_or_intersection):
            found = False
            # First try non-rod neighbors
            for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                ni, nj = current[0] + di, current[1] + dj
                if (ni, nj) in cable_or_intersection and (ni, nj) not in visited and (ni, nj) not in rod_cells:
                    path.append((ni, nj))
                    visited.add((ni, nj))
                    current = (ni, nj)
                    found = True
                    break
            
            # If no non-rod neighbors, try rod neighbors
            if not found:
                for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    ni, nj = current[0] + di, current[1] + dj
                    if (ni, nj) in cable_or_intersection and (ni, nj) not in visited:
                        path.append((ni, nj))
                        visited.add((ni, nj))
                        current = (ni, nj)
                        found = True
                        break
            
            if not found:
                break
        
        return path
    
    # Try starting from different edge cells, choose the longest path
    cable_path = []
    for start_cell in edge_cells:
        if start_cell not in rod_cells:  # Prefer non-rod starting points
            path = try_path_from(start_cell)
            if len(path) > len(cable_path):
                cable_path = path
    
    # If still not complete, try rod edge cells too
    if len(cable_path) < len(cable_or_intersection):
        for start_cell in edge_cells:
            path = try_path_from(start_cell)
            if len(path) > len(cable_path):
                cable_path = path
    
    # Count crossings using winding number algorithm
    winding = 0
    
    for i, pos in enumerate(cable_path):
        if pos not in rod_cells:
            continue
        
        # This is an intersection - determine if cable is above or below
        cable_above = (grid[pos[0]][pos[1]] == 'C')
        
        # Find non-rod neighbors in path to determine crossing direction
        prev_pos = None
        next_pos = None
        
        for j in range(i-1, -1, -1):
            if cable_path[j] not in rod_cells:
                prev_pos = cable_path[j]
                break
        
        for j in range(i+1, len(cable_path)):
            if cable_path[j] not in rod_cells:
                next_pos = cable_path[j]
                break
        
        if not prev_pos or not next_pos:
            continue
        
        # Check if this is a true crossing (cable goes from one side of rod to other)
        if rod_orientation == 'horizontal':
            # Rod is horizontal, check if cable crosses vertically
            prev_above_rod = prev_pos[0] < rod_axis
            next_above_rod = next_pos[0] < rod_axis
            
            if prev_above_rod != next_above_rod:
                # Cable crosses the rod
                if prev_above_rod:  # Crossing from top to bottom
                    winding += 1 if cable_above else -1
                else:  # Crossing from bottom to top
                    winding += -1 if cable_above else 1
        else:  # vertical rod
            # Rod is vertical, check if cable crosses horizontally
            prev_left_rod = prev_pos[1] < rod_axis
            next_left_rod = next_pos[1] < rod_axis
            
            if prev_left_rod != next_left_rod:
                # Cable crosses the rod
                if prev_left_rod:  # Crossing from left to right
                    winding += 1 if cable_above else -1
                else:  # Crossing from right to left
                    winding += -1 if cable_above else 1
    
    print(abs(winding))

if __name__ == "__main__":
    solve()
