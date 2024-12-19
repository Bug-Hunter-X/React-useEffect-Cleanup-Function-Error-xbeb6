```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const handler = () => setCount(c => c + 1);

  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```