function findOriginalArray(changed) {
    const counts = new Map();
    const original = [];
  
    
    for (const num of changed) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
  
    
    for (const num of changed) {
      const half = num / 2;
  
      if (counts.get(half) > 0) {
      
        original.push(half);
  
        
        counts.set(half, counts.get(half) - 1);
      } else {
  
        return [];
      }
    }
  
    
    for (const count of counts.values()) {
      if (count > 0) {
        
        return [];
      }
    }
  
    return original;
  }
  