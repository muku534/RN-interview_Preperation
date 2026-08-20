export default function PlanDay2() {
  return (
    <div className="topic-section">
      <h2>DAY 2 — React deeply</h2>
      <p>This is extremely important.</p>
      <p>We'll go beyond hooks.</p>
      
      <h3>React internals</h3>
      <ul>
        <li>JSX</li>
        <li>Virtual DOM</li>
        <li>Fiber</li>
        <li>reconciliation</li>
        <li>render phase</li>
        <li>commit phase</li>
        <li>component identity</li>
        <li>keys</li>
        <li>mounting/updating/unmounting</li>
        <li>state preservation</li>
        <li>batching</li>
      </ul>

      <h3>Hooks</h3>
      <p>You already studied hooks, so we'll connect them to the internals:</p>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useLayoutEffect</li>
        <li>useRef</li>
        <li>useMemo</li>
        <li>useCallback</li>
        <li>useReducer</li>
        <li>custom hooks</li>
      </ul>
      <p>And especially:</p>
      <p><strong>Why did this component render again?</strong></p>
      <p>That's a very common real-world RN question.</p>
    </div>
  );
}