export default function PlanRules() {
  return (
    <div className="topic-section">
      <h2>One important change from our previous plan</h2>
      <p>We will not try to complete every possible RN topic in seven days. We'll cover the highest-value 3-year RN knowledge first, and then use whatever time remains for secondary topics (Push notifications, Deep linking, Offline sync, Testing, CI/CD, Native modules, etc).</p>
      <p>That's much better than rushing through 100 topics and remembering 20%.</p>

      <div className="admonition admonition-important" style={{marginTop: '2rem', borderColor: '#f0ad4e'}}>
        <h3>Your biggest objective this week</h3>
        <p>There's something more important than memorizing architecture: <strong>Get your independent coding ability back.</strong></p>
        <p>AI is your reviewer/teacher, not your coder. When we build the app:</p>
        <ul>
          <li>❌ "Give me the complete screen."</li>
          <li>✅ "I implemented the screen. Review it."</li>
          <li>❌ "Build Redux architecture for me."</li>
          <li>✅ "This is how I structured Redux. Is this scalable?"</li>
          <li>❌ "Fix this code."</li>
          <li>✅ "Here's the error and my reasoning. Help me find what's wrong."</li>
        </ul>
        <p>That discomfort you're going to feel is exactly what we want. Because in the interview there is no AI autocomplete.</p>
      </div>
    </div>
  );
}