export default function PlanDay1() {
  return (
    <div className="topic-section">
      <h2>DAY 1 — JavaScript + RN foundation</h2>
      <h3>JS — practical</h3>
      <p>We start where we stopped:</p>
      <ul>
        <li>map</li>
        <li>filter</li>
        <li>find</li>
        <li>findIndex</li>
        <li>some</li>
        <li>every</li>
        <li>includes</li>
        <li>reduce</li>
        <li>sort</li>
        <li>slice</li>
        <li>splice</li>
        <li>flat</li>
        <li>flatMap</li>
      </ul>
      <p>But no 2-hour lectures on each method.</p>
      <p>You'll learn the behavior quickly → solve problems → combine methods → solve real API-data transformations.</p>
      
      <p>Then:</p>
      <ul>
        <li>immutability</li>
        <li>object/array transformations</li>
        <li>common coding-round patterns</li>
      </ul>

      <h3>RN — architecture</h3>
      <p>Deep dive:</p>
      <div className="code-block" style={{background: 'transparent', padding: 0}}>
        <pre style={{background: 'transparent', margin: 0}}><code>Old Architecture 
    ↓ 
Bridge 
    ↓ 
Why it became a bottleneck 
    ↓ 
JSI 
    ↓ 
TurboModules 
    ↓ 
Codegen 
    ↓ 
Fabric 
    ↓ 
Hermes 
    ↓ 
Bridgeless / New Architecture</code></pre>
      </div>
      <p>And I will make you explain it without memorized wording.</p>
    </div>
  );
}