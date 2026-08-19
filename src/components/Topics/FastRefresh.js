export default function FastRefresh() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">Fast Refresh vs Hot Reload</h1>
      <p className="topic-subtitle">These are both developer experience features but they work completely differently.</p>
      
      <div className="topic-section">
        <h2>Hot Reload (Old: Deprecated)</h2>
        <p>Hot Reload tried to inject updated code into the running app while preserving the current app state.</p>
        
        <h3>How it worked:</h3>
        <p>When you saved a file, Hot Reload would:</p>
        <ul>
          <li>Re-evaluate only the changed module</li>
          <li>Try to swap it into the running app</li>
          <li>Keep all existing state intact</li>
        </ul>
        
        <div className="glass-card p-6 delay-100 animate-slide-up" style={{ padding: '24px', margin: '24px 0', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
          <h3 style={{ color: '#ef4444' }}>Why it was unreliable:</h3>
          <p>Preserving state while swapping out code modules is fundamentally complex. Hot Reload would frequently:</p>
          <ul>
            <li>Get confused about what state to preserve</li>
            <li>Cause subtle bugs where old and new code mixed</li>
            <li>Require a full reload to fix strange behavior</li>
            <li>Simply not work for many code patterns</li>
          </ul>
          <p>Developers ended up doing full reloads anyway, making Hot Reload more frustrating than helpful.</p>
        </div>
      </div>

      <div className="topic-section">
        <h2>Fast Refresh (New: Current)</h2>
        <p>Fast Refresh was introduced in React Native 0.61 and completely replaced Hot Reload. It was built in collaboration with the React team.</p>
        
        <h3>How it works:</h3>
        <p>Fast Refresh understands React's component model deeply. When you save a file:</p>
        <ul>
          <li><strong>If you edited a React component:</strong> Fast Refresh re-renders ONLY that component and its children: preserving state where it's safe to do so (local <code>useState</code> values are preserved).</li>
          <li><strong>If you edited a non-component JS file:</strong> Fast Refresh re-evaluates that module and all modules that import it.</li>
          <li><strong>If you made an error:</strong> Fast Refresh shows a red error overlay. When you fix the error, it automatically recovers without needing a manual reload.</li>
        </ul>
        
        <div className="highlight-box glass-card delay-200 animate-fade-in" style={{ borderColor: 'var(--accent-indigo)' }}>
          <h3>The key insight: when state IS and ISN'T preserved:</h3>
          <div className="code-block">
            <pre>
              <code>
{`// State IS preserved on Fast Refresh 
function Counter() { 
  const [count, setCount] = useState(0)  // ← preserved 
  return <Text>{count}</Text> 
} 
 
// State is NOT preserved if you change hooks 
function Counter() { 
  const [count, setCount] = useState(0) 
  const [name, setName] = useState('')  // ← added new hook = full remount 
  return <Text>{count}</Text> 
}`}
              </code>
            </pre>
          </div>
          <p>Adding or removing hooks causes a full remount because React can't safely reconcile different hook orders.</p>
        </div>
      </div>
    </div>
  );
}
