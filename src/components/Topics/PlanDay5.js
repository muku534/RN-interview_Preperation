export default function PlanDay5() {
  return (
    <div className="topic-section">
      <h2>DAY 5 — Performance</h2>
      <p>This is where we start thinking like an experienced RN developer.</p>
      <h3>React performance</h3>
      <ul>
        <li>Unnecessary renders, referential equality</li>
        <li><code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code></li>
        <li>State placement, context performance</li>
      </ul>
      <h3>RN performance</h3>
      <ul>
        <li>JS thread vs UI thread</li>
        <li>Fabric</li>
        <li>FlatList (virtualization, windowSize, initialNumToRender, maxToRenderPerBatch, getItemLayout, stable keys)</li>
        <li>Expensive renders, image optimization, memory, animations (Reanimated)</li>
      </ul>
      <p>But the important part: <strong>How do you find the bottleneck before optimizing?</strong></p>
    </div>
  );
}