export default function PlanDay6() {
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
}