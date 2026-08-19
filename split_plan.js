const fs = require('fs');

const files = {
  'PlanOverview': `export default function PlanOverview() {
  return (
    <div className="topic-section">
      <h1>The 7-Day React Native Engineering Plan</h1>
      
      <p><strong>Track 1 — JS fundamentals/runtime:</strong> completed and tested.</p>
      <p><strong>Track 2 — this, call/apply/bind:</strong> intentionally paused.</p>
      <p><strong>Track 3 — Objects & Prototypes:</strong> completed and tested.</p>
      <p><strong>Track 4 — Type System & Coercion:</strong> completed.</p>

      <p>You already have prior React Native experience; we're now rebuilding independent implementation confidence + deeper engineering understanding. You want to target the knowledge level expected from a ~3-year RN engineer, not just memorize interview answers.</p>

      <div className="admonition">
        <p><strong>🔥 The Goal for the next 7 days isn't:</strong> "Finish the React Native syllabus."</p>
        <p><strong>The Goal is:</strong> "By Monday, I can confidently sit in front of a 3-year RN interviewer and reason through JavaScript, React, React Native, architecture, APIs, Redux, performance, debugging, and production problems."</p>
      </div>
    </div>
  );
}`,
  'PlanDay1': `export default function PlanDay1() {
  return (
    <div className="topic-section">
      <h2>DAY 1 — JavaScript + RN foundation</h2>
      <h3>JS — Practical</h3>
      <p>We start where we stopped: <code>map</code>, <code>filter</code>, <code>find</code>, <code>findIndex</code>, <code>some</code>, <code>every</code>, <code>includes</code>, <code>reduce</code>, <code>sort</code>, <code>slice</code>, <code>splice</code>, <code>flat</code>, <code>flatMap</code>.</p>
      <p>But no 2-hour lectures on each method. You'll learn the behavior quickly → solve problems → combine methods → solve real API-data transformations.</p>
      <ul>
        <li>Immutability</li>
        <li>Object/array transformations</li>
        <li>Common coding-round patterns</li>
      </ul>

      <h3>RN — Architecture Deep Dive</h3>
      <ul>
        <li>Old Architecture</li>
        <li>Bridge</li>
        <li>Why it became a bottleneck</li>
        <li>JSI</li>
        <li>TurboModules</li>
        <li>Codegen</li>
        <li>Fabric</li>
        <li>Hermes</li>
        <li>Bridgeless / New Architecture</li>
      </ul>
      <p><em>And I will make you explain it without memorized wording.</em></p>
    </div>
  );
}`,
  'PlanDay2': `export default function PlanDay2() {
  return (
    <div className="topic-section">
      <h2>DAY 2 — React deeply</h2>
      <p>This is extremely important. We'll go beyond hooks.</p>
      <h3>React internals</h3>
      <ul>
        <li>JSX, Virtual DOM, Fiber</li>
        <li>Reconciliation, render phase, commit phase</li>
        <li>Component identity, keys</li>
        <li>Mounting/updating/unmounting</li>
        <li>State preservation, batching</li>
      </ul>

      <h3>Hooks</h3>
      <p>You already studied hooks, so we'll connect them to the internals:</p>
      <ul>
        <li><code>useState</code>, <code>useEffect</code>, <code>useLayoutEffect</code></li>
        <li><code>useRef</code>, <code>useMemo</code>, <code>useCallback</code>, <code>useReducer</code></li>
        <li>Custom hooks</li>
      </ul>
      <p>And especially: <strong>Why did this component render again?</strong> (That's a very common real-world RN question).</p>
    </div>
  );
}`,
  'PlanDay3': `export default function PlanDay3() {
  return (
    <div className="topic-section">
      <h2>DAY 3 — Build the RN application</h2>
      <p>No AI writing the implementation. <strong>You write.</strong> We'll establish:</p>
      <div className="code-block">
        <pre><code>{\`src/ 
├── components/ 
├── screens/ 
├── navigation/ 
├── features/ 
├── services/ 
├── store/ 
├── hooks/ 
├── utils/ 
├── constants/ 
├── theme/ 
└── assets/ \`}</code></pre>
      </div>
      <p>But we won't blindly copy that structure. You'll understand why each layer exists.</p>
      <ul>
        <li>Navigation</li>
        <li>Reusable components</li>
        <li>Forms</li>
        <li>Loading states, error states, empty states</li>
        <li>Basic persistence</li>
      </ul>
    </div>
  );
}`,
  'PlanDay4': `export default function PlanDay4() {
  return (
    <div className="topic-section">
      <h2>DAY 4 — REST APIs + Redux</h2>
      <h3>REST Deep practical understanding:</h3>
      <ul>
        <li>HTTP (GET/POST/PUT/PATCH/DELETE)</li>
        <li>Status codes, headers</li>
        <li>Authentication, access tokens, refresh tokens</li>
        <li>Axios/fetch (interceptors, cancellation, timeout, retry)</li>
        <li>Pagination, infinite scrolling</li>
        <li>Race conditions, API errors</li>
      </ul>

      <h3>Redux</h3>
      <p>Store → Action → Reducer → State → Selector → Component.</p>
      <p>But we'll go further:</p>
      <ul>
        <li>Redux Toolkit, middleware, thunk</li>
        <li>Selectors, normalized state, memoized selectors</li>
        <li>Redux vs local state</li>
        <li>Server state vs client state</li>
        <li>Unnecessary subscriptions, immutable updates</li>
      </ul>
    </div>
  );
}`,
  'PlanDay5': `export default function PlanDay5() {
  return (
    <div className="topic-section">
      <h2>DAY 5 — Performance</h2>
      <p>This is where we start thinking like an experienced RN developer.</p>
      <h3>React performance</h3>
      <ul>
        <li>Unnecessary renders, referential equality</li>
        <li><code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code></li>
        <li>State placement, context performance</li>
      </ul>
      <h3>RN performance</h3>
      <ul>
        <li>JS thread vs UI thread</li>
        <li>Fabric</li>
        <li>FlatList (virtualization, windowSize, initialNumToRender, maxToRenderPerBatch, getItemLayout, stable keys)</li>
        <li>Expensive renders, image optimization, memory, animations (Reanimated)</li>
      </ul>
      <p>But the important part: <strong>How do you find the bottleneck before optimizing?</strong></p>
    </div>
  );
}`,
  'PlanDay6': `export default function PlanDay6() {
  return (
    <div className="topic-section">
      <h2>DAY 6 — Production engineering</h2>
      <p>This day is extremely valuable for your 3-year target. We'll go through real scenarios:</p>
      <ul>
        <li><strong>Crash:</strong> "The app crashes only in production." What do you do?</li>
        <li><strong>Android:</strong> "Debug works, release APK crashes." What do you investigate?</li>
        <li><strong>Performance:</strong> "Scrolling 2,000 products is laggy." How do you find the cause?</li>
        <li><strong>Networking:</strong> "API occasionally returns duplicate requests." Why?</li>
        <li><strong>State:</strong> "Changing one Redux value causes the entire screen to render." Why?</li>
        <li><strong>Memory:</strong> "Memory usage keeps increasing." What could cause it?</li>
        <li><strong>Dependency:</strong> "You installed a library and Gradle now reports duplicate classes." How do you debug it?</li>
      </ul>
      <p>We'll cover: Logcat, Xcode logs, crash reports, source maps, Crashlytics/Sentry concepts, release builds, native errors vs JS errors, dependency conflicts, Gradle, CocoaPods, debugging methodology.</p>
    </div>
  );
}`,
  'PlanDay7': `export default function PlanDay7() {
  return (
    <div className="topic-section">
      <h2>DAY 7 — Interview simulation</h2>
      <p>No studying. We test you.</p>
      <ul>
        <li><strong>Round 1 — JavaScript:</strong> closures, scope, hoisting, event loop, promises, async/await, objects, prototypes, coercion, arrays, coding problems.</li>
        <li><strong>Round 2 — React:</strong> rendering, reconciliation, Fiber, hooks, state, performance, effects, memoization.</li>
        <li><strong>Round 3 — React Native:</strong> architecture, Bridge, JSI, Fabric, TurboModules, Codegen, Hermes, navigation, native modules, performance, debugging.</li>
        <li><strong>Round 4 — Production scenarios:</strong> I'll give you situations and you tell me: What would you do?</li>
        <li><strong>Round 5 — Coding:</strong> You solve problems without AI.</li>
      </ul>
    </div>
  );
}`,
  'PlanRules': `export default function PlanRules() {
  return (
    <div className="topic-section">
      <h2>One important change from our previous plan</h2>
      <p>We will not try to complete every possible RN topic in seven days. We'll cover the highest-value 3-year RN knowledge first, and then use whatever time remains for secondary topics (Push notifications, Deep linking, Offline sync, Testing, CI/CD, Native modules, etc).</p>
      <p>That's much better than rushing through 100 topics and remembering 20%.</p>

      <div className="admonition admonition-important" style={{marginTop: '2rem', borderColor: '#f0ad4e'}}>
        <h3>Your biggest objective this week</h3>
        <p>There's something more important than memorizing architecture: <strong>Get your independent coding ability back.</strong></p>
        <p>AI is your reviewer/teacher, not your coder. When we build the app:</p>
        <ul>
          <li>❌ "Give me the complete screen."</li>
          <li>✅ "I implemented the screen. Review it."</li>
          <li>❌ "Build Redux architecture for me."</li>
          <li>✅ "This is how I structured Redux. Is this scalable?"</li>
          <li>❌ "Fix this code."</li>
          <li>✅ "Here's the error and my reasoning. Help me find what's wrong."</li>
        </ul>
        <p>That discomfort you're going to feel is exactly what we want. Because in the interview there is no AI autocomplete.</p>
      </div>
    </div>
  );
}`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(\`src/components/Topics/\${name}.js\`, content);
}
