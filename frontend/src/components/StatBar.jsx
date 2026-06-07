function StatBar({ label, value, emoji }) {
  const clamped = Math.min(100, Math.max(0, value));

  const barBg =
    clamped < 25 ? "#ef4444" : clamped < 50 ? "#facc15" : "#22c55e";

  const labelColor =
    clamped < 25 ? "#ef4444" : clamped < 50 ? "#eab308" : "#374151";

  return (
    <div style={{ marginBottom: "1rem" }}>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "0.5rem" }}>
        <span>{emoji} {label}</span>
        <span style={{ color: labelColor }}>
          {clamped}%
        </span>
      </div>

      <div style={{
        width: "100%",
        backgroundColor: "#e5e7eb",
        borderRadius: "9999px",
        height: "10px",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${clamped}%`,
          backgroundColor: barBg,
          height: "10px",
          borderRadius: "9999px",
          transition: "width 0.5s ease, background-color 0.5s ease",
        }} />
      </div>

    </div>
  );
}

export default StatBar;