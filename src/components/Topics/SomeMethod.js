export default function SomeMethod() {
  return (
    <div className="topic-section">
      <h2>some()</h2>

      <h3>What is some()?</h3>
      <p><code>some()</code> checks:</p>
      <div className="admonition">
        <p><strong>Does at least ONE element satisfy the condition?</strong></p>
      </div>
      <p>It returns a boolean.</p>
      <div className="code-block">
        <pre><code>{`const numbers = [1, 3, 5, 8];

const result = numbers.some(num => num % 2 === 0);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`true`}</code></pre>
      </div>
      <p>Because <code>8</code> is even.</p>

      <h3>Nothing matches</h3>
      <div className="code-block">
        <pre><code>{`const numbers = [1, 3, 5];

numbers.some(num => num % 2 === 0);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`false`}</code></pre>
      </div>
      <h3>Important</h3>
      <p><code>some()</code> stops as soon as it finds a match.</p>
    </div>
  );
}