export default function FindIndexMethod() {
  return (
    <div className="topic-section">
      <h2>findIndex()</h2>

      <h3>What is findIndex()?</h3>
      <p><code>findIndex()</code> returns the <strong>index of the first element</strong> satisfying the condition.</p>
      <div className="code-block">
        <pre><code>{`const users = [
  { id: 10, name: "Mukesh" },
  { id: 20, name: "Rahul" },
  { id: 30, name: "Amit" }
];

const index = users.findIndex(user => user.id === 20);

console.log(index);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`1`}</code></pre>
      </div>

      <h3>If nothing matches</h3>
      <div className="code-block">
        <pre><code>{`users.findIndex(user => user.id === 99);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`-1`}</code></pre>
      </div>
      
      <h3>Difference</h3>
      <div className="code-block">
        <pre><code>{`find()       → element
findIndex()  → index`}</code></pre>
      </div>
    </div>
  );
}