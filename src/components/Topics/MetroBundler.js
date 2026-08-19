export default function MetroBundler() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">Metro Bundler</h1>
      <p className="topic-subtitle">Metro is React Native's JavaScript bundler: built by Meta specifically for React Native. When you run <code>npx react-native start</code>, you're starting Metro.</p>
      
      <div className="topic-section">
        <h2>What Metro Actually Does</h2>
        
        <div className="highlight-box glass-card delay-100 animate-slide-up">
          <h3>Step 1: Resolution</h3>
          <p>Metro starts from your entry file (<code>index.js</code>) and follows every import and require statement, building a complete map of every file your app needs.</p>
        </div>
        
        <div className="highlight-box glass-card delay-200 animate-slide-up">
          <h3>Step 2: Transformation</h3>
          <p>Each file goes through a transformer. For JS/TS files, this means running Babel to convert modern JavaScript (ES2022, JSX, TypeScript) into JavaScript that the JS engine on the device can actually run.</p>
          
          <div className="code-block" style={{ marginTop: '16px' }}>
            <pre>
              <code>
{`// You write this 
const greeting = (name: string) => \`Hello \${name}\` 
 
// Metro transforms to this (simplified) 
var greeting = function(name) { return 'Hello ' + name }`}
              </code>
            </pre>
          </div>
        </div>
        
        <div className="highlight-box glass-card delay-300 animate-slide-up">
          <h3>Step 3: Serialization</h3>
          <p>Metro takes all the transformed files and combines them into a single bundle file: <code>main.jsbundle</code>. This is what actually gets shipped with your app.</p>
        </div>
      </div>

      <div className="topic-section">
        <h2>How Metro Serves in Development</h2>
        <p>In development, Metro runs a local server (default port 8081). Your app doesn't have a static bundle: it fetches the bundle from Metro over your local network.</p>
        <p>When you change a file, Metro only re-processes that file and its dependents: not the entire bundle. This is what enables Fast Refresh.</p>
      </div>

      <div className="topic-section">
        <h2>Module System</h2>
        <p>Metro uses CommonJS (<code>require</code>) under the hood but supports ES modules (<code>import/export</code>) by transforming them. It also supports <strong>Haste</strong>: Meta's module system where you can import by filename without relative paths.</p>
      </div>
    </div>
  );
}
