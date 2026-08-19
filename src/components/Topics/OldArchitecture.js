export default function OldArchitecture() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">The Old Architecture</h1>
      <p className="topic-subtitle">Before understanding the new architecture, you must understand what problem it was solving.</p>
      
      <div className="topic-section glass-card p-6">
        <h2>How React Native Originally Worked</h2>
        <p>
          When you write React Native code, you write JavaScript. But your phone doesn't understand JavaScript natively: it understands native code (Java/Kotlin for Android, Objective-C/Swift for iOS).
        </p>
        <p>
          So React Native needed a way to make JavaScript talk to native. They built something called <strong>The Bridge</strong>.
        </p>
      </div>

      <div className="topic-section">
        <h2>How The Bridge Actually Worked</h2>
        <div className="highlight-box glass-card delay-100 animate-slide-up">
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>Step 1</strong>: Your JS code wants to do something native. Example: open the camera.</li>
            <li><strong>Step 2</strong>: JS serializes (converts) that request into a JSON message and puts it on the bridge.</li>
            <li><strong>Step 3</strong>: The bridge carries that JSON across to the native side asynchronously.</li>
            <li><strong>Step 4</strong>: Native side deserializes (reads) the JSON, performs the action, gets the result.</li>
            <li><strong>Step 5</strong>: Native serializes the result back to JSON and sends it back across the bridge.</li>
            <li><strong>Step 6</strong>: JS receives and deserializes the response.</li>
          </ol>
        </div>
      </div>

      <div className="topic-section">
        <h2>Why The Bridge Was Slow: The Real Problems</h2>
        <ul>
          <li>
            <strong>Problem 1: Serialization cost:</strong> Every single message had to be converted to JSON and back. Converting complex objects to JSON strings and parsing them back thousands of times per second is expensive. Imagine doing this for every touch event, every animation frame, every scroll position update.
          </li>
          <li>
            <strong>Problem 2: Asynchronous only:</strong> The bridge was completely async. JS could never directly call a native function and get an immediate result. Everything was fire-and-forget with callbacks. This made certain operations impossible to do synchronously.
          </li>
          <li>
            <strong>Problem 3: The bottleneck problem:</strong> The bridge was a single lane road. All communication between JS and native had to go through this one channel. High traffic = congestion = dropped frames = janky animations.
          </li>
          <li>
            <strong>Problem 4: Animation was painful:</strong> Animations need to update 60 times per second (60fps). Each frame, JS had to send position/opacity/transform values across the bridge to native. At 60fps, if the bridge got congested even slightly, frames were dropped and animations looked choppy.
          </li>
        </ul>
        <div className="highlight-box delay-200 animate-fade-in" style={{ borderColor: 'var(--accent-purple)' }}>
          <p>
            This is why React Native animations used to be notoriously difficult: libraries like <code>react-native-reanimated</code> were built specifically to move animation logic OFF the JS thread and run it directly on the UI thread to bypass the bridge.
          </p>
        </div>
      </div>
    </div>
  );
}
