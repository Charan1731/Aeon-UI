"""
Cable Wrap Problem Solution

This solution calculates the minimum number of switches needed to unwrap a cable
from around a rod by computing the topological winding number.

Algorithm:
1. Parse grid to find cable cells ('C') and rod cells ('R')
2. Determine rod orientation (horizontal or vertical)
3. Use BFS to find the longest cable path between edge cells
4. Calculate winding number by counting signed crossings
5. Return absolute value of winding number

Time Complexity: O(N*M*E) where E is number of edge cells
Space Complexity: O(N*M) for storing grid and paths
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
    cable_cells = set()
    rod_cells = set()
    
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'C':
                cable_cells.add((i, j))
            elif grid[i][j] == 'R':
                rod_cells.add((i, j))
    
    if not rod_cells:
        print(0)
        return
    
    all_cable = cable_cells | rod_cells
    
    # Determine rod orientation
    rod_list = sorted(rod_cells)
    if len(rod_list) > 1:
        if rod_list[0][0] == rod_list[1][0]:
            rod_horizontal = True
            rod_line = rod_list[0][0]
        else:
            rod_horizontal = False
            rod_line = rod_list[0][1]
    else:
        rod_horizontal = False
        rod_line = rod_list[0][1]
    
    # Find edge cells
    edge_cells = [pos for pos in all_cable if pos[0] == 0 or pos[0] == n-1 or pos[1] == 0 or pos[1] == m-1]
    
    if len(edge_cells) < 2:
        print(0)
        return
    
    # BFS to find longest path
    def bfs_longest_path():
        best = []
        for start in edge_cells[:min(30, len(edge_cells))]:
            queue = deque([(start, [start], {start})])
            
            while queue:
                current, path, visited = queue.popleft()
                
                if len(path) > len(best):
                    best = path[:]
                
                r, c = current
                for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    nr, nc = r + dr, c + dc
                    if (nr, nc) in all_cable and (nr, nc) not in visited:
                        new_visited = visited | {(nr, nc)}
                        queue.append(((nr, nc), path + [(nr, nc)], new_visited))
                
                # Limit queue size to avoid explosion
                if len(queue) > 10000:
                    break
        
        return best
    
    cable_path = bfs_longest_path()
    
    if not cable_path:
        print(0)
        return
    
    # Calculate winding
    winding = 0
    
    for i in range(len(cable_path)):
        pos = cable_path[i]
        if pos not in rod_cells:
            continue
        
        # Find prev/next non-rod positions
        prev_idx = i - 1
        while prev_idx >= 0 and cable_path[prev_idx] in rod_cells:
            prev_idx -= 1
        prev_pos = cable_path[prev_idx] if prev_idx >= 0 else None
        
        next_idx = i + 1
        while next_idx < len(cable_path) and cable_path[next_idx] in rod_cells:
            next_idx += 1
        next_pos = cable_path[next_idx] if next_idx < len(cable_path) else None
        
        if not prev_pos or not next_pos:
            continue
        
        cable_above = grid[pos[0]][pos[1]] == 'C'
        
        if rod_horizontal:
            prev_side = prev_pos[0] < rod_line
            next_side = next_pos[0] < rod_line
            
            if prev_side != next_side:
                if prev_side:
                    winding += 1 if cable_above else -1
                else:
                    winding += -1 if cable_above else 1
        else:
            prev_side = prev_pos[1] < rod_line
            next_side = next_pos[1] < rod_line
            
            if prev_side != next_side:
                if prev_side:
                    winding += 1 if cable_above else -1
                else:
                    winding += -1 if cable_above else 1
    
    print(abs(winding))

if __name__ == "__main__":
    solve()
