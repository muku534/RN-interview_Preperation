export default function PlanDay2() {
  return (
    <div className="topic-section">
      <h2>DAY 2 — React deeply</h2>
      <p>This is extremely important. We'll go beyond hooks.</p>
      <h3>React internals</h3>
      <ul>
        <li>JSX, Virtual DOM, Fiber</li>
        <li>Reconciliation, render phase, commit phase</li>
        <li>Component identity, keys</li>
        <li>Mounting/updating/unmounting</li>
        <li>State preservation, batching</li>
      </ul>

      <h3>Hooks</h3>
      <p>You already studied hooks, so we'll connect them to the internals:</p>
      <ul>
        <li><code>useState</code>, <code>useEffect</code>, <code>useLayoutEffect</code></li>
        <li><code>useRef</code>, <code>useMemo</code>, <code>useCallback</code>, <code>useReducer</code></li>
        <li>Custom hooks</li>
      </ul>
      <p>And especially: <strong>Why did this component render again?</strong> (That's a very common real-world RN question).</p>
    </div>
  );
}