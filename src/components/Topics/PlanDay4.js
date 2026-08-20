export default function PlanDay4() {
  return (
    <div className="topic-section">
      <h2>DAY 4 — REST APIs + Redux</h2>
      
      <h3>REST</h3>
      <p>Deep practical understanding:</p>
      <ul>
        <li>HTTP</li>
        <li>GET/POST/PUT/PATCH/DELETE</li>
        <li>status codes</li>
        <li>headers</li>
        <li>authentication</li>
        <li>access tokens</li>
        <li>refresh tokens</li>
        <li>Axios/fetch</li>
        <li>interceptors</li>
        <li>cancellation</li>
        <li>timeout</li>
        <li>retry</li>
        <li>pagination</li>
        <li>infinite scrolling</li>
        <li>race conditions</li>
        <li>API errors</li>
      </ul>

      <h3>Redux</h3>
      <p>Then:</p>
      <div className="code-block" style={{background: 'transparent', padding: 0}}>
        <pre style={{background: 'transparent', margin: 0}}><code>Store 
↓ 
Action 
↓ 
Reducer 
↓ 
State 
↓ 
Selector 
↓ 
Component</code></pre>
      </div>
      <p>But we'll go further:</p>
      <ul>
        <li>Redux Toolkit</li>
        <li>middleware</li>
        <li>thunk</li>
        <li>selectors</li>
        <li>normalized state</li>
        <li>memoized selectors</li>
        <li>Redux vs local state</li>
        <li>server state vs client state</li>
        <li>unnecessary subscriptions</li>
        <li>immutable updates</li>
      </ul>
    </div>
  );
}