export default function PlanDay3() {
  return (
    <div className="topic-section">
      <h2>DAY 3 — Build the RN application</h2>
      <p>No AI writing the implementation. <strong>You write.</strong> We'll establish:</p>
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
└── assets/ `}</code></pre>
      </div>
      <p>But we won't blindly copy that structure. You'll understand why each layer exists.</p>
      <ul>
        <li>Navigation</li>
        <li>Reusable components</li>
        <li>Forms</li>
        <li>Loading states, error states, empty states</li>
        <li>Basic persistence</li>
      </ul>
    </div>
  );
}