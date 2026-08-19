export default function PlanDay4() {
  return (
    <div className="topic-section">
      <h2>DAY 4 — REST APIs + Redux</h2>
      <h3>REST Deep practical understanding:</h3>
      <ul>
        <li>HTTP (GET/POST/PUT/PATCH/DELETE)</li>
        <li>Status codes, headers</li>
        <li>Authentication, access tokens, refresh tokens</li>
        <li>Axios/fetch (interceptors, cancellation, timeout, retry)</li>
        <li>Pagination, infinite scrolling</li>
        <li>Race conditions, API errors</li>
      </ul>

      <h3>Redux</h3>
      <p>Store → Action → Reducer → State → Selector → Component.</p>
      <p>But we'll go further:</p>
      <ul>
        <li>Redux Toolkit, middleware, thunk</li>
        <li>Selectors, normalized state, memoized selectors</li>
        <li>Redux vs local state</li>
        <li>Server state vs client state</li>
        <li>Unnecessary subscriptions, immutable updates</li>
      </ul>
    </div>
  );
}