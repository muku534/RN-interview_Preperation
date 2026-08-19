export default function HermesEngine() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">Hermes Engine</h1>
      <p className="topic-subtitle">Hermes is a JavaScript engine built by Meta specifically for React Native. It replaced JavaScriptCore as the default JS engine.</p>
      
      <div className="topic-section">
        <h2>Why React Native Needed Its Own JS Engine</h2>
        <p>General purpose JS engines like V8 (Chrome) and JavaScriptCore (Safari) are optimized for desktop browsers: they optimize for long-running sessions where JIT (Just-In-Time) compilation pays off over time.</p>
        
        <div className="glass-card p-6 delay-100 animate-slide-up" style={{ padding: '24px', margin: '24px 0' }}>
          <h3>Mobile apps are different:</h3>
          <ul>
            <li>They start cold frequently</li>
            <li>Memory is constrained</li>
            <li>Battery matters</li>
            <li>Startup time directly affects user experience</li>
          </ul>
          <p>Hermes is optimized specifically for these mobile constraints.</p>
        </div>
      </div>

      <div className="topic-section">
        <h2>What Makes Hermes Different</h2>
        
        <h3>1. AOT Compilation (Ahead of Time)</h3>
        <p>Regular JS engines compile JavaScript to bytecode at runtime (JIT). Hermes compiles JavaScript to bytecode at <strong>build time</strong>: before the app even ships.</p>
        
        <div className="highlight-box glass-card delay-200 animate-fade-in" style={{ borderColor: 'var(--accent-cyan)' }}>
          <h4 style={{ marginBottom: '12px', color: 'var(--accent-cyan)' }}>Real world impact:</h4>
          <ul>
            <li><strong>Faster startup:</strong> no compilation step at runtime</li>
            <li><strong>Lower memory:</strong> bytecode is more compact than JS source</li>
            <li><strong>Better battery:</strong> less CPU work at startup</li>
          </ul>
        </div>
        
        <h3>2. Garbage Collection tuned for mobile</h3>
        <p>Hermes has a garbage collector tuned for mobile: it collects memory in smaller, more frequent increments rather than large pauses. This reduces the "GC pause" freezes that other engines can cause.</p>
      </div>

      <div className="topic-section">
        <h2>Hermes + Debugging</h2>
        <p>One tradeoff: Hermes bytecode is harder to debug than raw JS. React Native DevTools handles this with source maps that translate bytecode positions back to your original source code.</p>
      </div>
    </div>
  );
}
