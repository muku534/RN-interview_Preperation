export default function ThreadModel() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">The Three Threads</h1>
      <p className="topic-subtitle">This is fundamental to understanding every performance issue you'll ever face in React Native.</p>
      
      <div className="topic-section">
        <h2>Thread 1: JavaScript Thread</h2>
        <p>This is where all your code runs. Everything you write: components, Redux logic, API calls, business logic, event handlers: executes here.</p>
        <div className="highlight-box glass-card delay-100 animate-slide-up" style={{ borderColor: 'var(--accent-cyan)' }}>
          <p><strong>It runs on a single thread.</strong> This is critical. JavaScript is single-threaded by nature. There is only ONE JS thread and everything competes for it.</p>
        </div>
        
        <h3>What blocks the JS thread:</h3>
        <ul>
          <li>Heavy computations (sorting large arrays, complex calculations)</li>
          <li>Synchronous operations</li>
          <li>Poorly optimized loops</li>
          <li>Large JSON parsing</li>
        </ul>
        
        <p><strong>Why blocking the JS thread is catastrophic:</strong> When the JS thread is busy, it cannot process touch events, cannot respond to user input, cannot update state. The app feels completely frozen even if the UI thread is fine.</p>
        
        <div className="code-block">
          <pre>
            <code>
{`// This will freeze your entire app for however long it takes 
const result = hugeArray.sort((a, b) => complexComparison(a, b))`}
            </code>
          </pre>
        </div>
        <p><em>Solution:</em> Offload heavy work using <code>InteractionManager.runAfterInteractions()</code> or move to a background thread.</p>
      </div>

      <div className="topic-section">
        <h2>Thread 2: Shadow Thread (Yoga Layout Engine)</h2>
        <p>This thread handles all layout calculations.</p>
        <p>When you write styles like <code>{'flex: 1, justifyContent: \'center\''}</code>, the Shadow thread takes these styles and calculates the exact pixel positions: where on screen each element goes, how wide, how tall, accounting for screen density, safe areas, etc.</p>
        
        <div className="glass-card p-6 delay-200 animate-fade-in" style={{ padding: '20px', margin: '20px 0' }}>
          <p>React Native uses <strong>Yoga</strong>: Facebook's open source cross-platform layout engine written in C++. Yoga implements the Flexbox specification so your layouts work the same on iOS and Android.</p>
          <p style={{ marginTop: '10px', color: 'var(--accent-indigo)' }}><em>JS → Shadow → UI</em></p>
          <p>In the new architecture, much of this work is done in C++ directly, making it faster.</p>
        </div>
      </div>

      <div className="topic-section">
        <h2>Thread 3: Main/UI Thread</h2>
        <p>This is the most important thread on the device. It's the native thread that Android and iOS use to render everything on screen and handle all touch input.</p>
        
        <div className="highlight-box glass-card delay-300 animate-slide-up" style={{ borderColor: '#ef4444' }}>
          <h3 style={{ color: '#ef4444' }}>The Golden Rule</h3>
          <p><strong>The UI thread must NEVER be blocked. Ever.</strong></p>
          <p>The device renders at 60fps (or 120fps). That means the UI thread has 16.67 milliseconds to complete everything it needs to do for each frame. If anything blocks it longer than that, you drop a frame. Users feel this as jank.</p>
        </div>
        
        <h3>What runs on the UI thread:</h3>
        <ul>
          <li>Rendering native views</li>
          <li>Processing touch events</li>
          <li>Running animations</li>
          <li>System UI updates</li>
        </ul>
        <p>Because JS → Shadow → UI communication introduces overhead, libraries like <code>react-native-reanimated</code> run animation worklets directly on the UI thread, bypassing the JS thread entirely.</p>
      </div>
    </div>
  );
}
