"""
Cable Wrap Problem Solution - Revised

Key insight: Calculate the linking/winding number between the cable path and the rod.
"""

def solve():
    # Read input
    n, m = map(int, input().split())
    grid = []
    for _ in range(n):
        row = input().split()
        grid.append(row)
    
    # Find all cells
    cable_cells = set()
    rod_cells = set()
    
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'C':
                cable_cells.add((i, j))
            elif grid[i][j] == 'R':
                rod_cells.add((i, j))
    
    if not rod_cells or not cable_cells:
        print(0)
        return
    
    # All cable positions (including where it passes under rod)
    all_cable_positions = cable_cells | rod_cells
    
    # Determine rod orientation
    rod_list = sorted(rod_cells)
    if len(rod_list) > 1:
        if rod_list[0][0] == rod_list[1][0]:
            rod_horizontal = True
            rod_axis = rod_list[0][0]
        else:
            rod_horizontal = False
            rod_axis = rod_list[0][1]
    else:
        # Single rod cell - check neighbors
        r, c = rod_list[0]
        has_horizontal = False
        has_vertical = False
        for dr, dc in [(0, 1), (0, -1)]:
            if (r+dr, c+dc) in rod_cells:
                has_horizontal = True
        for dr, dc in [(1, 0), (-1, 0)]:
            if (r+dr, c+dc) in rod_cells:
                has_vertical = True
        rod_horizontal = has_horizontal
        rod_axis = rod_list[0][0] if rod_horizontal else rod_list[0][1]
    
    # Find edge cells
    edge_cells = []
    for i, j in all_cable_positions:
        if i == 0 or i == n-1 or j == 0 or j == m-1:
            edge_cells.append((i, j))
    
    if len(edge_cells) < 2:
        print(0)
        return
    
    # Trace cable path using DFS from multiple starting points
    def trace_path(start):
        path = [start]
        visited = {start}
        stack = [start]
        
        while stack:
            current = stack[-1]
            found = False
            
            # Try all 4 directions
            for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                ni, nj = current[0] + di, current[1] + dj
                if (ni, nj) in all_cable_positions and (ni, nj) not in visited:
                    visited.add((ni, nj))
                    path.append((ni, nj))
                    stack.append((ni, nj))
                    found = True
                    break
            
            if not found:
                stack.pop()
        
        return path
    
    # Try from all edge cells, use longest path
    best_path = []
    for start in edge_cells:
        path = trace_path(start)
        if len(path) > len(best_path):
            best_path = path
    
    cable_path = best_path
    
    # Calculate winding number
    winding = 0
    
    # For each edge in the cable path
    for i in range(len(cable_path) - 1):
        curr = cable_path[i]
        next_pos = cable_path[i + 1]
        
        # Check if either endpoint is on the rod
        curr_on_rod = curr in rod_cells
        next_on_rod = next_pos in rod_cells
        
        if not curr_on_rod and not next_on_rod:
            continue  # No intersection
        
        # Determine the crossing
        if rod_horizontal:
            # Rod is horizontal at row rod_axis
            # Check if cable segment crosses the rod line vertically
            r1, c1 = curr
            r2, c2 = next_pos
            
            # Cable segment goes vertically
            if c1 == c2 and r1 != r2:
                # Check if it crosses the rod axis
                if (r1 < rod_axis <= r2) or (r2 < rod_axis <= r1):
                    # Determine which is above
                    intersection_point = None
                    if r1 == rod_axis:
                        intersection_point = curr
                    elif r2 == rod_axis:
                        intersection_point = next_pos
                    
                    if intersection_point and intersection_point in rod_cells:
                        cable_above = grid[intersection_point[0]][intersection_point[1]] == 'C'
                        
                        if r1 < r2:  # Moving down
                            winding += 1 if cable_above else -1
                        else:  # Moving up
                            winding += -1 if cable_above else 1
        else:
            # Rod is vertical at column rod_axis
            # Check if cable segment crosses the rod line horizontally
            r1, c1 = curr
            r2, c2 = next_pos
            
            # Cable segment goes horizontally
            if r1 == r2 and c1 != c2:
                # Check if it crosses the rod axis
                if (c1 < rod_axis <= c2) or (c2 < rod_axis <= c1):
                    # Determine which is above
                    intersection_point = None
                    if c1 == rod_axis:
                        intersection_point = curr
                    elif c2 == rod_axis:
                        intersection_point = next_pos
                    
                    if intersection_point and intersection_point in rod_cells:
                        cable_above = grid[intersection_point[0]][intersection_point[1]] == 'C'
                        
                        if c1 < c2:  # Moving right
                            winding += 1 if cable_above else -1
                        else:  # Moving left
                            winding += -1 if cable_above else 1
    
    print(abs(winding))

if __name__ == "__main__":
    solve()
