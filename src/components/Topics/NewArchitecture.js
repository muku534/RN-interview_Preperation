export default function NewArchitecture() {
  return (
    <div className="topic-container">
      <h1 className="topic-title text-gradient">The New Architecture</h1>
      <p className="topic-subtitle">React Native completely rebuilt their architecture from scratch to fix every bridge problem. Released progressively from 2022, default from RN 0.73+.</p>
      
      <div className="topic-section">
        <h2>JSI: JavaScript Interface</h2>
        <p>JSI is the replacement for the Bridge. Instead of sending JSON messages asynchronously, JSI allows JavaScript to hold direct references to native objects and call native functions synchronously: like they're just regular JavaScript functions.</p>
        
        <div className="highlight-box glass-card delay-100 animate-slide-up">
          <h3>How JSI actually works:</h3>
          <p>JSI exposes a C++ interface. Native modules register themselves with JSI. The JS engine (Hermes) can then call these native functions directly through C++: no JSON, no async wait, no bridge.</p>
          <p><em>Think of it like this: before JSI, JS and Native were two people communicating by writing letters (slow, delayed). With JSI, they're in the same room talking directly (instant).</em></p>
        </div>
        
        <h3>Real world impact:</h3>
        <ul>
          <li>Native modules can be called synchronously when needed</li>
          <li>No serialization overhead</li>
          <li>Significantly better performance for frequent native calls</li>
          <li>Enables things like synchronous storage reads, direct camera access etc.</li>
        </ul>
      </div>

      <div className="topic-section">
        <h2>TurboModules</h2>
        <p>TurboModules are the new native modules system built on top of JSI.</p>
        
        <h3>The Old Problem with Native Modules</h3>
        <p>In the old architecture, ALL native modules were initialized at app startup: whether you used them or not. Camera module, GPS module, Bluetooth module, payments module: all loaded into memory when the app opened. This made startup time slow.</p>
        
        <h3>How TurboModules Solve This</h3>
        <p>TurboModules are <strong>lazy loaded</strong>: they only initialize when your JavaScript code actually calls them for the first time.</p>
        
        <div className="code-block delay-200 animate-fade-in">
          <pre>
            <code>
{`// This native module doesn't load until this line actually executes 
const camera = TurboModuleRegistry.get('CameraModule')`}
            </code>
          </pre>
        </div>
        <p><strong>Additional benefit: type safety:</strong> TurboModules use Codegen to generate type-safe interfaces, catching mismatches at build time instead of runtime crashes.</p>
      </div>

      <div className="topic-section">
        <h2>Fabric</h2>
        <p>Fabric is the new rendering system: the replacement for the old UI Manager.</p>
        
        <div className="glass-card p-6 delay-300 animate-slide-up" style={{ padding: '24px', margin: '24px 0' }}>
          <h3>How Fabric Works</h3>
          <p>Fabric creates a shared ownership model between JS and native for the component tree. The UI is now represented as a C++ object tree that both the JS thread and the UI thread can access directly through JSI.</p>
          
          <h4 style={{ marginTop: '16px', marginBottom: '12px' }}>Key improvements Fabric brings:</h4>
          <ul>
            <li><strong>Synchronous rendering:</strong> The UI thread can now synchronously query and update layout information. This enables things like proper <code>useLayoutEffect</code> behavior and synchronous measurements.</li>
            <li><strong>Concurrent features:</strong> Fabric enables React 18 concurrent features in React Native: like <code>startTransition</code>, <code>Suspense</code>, and priority-based rendering.</li>
            <li><strong>Better error handling:</strong> Crashes in the rendering pipeline are now better contained and easier to debug.</li>
          </ul>
        </div>
      </div>

      <div className="topic-section">
        <h2>Codegen</h2>
        <p>Codegen is a build-time tool that automatically generates type-safe native code from your JavaScript/TypeScript definitions. It ensures JS and Native always speak the same language.</p>
        
        <div className="code-block">
          <pre>
            <code>
{`// NativeCameraModule.ts: your spec 
export interface Spec extends TurboModule { 
  takePhoto(options: PhotoOptions): Promise<PhotoResult> 
  requestPermission(): Promise<boolean> 
}`}
            </code>
          </pre>
        </div>
        <p>Codegen reads this at build time and automatically generates C++ interface code, Java/Kotlin boilerplate, and Objective-C/Swift boilerplate. Wrong types = build error, not runtime crash.</p>
      </div>
    </div>
  );
}
