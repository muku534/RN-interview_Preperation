export default function PlanDay6() {
  return (
    <div className="topic-section">
      <h2>DAY 6 — Production engineering</h2>
      <p>This day is extremely valuable for your 3-year target.</p>
      <p>We'll go through real scenarios:</p>
      
      <h3>Crash</h3>
      <p>"The app crashes only in production."</p>
      <p>What do you do?</p>
      
      <h3>Android</h3>
      <p>"Debug works, release APK crashes."</p>
      <p>What do you investigate?</p>
      
      <h3>Performance</h3>
      <p>"Scrolling 2,000 products is laggy."</p>
      <p>How do you find the cause?</p>
      
      <h3>Networking</h3>
      <p>"API occasionally returns duplicate requests."</p>
      <p>Why?</p>
      
      <h3>State</h3>
      <p>"Changing one Redux value causes the entire screen to render."</p>
      <p>Why?</p>
      
      <h3>Memory</h3>
      <p>"Memory usage keeps increasing."</p>
      <p>What could cause it?</p>
      
      <h3>Dependency</h3>
      <p>"You installed a library and Gradle now reports duplicate classes."</p>
      <p>How do you debug it?</p>
      
      <p>We'll cover:</p>
      <ul>
        <li>Logcat</li>
        <li>Xcode logs</li>
        <li>crash reports</li>
        <li>source maps</li>
        <li>Crashlytics/Sentry concepts</li>
        <li>release builds</li>
        <li>native errors vs JS errors</li>
        <li>dependency conflicts</li>
        <li>Gradle</li>
        <li>CocoaPods</li>
        <li>debugging methodology</li>
      </ul>
    </div>
  );
}