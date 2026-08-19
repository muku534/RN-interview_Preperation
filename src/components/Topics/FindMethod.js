export default function FindMethod() {
  return (
    <div className="topic-section">
      <h2>find()</h2>

      <h3>What is find()?</h3>
      <p><code>find()</code> returns the <strong>first element</strong> that satisfies a condition.</p>
      
      <h3>Syntax</h3>
      <div className="code-block">
        <pre><code>{`const result = array.find(item => condition);`}</code></pre>
      </div>
      <p>Example:</p>
      <div className="code-block">
        <pre><code>{`const numbers = [10, 20, 30, 40];

const result = numbers.find(num => num > 15);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`20`}</code></pre>
      </div>
      <p>It stops when it finds the first match:</p>
      <div className="code-block">
        <pre><code>{`10 → false
20 → true → STOP`}</code></pre>
      </div>

      <h2>find() with objects</h2>
      <div className="code-block">
        <pre><code>{`const users = [
  { id: 1, name: "Mukesh" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const user = users.find(user => user.id === 2);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`{
  id: 2,
  name: "Rahul"
}`}</code></pre>
      </div>

      <h3>If nothing is found</h3>
      <div className="code-block">
        <pre><code>{`const user = users.find(user => user.id === 99);

console.log(user);
// undefined`}</code></pre>
      </div>
    </div>
  );
}