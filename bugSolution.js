```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic:  The state update doesn't trigger re-renders within useEffect
    // The empty dependency array ensures it runs once after mount.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```