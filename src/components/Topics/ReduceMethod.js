export default function ReduceMethod() {
  return (
    <div className="topic-section">
      <h2>reduce()</h2>

      <h3>What is reduce()?</h3>
      <p><code>reduce()</code> takes an array and builds <strong>one final result</strong>.</p>
      <p>That result can be:</p>
      <ul>
        <li>number</li>
        <li>string</li>
        <li>object</li>
        <li>array</li>
        <li>etc.</li>
      </ul>

      <h3>Syntax</h3>
      <div className="code-block">
        <pre><code>{`const result = array.reduce(
  (accumulator, currentValue) => {
    // build result
  },
  initialValue
);`}</code></pre>
      </div>
      <p>The most important mental model:</p>
      <div className="code-block">
        <pre><code>{`acc → result built so far
item → current array item`}</code></pre>
      </div>

      <h2>reduce() — Sum</h2>
      <div className="code-block">
        <pre><code>{`const numbers = [5, 10, 15, 20];

const result = numbers.reduce(
  (acc, num) => acc + num,
  0
);`}</code></pre>
      </div>
      <p>Execution:</p>
      <div className="code-block">
        <pre><code>{`0 + 5  = 5
5 + 10 = 15
15 + 15 = 30
30 + 20 = 50`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`50`}</code></pre>
      </div>
      <p>Here:</p>
      <div className="code-block">
        <pre><code>{`acc → running total
num → current number`}</code></pre>
      </div>

      <h2>reduce() with objects</h2>
      <div className="code-block">
        <pre><code>{`const products = [
  { name: "iPhone", price: 80000 },
  { name: "MacBook", price: 120000 },
  { name: "AirPods", price: 20000 }
];

const result = products.reduce(
  (acc, product) => acc + product.price,
  0
);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`220000`}</code></pre>
      </div>
      <p>Here:</p>
      <div className="code-block">
        <pre><code>{`acc → running total
product → current product`}</code></pre>
      </div>

      <h2>reduce() for counting</h2>
      <div className="code-block">
        <pre><code>{`const users = [
  { name: "Mukesh", role: "developer" },
  { name: "Rahul", role: "designer" },
  { name: "Amit", role: "developer" },
  { name: "Jay", role: "developer" }
];`}</code></pre>
      </div>
      <p>We want the number of developers.</p>
      <div className="code-block">
        <pre><code>{`const result = users.reduce(
  (acc, user) =>
    acc + (user.role === "developer" ? 1 : 0),
  0
);`}</code></pre>
      </div>
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`3`}</code></pre>
      </div>
      <p>Mental model:</p>
      <div className="code-block">
        <pre><code>{`acc = developer count`}</code></pre>
      </div>
      <p>For every user:</p>
      <div className="code-block">
        <pre><code>{`developer → +1
other      → +0`}</code></pre>
      </div>

      <h2>reduce() with an object accumulator</h2>
      <p>This is the more advanced pattern.</p>
      <p>Suppose:</p>
      <div className="code-block">
        <pre><code>{`const products = [
  { name: "iPhone", category: "phone" },
  { name: "MacBook", category: "laptop" },
  { name: "Samsung", category: "phone" },
  { name: "Dell", category: "laptop" },
  { name: "Pixel", category: "phone" }
];`}</code></pre>
      </div>
      <p>We want:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 3,
  laptop: 2
}`}</code></pre>
      </div>
      <p>Start with:</p>
      <div className="code-block">
        <pre><code>{`{}`}</code></pre>
      </div>
      <p>Then dynamically update:</p>
      <div className="code-block">
        <pre><code>{`acc[product.category]`}</code></pre>
      </div>
      <p>Full solution:</p>
      <div className="code-block">
        <pre><code>{`const result = products.reduce((acc, product) => {
  acc[product.category] =
    (acc[product.category] || 0) + 1;

  return acc;
}, {});`}</code></pre>
      </div>

      <h3>Execution</h3>
      <p>Initially:</p>
      <div className="code-block">
        <pre><code>{`{}`}</code></pre>
      </div>
      <p>First phone:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 1
}`}</code></pre>
      </div>
      <p>Laptop:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 1,
  laptop: 1
}`}</code></pre>
      </div>
      <p>Phone:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 2,
  laptop: 1
}`}</code></pre>
      </div>
      <p>Laptop:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 2,
  laptop: 2
}`}</code></pre>
      </div>
      <p>Phone:</p>
      <div className="code-block">
        <pre><code>{`{
  phone: 3,
  laptop: 2
}`}</code></pre>
      </div>

      <h2>Understanding this line</h2>
      <div className="code-block">
        <pre><code>{`acc[product.category] =
  (acc[product.category] || 0) + 1;`}</code></pre>
      </div>
      <p>If:</p>
      <div className="code-block">
        <pre><code>{`product.category === "phone"`}</code></pre>
      </div>
      <p>then:</p>
      <div className="code-block">
        <pre><code>{`acc[product.category]`}</code></pre>
      </div>
      <p>means:</p>
      <div className="code-block">
        <pre><code>{`acc["phone"]`}</code></pre>
      </div>
      <p>If <code>phone</code> doesn't exist:</p>
      <div className="code-block">
        <pre><code>{`acc["phone"] // undefined`}</code></pre>
      </div>
      <p>Then:</p>
      <div className="code-block">
        <pre><code>{`undefined || 0`}</code></pre>
      </div>
      <p>becomes:</p>
      <div className="code-block">
        <pre><code>{`0`}</code></pre>
      </div>
      <p>So:</p>
      <div className="code-block">
        <pre><code>{`0 + 1`}</code></pre>
      </div>
      <p>creates:</p>
      <div className="code-block">
        <pre><code>{`phone: 1`}</code></pre>
      </div>
      <p>If it already exists:</p>
      <div className="code-block">
        <pre><code>{`phone: 2`}</code></pre>
      </div>
      <p>then:</p>
      <div className="code-block">
        <pre><code>{`2 || 0`}</code></pre>
      </div>
      <p>becomes:</p>
      <div className="code-block">
        <pre><code>{`2`}</code></pre>
      </div>
      <p>and:</p>
      <div className="code-block">
        <pre><code>{`2 + 1`}</code></pre>
      </div>
      <p>becomes:</p>
      <div className="code-block">
        <pre><code>{`phone: 3`}</code></pre>
      </div>

      <h3>Key mental model</h3>
      <p><code>reduce()</code> doesn't always have to use a number as its accumulator.</p>
      <div className="code-block">
        <pre><code>{`sum       → acc = number
count     → acc = number
grouping  → acc = object
collect   → acc = array`}</code></pre>
      </div>
      <p>The accumulator is simply:</p>
      <div className="admonition">
        <p><strong>Whatever final result you're building.</strong></p>
      </div>

      <h2>reduce() and initial value</h2>
      <p>Prefer explicitly providing an initial value when appropriate:</p>
      <div className="code-block">
        <pre><code>{`numbers.reduce(
  (acc, num) => acc + num,
  0
);`}</code></pre>
      </div>
      <p>For an object:</p>
      <div className="code-block">
        <pre><code>{`products.reduce(
  (acc, product) => {
    // ...
    return acc;
  },
  {}
);`}</code></pre>
      </div>
      <p>For an array:</p>
      <div className="code-block">
        <pre><code>{`items.reduce(
  (acc, item) => {
    acc.push(item);
    return acc;
  },
  []
);`}</code></pre>
      </div>
      <p>The initial value determines the starting type/value of your accumulator.</p>
    </div>
  );
}