export default function FilterMethod() {
  return (
    <div className="topic-section">
      <h2>filter()</h2>

      <h3>What is filter()?</h3>
      <p><code>filter()</code> creates a <strong>new array containing only the elements that satisfy a condition</strong>.</p>
      
      <h3>Syntax</h3>
      <div className="code-block">
        <pre><code>{`const result = array.filter(item => condition);`}</code></pre>
      </div>

      <h3>Basic example</h3>
      <div className="code-block">
        <pre><code>{`const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(num => num > 20);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`[25, 30]`}</code></pre>
      </div>
      <p>Think:</p>
      <div className="code-block">
        <pre><code>{`10 > 20 → false → remove
15 > 20 → false → remove
20 > 20 → false → remove
25 > 20 → true  → keep
30 > 20 → true  → keep`}</code></pre>
      </div>

      <h3>Most important rule</h3>
      <div className="code-block">
        <pre><code>{`true  → keep
false → remove`}</code></pre>
      </div>

      <h2>Filter objects</h2>
      <div className="code-block">
        <pre><code>{`const users = [
  { name: "Mukesh", age: 24 },
  { name: "Rahul", age: 17 },
  { name: "Amit", age: 21 }
];

const result = users.filter(user => user.age >= 18);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`[
  { name: "Mukesh", age: 24 },
  { name: "Amit", age: 21 }
]`}</code></pre>
      </div>

      <h2>Multiple conditions</h2>
      <p>Use <code>&&</code> when <strong>both conditions must be true</strong>.</p>
      <div className="code-block">
        <pre><code>{`const result = users.filter(
  user => user.active && user.age >= 18
);`}</code></pre>
      </div>
      <p>You can have multiple:</p>
      <div className="code-block">
        <pre><code>{`const result = users.filter(
  user =>
    user.active &&
    user.age >= 18 &&
    user.skills.includes("React Native")
);`}</code></pre>
      </div>

      <h2>filter() with includes()</h2>
      <p>Very common in real applications:</p>
      <div className="code-block">
        <pre><code>{`const users = [
  {
    name: "Mukesh",
    skills: ["React Native", "JavaScript"]
  },
  {
    name: "Rahul",
    skills: ["Node.js", "MongoDB"]
  }
];

const result = users.filter(
  user => user.skills.includes("React Native")
);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`[
  {
    name: "Mukesh",
    skills: ["React Native", "JavaScript"]
  }
]`}</code></pre>
      </div>

      <h2>filter() with nested objects</h2>
      <div className="code-block">
        <pre><code>{`const orders = [
  {
    id: 1,
    payment: {
      status: "paid"
    }
  },
  {
    id: 2,
    payment: {
      status: "pending"
    }
  }
];

const result = orders.filter(
  order => order.payment.status === "paid"
);`}</code></pre>
      </div>

      <h2>filter() with !==</h2>
      <div className="code-block">
        <pre><code>{`const result = users.filter(
  user => user.role !== "developer"
);`}</code></pre>
      </div>
      <p>This keeps everyone who is <strong>not</strong> a developer.</p>

      <h2>If nothing matches</h2>
      <div className="code-block">
        <pre><code>{`const result = [1, 2, 3].filter(num => num > 100);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`[]`}</code></pre>
      </div>
      <p>Unlike <code>find()</code>, <code>filter()</code> returns an empty array.</p>
    </div>
  );
}