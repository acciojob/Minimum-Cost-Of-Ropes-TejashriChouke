//function calculateMinCost() {
  //your code here
  import heapq

def calculateMinCost(ropes):
    if len(ropes) < 2:
        return 0

    # Convert the input list into a min-heap
    heapq.heapify(ropes)

    total_cost = 0

    # Merge ropes until there is only one rope left in the heap
    while len(ropes) > 1:
        # Pop the two smallest ropes from the heap
        smallest1 = heapq.heappop(ropes)
        smallest2 = heapq.heappop(ropes)

        # Calculate the cost of connecting these two ropes
        cost = smallest1 + smallest2

        # Add the cost back to the heap
        heapq.heappush(ropes, cost)

        # Add the cost to the total cost
        total_cost += cost

    return total_cost

# Example usage:
ropes = [4, 3, 2, 6]
result = calculateMinCost(ropes)
print("Minimum cost to connect ropes:", result)  # Output: 29

  
  
}  
