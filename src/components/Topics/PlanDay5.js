export default function PlanDay5() {
  return (
    <div className="topic-section">
      <h2>DAY 5 — Performance</h2>
      <p>This is where we start thinking like an experienced RN developer.</p>
      
      <h3>React performance</h3>
      <ul>
        <li>unnecessary renders</li>
        <li>referential equality</li>
        <li>React.memo</li>
        <li>useMemo</li>
        <li>useCallback</li>
        <li>state placement</li>
        <li>context performance</li>
      </ul>
      
      <h3>RN performance</h3>
      <ul>
        <li>JS thread</li>
        <li>UI thread</li>
        <li>Fabric</li>
        <li>FlatList</li>
        <li>virtualization</li>
        <li>windowSize</li>
        <li>initialNumToRender</li>
        <li>maxToRenderPerBatch</li>
        <li>getItemLayout</li>
        <li>stable keys</li>
        <li>expensive renders</li>
        <li>image optimization</li>
        <li>memory</li>
        <li>animations</li>
        <li>Reanimated</li>
      </ul>
      
      <p>But the important part:</p>
      <p><strong>How do you find the bottleneck before optimizing?</strong></p>
    </div>
  );
}