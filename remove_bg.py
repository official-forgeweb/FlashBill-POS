import collections
from PIL import Image
import os

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    data = img.load()
    
    visited = bytearray(width * height)
    queue = collections.deque()
    
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height-1))
        visited[0 * width + x] = 1
        visited[(height-1) * width + x] = 1
        
    for y in range(1, height-1):
        queue.append((0, y))
        queue.append((width-1, y))
        visited[y * width + 0] = 1
        visited[y * width + (width-1)] = 1
        
    while queue:
        cx, cy = queue.popleft()
        
        r, g, b, a = data[cx, cy]
        # Any light pixel on the outer rim is considered background
        if r > 210 and g > 210 and b > 210:
            data[cx, cy] = (255, 255, 255, 0)
            
            for nx, ny in [(cx-1, cy), (cx+1, cy), (cx, cy-1), (cx, cy+1)]:
                if 0 <= nx < width and 0 <= ny < height:
                    idx = ny * width + nx
                    if not visited[idx]:
                        visited[idx] = 1
                        queue.append((nx, ny))
                        
    # Crop bounds
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    for y in range(height):
        for x in range(width):
            if data[x, y][3] > 0: # If not transparent
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                
    pad = 2
    min_x = max(0, min_x - pad)
    min_y = max(0, min_y - pad)
    max_x = min(width - 1, max_x + pad)
    max_y = min(height - 1, max_y + pad)
    
    img = img.crop((min_x, min_y, max_x, max_y))
    img.save(output_path, "PNG")

input_file = r"c:\Users\Vanshaj sharma\Desktop\Forgeweb\FlashBill-POS\public\pos_interface_ui.png"
process_image(input_file, input_file)
print("Background removed and image cropped successfully.")
