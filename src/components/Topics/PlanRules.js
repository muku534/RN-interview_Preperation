export default function PlanRules() {
  return (
    <div className="topic-section">
      <h2>One important change from our previous plan</h2>
      <p>We will not try to complete every possible RN topic in seven days.</p>
      <p>There are always more topics:</p>
      <ul>
        <li>Push notifications</li>
        <li>Deep linking</li>
        <li>Offline sync</li>
        <li>Testing</li>
        <li>Security</li>
        <li>CI/CD</li>
        <li>App Store deployment</li>
        <li>Native modules</li>
        <li>Swift/Kotlin</li>
        <li>etc.</li>
      </ul>
      <p>We'll cover the highest-value 3-year RN knowledge first, and then use whatever time remains for secondary topics.</p>
      <p>That's much better than rushing through 100 topics and remembering 20%.</p>

      <div className="admonition admonition-important" style={{marginTop: '2rem', borderColor: '#f0ad4e'}}>
        <h3>Your biggest objective this week</h3>
        <p>There's something more important than memorizing architecture:</p>
        <p><strong>Get your independent coding ability back.</strong></p>
        <p>You've told me that recently you've been doing experiments and fun projects, but you've also been using AI heavily in development.</p>
        <p>So for this week:</p>
        <p><strong>AI is your reviewer/teacher, not your coder.</strong></p>
        
        <p>When we build the app:</p>
        <p>❌ "Give me the complete screen."</p>
        <p>Instead:</p>
        <p>✅ "I implemented the screen. Review it."</p>

        <p>❌ "Build Redux architecture for me."</p>
        <p>Instead:</p>
        <p>✅ "This is how I structured Redux. Is this scalable?"</p>

        <p>❌ "Fix this code."</p>
        <p>Instead:</p>
        <p>✅ "Here's the error and my reasoning. Help me find what's wrong."</p>
        
        <p>That discomfort you're going to feel is exactly what we want.</p>
        <p>Because in the interview there is no AI autocomplete.</p>
      </div>
    </div>
  );
}