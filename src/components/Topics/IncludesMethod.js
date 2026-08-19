export default function IncludesMethod() {
  return (
    <div className="topic-section">
      <h2>includes()</h2>

      <h3>What is includes()?</h3>
      <p><code>includes()</code> checks whether an array or string contains a specific value.</p>
      <p>It returns:</p>
      <div className="code-block">
        <pre><code>{`true / false`}</code></pre>
      </div>

      <h3>Array</h3>
      <div className="code-block">
        <pre><code>{`const skills = [
  "React Native",
  "JavaScript",
  "Git"
];

skills.includes("React Native");
// true`}</code></pre>
      </div>
      <div className="code-block">
        <pre><code>{`skills.includes("Python");
// false`}</code></pre>
      </div>

      <h2>String</h2>
      <div className="code-block">
        <pre><code>{`"React Native".includes("Native");
// true`}</code></pre>
      </div>
      <div className="code-block">
        <pre><code>{`"React Native".includes("Flutter");
// false`}</code></pre>
      </div>

      <h2>includes() vs find()</h2>
      <div className="code-block">
        <pre><code>{`skills.find(skill => skill === "Git");
// "Git"`}</code></pre>
      </div>
      <p>vs:</p>
      <div className="code-block">
        <pre><code>{`skills.includes("Git");
// true`}</code></pre>
      </div>
      <p>So:</p>
      <div className="code-block">
        <pre><code>{`find()      → gives matching value
includes()  → tells whether value exists`}</code></pre>
      </div>

      <h2>Important object-reference behavior</h2>
      <p>This is an important JavaScript concept:</p>
      <div className="code-block">
        <pre><code>{`const users = [
  { id: 1, name: "Mukesh" }
];

users.includes({
  id: 1,
  name: "Mukesh"
});`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`false`}</code></pre>
      </div>
      <p>Why?</p>
      <p>Because those are <strong>two different object references</strong>.</p>
      <div className="code-block">
        <pre><code>{`const user = { id: 1 };

const users = [user];

users.includes(user);
// true`}</code></pre>
      </div>
      <p>Same reference → <code>true</code>.</p>
    </div>
  );
}