import { useState } from "react";

const App = () => {
  const [som, setSom] = useState("");
  const [usd, setUsd] = useState("");

  const kurs = 12500;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>So'm</h1>
      <input
        style={styles.input}
        type="number"
        placeholder="So'm"
        value={som}
        onChange={(e) => {
          setSom(e.target.value);
          setUsd(e.target.value / kurs);
        }}
      />

      <h1 style={styles.title}>Usd</h1>
      <input
        style={styles.input}
        type="number"
        value={usd}
        placeholder="usd"
        onChange={(e) => {
          setUsd(e.target.value);
          setSom(e.target.value * kurs);
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "25px",
    textAlign: "center",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    fontFamily: "sans-serif",
  },
  title: {
    margin: "10px 0",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  },
};

export default App;