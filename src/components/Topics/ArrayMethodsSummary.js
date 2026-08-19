export default function ArrayMethodsSummary() {
  return (
    <div className="topic-section">
      <h2>Complete comparison</h2>
      <p>This is the part I'd put at the <strong>top of your revision page</strong>:</p>
      
      <table style={{width: '100%', marginBottom: '2rem', borderCollapse: 'collapse', textAlign: 'left'}}>
        <thead>
          <tr style={{borderBottom: '1px solid var(--ifm-toc-border-color)'}}>
            <th style={{padding: '0.75rem'}}>Method</th>
            <th style={{padding: '0.75rem'}}>Purpose</th>
            <th style={{padding: '0.75rem'}}>Returns</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>map()</code></td>
            <td style={{padding: '0.75rem'}}>Transform every item</td>
            <td style={{padding: '0.75rem'}}>New array</td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>filter()</code></td>
            <td style={{padding: '0.75rem'}}>Keep matching items</td>
            <td style={{padding: '0.75rem'}}>New array</td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>find()</code></td>
            <td style={{padding: '0.75rem'}}>Find first matching item</td>
            <td style={{padding: '0.75rem'}}>Item / <code>undefined</code></td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>findIndex()</code></td>
            <td style={{padding: '0.75rem'}}>Find first matching item's position</td>
            <td style={{padding: '0.75rem'}}>Index / <code>-1</code></td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>some()</code></td>
            <td style={{padding: '0.75rem'}}>Does at least one match?</td>
            <td style={{padding: '0.75rem'}}>Boolean</td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>every()</code></td>
            <td style={{padding: '0.75rem'}}>Do all match?</td>
            <td style={{padding: '0.75rem'}}>Boolean</td>
          </tr>
          <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
            <td style={{padding: '0.75rem'}}><code>includes()</code></td>
            <td style={{padding: '0.75rem'}}>Does this value exist?</td>
            <td style={{padding: '0.75rem'}}>Boolean</td>
          </tr>
          <tr>
            <td style={{padding: '0.75rem'}}><code>reduce()</code></td>
            <td style={{padding: '0.75rem'}}>Build one final result</td>
            <td style={{padding: '0.75rem'}}>Anything</td>
          </tr>
        </tbody>
      </table>

      <h3>Quick mental models</h3>
      <div className="code-block">
        <pre><code>{`map
"I want to transform EVERY item."

filter
"I want to KEEP some items."

find
"I want the FIRST item that matches."

findIndex
"I want the POSITION of the first matching item."

some
"Does AT LEAST ONE match?"

every
"Do ALL match?"

includes
"Does this exact value exist?"

reduce
"What FINAL RESULT am I building from this array?"`}</code></pre>
      </div>

      <h2>Common interview traps</h2>
      
      <h3>map() doesn't mutate the original array</h3>
      <div className="code-block">
        <pre><code>{`const result = numbers.map(num => num * 2);`}</code></pre>
      </div>
      <p>Creates a new array.</p>

      <h3>filter() returns all matches</h3>
      <div className="code-block">
        <pre><code>{`[10, 20, 20].filter(num => num === 20);
// [20, 20]`}</code></pre>
      </div>

      <h3>find() returns only the first</h3>
      <div className="code-block">
        <pre><code>{`[10, 20, 20].find(num => num === 20);
// 20`}</code></pre>
      </div>

      <h3>find() vs filter() when nothing matches</h3>
      <div className="code-block">
        <pre><code>{`filter(...)
// []

find(...)
// undefined`}</code></pre>
      </div>

      <h3>findIndex() when nothing matches</h3>
      <div className="code-block">
        <pre><code>{`findIndex(...)
// -1`}</code></pre>
      </div>

      <h3>some() vs every()</h3>
      <div className="code-block">
        <pre><code>{`some  → one or more
every → all`}</code></pre>
      </div>

      <h3>includes() checks values</h3>
      <p>For primitives:</p>
      <div className="code-block">
        <pre><code>{`[1, 2, 3].includes(2);
// true`}</code></pre>
      </div>
      <p>For objects, reference equality matters.</p>

      <h3>reduce() doesn't automatically mean "sum"</h3>
      <p>This is a common beginner misconception.</p>
      <p><code>reduce()</code> can produce:</p>
      <div className="code-block">
        <pre><code>{`100`}</code></pre>
      </div>
      <p>or:</p>
      <div className="code-block">
        <pre><code>{`"hello"`}</code></pre>
      </div>
      <p>or:</p>
      <div className="code-block">
        <pre><code>{`{}`}</code></pre>
      </div>
      <p>or:</p>
      <div className="code-block">
        <pre><code>{`[]`}</code></pre>
      </div>
      <p>The <strong>accumulator's purpose is defined by you</strong>.</p>

      <h2>One final way to remember everything</h2>
      <p>Imagine you have:</p>
      <div className="code-block">
        <pre><code>{`const users = [...];`}</code></pre>
      </div>
      <p>Ask yourself what you need:</p>
      <div className="code-block">
        <pre><code>{`Need to modify every user?
        ↓
      map()

Need only users matching a condition?
        ↓
     filter()

Need one particular user?
        ↓
      find()

Need that user's position?
        ↓
   findIndex()

Need to know if at least one exists?
        ↓
      some()

Need to know if everyone satisfies it?
        ↓
     every()

Need to check whether a value exists?
        ↓
    includes()

Need to calculate/build something from the whole array?
        ↓
     reduce()`}</code></pre>
      </div>
      <p>This is the <strong>quick-revision version</strong> I'd recommend keeping on your learning website. For your interview preparation, the most important ones to be able to <strong>write from scratch without thinking</strong> are <code>map</code>, <code>filter</code>, <code>find</code>, <code>some</code>, <code>every</code>, and especially <code>reduce</code>.</p>
    </div>
  );
}