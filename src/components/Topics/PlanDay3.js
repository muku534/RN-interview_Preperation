export default function PlanDay3() {
  return (
    <div className="topic-section">
      <h2>DAY 3 — Build the RN application</h2>
      <p>No AI writing the implementation.</p>
      <p>You write.</p>
      <p>We'll establish:</p>
      <div className="code-block">
        <pre><code>{`src/ 
├── components/ 
├── screens/ 
├── navigation/ 
├── features/ 
├── services/ 
├── store/ 
├── hooks/ 
├── utils/ 
├── constants/ 
├── theme/ 
└── assets/`}</code></pre>
      </div>
      <p>But we won't blindly copy that structure.</p>
      <p>You'll understand why each layer exists.</p>
      <p>Then:</p>
      <ul>
        <li>navigation</li>
        <li>reusable components</li>
        <li>forms</li>
        <li>loading states</li>
        <li>error states</li>
        <li>empty states</li>
        <li>basic persistence</li>
      </ul>
    </div>
  );
}