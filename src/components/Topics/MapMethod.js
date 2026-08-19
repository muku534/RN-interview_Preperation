export default function MapMethod() {
  return (
    <div className="topic-section">
      <h2>map()</h2>

      <h3>What is map()?</h3>
      <p><code>map()</code> is used when you want to <strong>transform every element of an array</strong> and create a <strong>new array</strong> containing the transformed values.</p>
      
      <h3>Syntax</h3>
      <div className="code-block">
        <pre><code>{`const result = array.map((item, index, array) => {
  return transformedValue;
});`}</code></pre>
      </div>
      
      <p>Most of the time:</p>
      <div className="code-block">
        <pre><code>{`const result = array.map(item => transformedValue);`}</code></pre>
      </div>

      <h3>Basic example</h3>
      <div className="code-block">
        <pre><code>{`const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);`}</code></pre>
      </div>
      
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`[2, 4, 6, 8]`}</code></pre>
      </div>

      <p>The original array remains unchanged:</p>
      <div className="code-block">
        <pre><code>{`console.log(numbers);
// [1, 2, 3, 4]`}</code></pre>
      </div>

      <h3>Mental model</h3>
      <p>Think:</p>
      <div className="code-block">
        <pre><code>{`Original array
      ↓
transform every item
      ↓
New array`}</code></pre>
      </div>

      <p>Example:</p>
      <div className="code-block">
        <pre><code>{`1 → 2
2 → 4
3 → 6
4 → 8`}</code></pre>
      </div>

      <h2>map() with objects</h2>
      <div className="code-block">
        <pre><code>{`const users = [
  { name: "Mukesh", age: 24 },
  { name: "Rahul", age: 21 }
];

const result = users.map(user => user.name);

console.log(result);`}</code></pre>
      </div>
      <p>Output:</p>
      <div className="code-block">
        <pre><code>{`["Mukesh", "Rahul"]`}</code></pre>
      </div>

      <p>You can also create a completely different structure:</p>
      <div className="code-block">
        <pre><code>{`const result = users.map(user => ({
  id: user.name,
  age: user.age
}));`}</code></pre>
      </div>

      <h2>Adding a property while keeping the object</h2>
      <p>A very common real-world pattern:</p>
      <div className="code-block">
        <pre><code>{`const users = [
  { name: "Mukesh", age: 24 },
  { name: "Rahul", age: 17 }
];

const result = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));`}</code></pre>
      </div>
      
      <p>Result:</p>
      <div className="code-block">
        <pre><code>{`[
  {
    name: "Mukesh",
    age: 24,
    isAdult: true
  },
  {
    name: "Rahul",
    age: 17,
    isAdult: false
  }
]`}</code></pre>
      </div>

      <h3>Why use ...user?</h3>
      <p>Because:</p>
      <div className="code-block">
        <pre><code>{`{
  ...user,
  isAdult: true
}`}</code></pre>
      </div>
      <p>creates a <strong>new object</strong> containing the existing properties plus the new property.</p>

      <h2>map() and shallow copying</h2>
      <p>This is important.</p>
      <div className="code-block">
        <pre><code>{`const users = [
  {
    name: "Mukesh",
    skills: ["React Native", "JavaScript"]
  }
];

const result = users.map(user => ({
  ...user
}));`}</code></pre>
      </div>
      <p>You created:</p>
      <ul>
        <li>a new array from <code>map()</code></li>
        <li>a new object for each user</li>
      </ul>
      <p>But nested objects/arrays are still shared:</p>
      <div className="code-block">
        <pre><code>{`result[0].skills === users[0].skills;
// true`}</code></pre>
      </div>
      <p>Because object spread is only a <strong>shallow copy</strong>.</p>
      <p>To copy the nested array too:</p>
      <div className="code-block">
        <pre><code>{`const result = users.map(user => ({
  ...user,
  skills: [...user.skills]
}));`}</code></pre>
      </div>
      <p>Now:</p>
      <div className="code-block">
        <pre><code>{`result[0].skills === users[0].skills;
// false`}</code></pre>
      </div>

      <h2>Important map() rule</h2>
      <p><code>map()</code> is for:</p>
      <div className="admonition">
        <p><strong>"I want one output for every input item."</strong></p>
      </div>
      <p>If you have:</p>
      <div className="code-block">
        <pre><code>{`[1, 2, 3]`}</code></pre>
      </div>
      <p><code>map()</code> normally produces:</p>
      <div className="code-block">
        <pre><code>{`[output1, output2, output3]`}</code></pre>
      </div>
      <p>So:</p>
      <div className="code-block">
        <pre><code>{`map → array → array`}</code></pre>
      </div>
    </div>
  );
}