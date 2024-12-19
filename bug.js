```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count based on window resize
    window.addEventListener('resize', () => {
      setCount(count + 1);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setCount(count + 1);
      });
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```