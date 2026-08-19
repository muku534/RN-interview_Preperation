export default function CliVsExpo() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">React Native CLI vs Expo</h1>
      <p className="topic-subtitle">This is a genuinely important architectural decision and interviewers love asking about it.</p>
      
      <div className="topic-section">
        <h2>Expo: What It Actually Is</h2>
        <p>Expo is a platform and set of tools built on top of React Native. It's not a different framework: it's React Native with a lot of pre-configured tooling and a managed native layer.</p>
        
        <div className="glass-card p-6 delay-100 animate-slide-up" style={{ padding: '24px', margin: '24px 0' }}>
          <h3>Expo Managed Workflow</h3>
          <p>In managed workflow, Expo controls the native layer completely. You never see or touch iOS or Android folders.</p>
          
          <h4 style={{ marginTop: '16px', marginBottom: '8px' }}>What Expo provides:</h4>
          <ul>
            <li>Pre-built native modules for camera, location, notifications, sensors, etc.</li>
            <li>EAS Build: cloud build service (no need for Mac to build iOS)</li>
            <li>EAS Update: over-the-air JS updates without app store review</li>
            <li>Expo Go: instant testing on device without building</li>
            <li>Simplified configuration</li>
          </ul>
          
          <h4 style={{ marginTop: '16px', marginBottom: '8px', color: '#ef4444' }}>Expo limitations:</h4>
          <ul>
            <li>You can only use native modules that Expo supports</li>
            <li>If you need a native module Expo doesn't have, you're stuck</li>
            <li>Less control over native build configuration</li>
            <li>Slightly larger app size due to included SDK</li>
          </ul>
        </div>
      </div>

      <div className="topic-section">
        <h2>React Native CLI: Bare Workflow</h2>
        <p>CLI gives you the full, unmodified React Native setup with complete access to native code.</p>
        
        <div className="glass-card p-6 delay-200 animate-slide-up" style={{ padding: '24px', margin: '24px 0' }}>
          <h4 style={{ marginBottom: '8px' }}>CLI advantages:</h4>
          <ul>
            <li>Complete control over native code</li>
            <li>Any native module works</li>
            <li>Can write custom native modules</li>
            <li>Smaller app size (include only what you need)</li>
            <li>No dependency on Expo's release cycle</li>
          </ul>
          
          <h4 style={{ marginTop: '16px', marginBottom: '8px', color: '#ef4444' }}>CLI disadvantages:</h4>
          <ul>
            <li>Need Mac to build iOS</li>
            <li>More complex setup and configuration</li>
            <li>You manage all native dependencies yourself</li>
            <li>More knowledge required (Xcode, Android Studio, Gradle)</li>
          </ul>
        </div>
      </div>

      <div className="topic-section">
        <h2>When to Use Each: The Real Answer</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
          <div className="highlight-box glass-card delay-300 animate-fade-in" style={{ borderColor: 'var(--accent-cyan)', margin: 0, padding: '24px' }}>
            <h3 style={{ color: 'var(--accent-cyan)' }}>Choose Expo when:</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>Startup or MVP: ship fast</li>
              <li>Small team without native expertise</li>
              <li>Your feature requirements fit within Expo's SDK</li>
              <li>You want OTA updates without app store</li>
              <li>No Mac available for iOS builds</li>
            </ul>
          </div>
          
          <div className="highlight-box glass-card delay-300 animate-fade-in" style={{ borderColor: 'var(--accent-purple)', margin: 0, padding: '24px' }}>
            <h3 style={{ color: 'var(--accent-purple)' }}>Choose CLI when:</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>You need custom native modules (specific hardware, custom SDK)</li>
              <li>You have native developers on the team</li>
              <li>You need fine-grained control over build configuration</li>
              <li>Performance-critical app where bundle size matters</li>
              <li>Enterprise app with specific security or compliance requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
