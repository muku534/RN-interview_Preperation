export default function EveryMethod() {
  return (
    <div className="topic-section">
      <h2>every()</h2>

      <h3>What is every()?</h3>
      <p><code>every()</code> checks:</p>
      <div className="admonition">
        <p><strong>Do ALL elements satisfy the condition?</strong></p>
      </div>
      <div className="code-block">
        <pre><code>{`const numbers = [2, 4, 6, 8];

const result = numbers.every(num => num % 2 === 0);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`true`}</code></pre>
      </div>
      <p>But:</p>
      <div className="code-block">
        <pre><code>{`const numbers = [2, 4, 7, 8];

numbers.every(num => num % 2 === 0);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`false`}</code></pre>
      </div>
      <p>Because <code>7</code> fails.</p>

      <h2>some() vs every()</h2>
      <p>Remember:</p>
      <div className="code-block">
        <pre><code>{`some()  → at least ONE?
every() → ALL?`}</code></pre>
      </div>
      <p>Example:</p>
      <div className="code-block">
        <pre><code>{`const users = [
  { age: 20 },
  { age: 25 },
  { age: 17 }
];`}</code></pre>
      </div>
      <div className="code-block">
        <pre><code>{`users.some(user => user.age >= 18);
// true`}</code></pre>
      </div>
      <p>At least one adult.</p>
      <div className="code-block">
        <pre><code>{`users.every(user => user.age >= 18);
// false`}</code></pre>
      </div>
      <p>Not everyone is an adult.</p>
    </div>
  );
}