/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WelcomeNav from "../../WelcomeNav";
const EditDetails = () => {
  const [oxygenLevel, setOxygenLevel] = useState(1);
  const [members, setMembers] = useState("");
  const [total, setTotal] = useState("");
  const [machineryStatus, setMachineryStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ oxygenLevel, members, total, machineryStatus });
  };

  return (
    <>
      <WelcomeNav />
      <div style={styles.body}>
        <div style={styles.container}>
          <h1>Mine Details</h1>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="oxygen-level">Oxygen Level:</label>
              <select
                id="oxygen-level"
                value={oxygenLevel}
                onChange={(e) => setOxygenLevel(e.target.value)}
                style={styles.select}
              >
                {[...Array(100).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span>%</span>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="members">Active Members Count:</label>
              <input
                type="text"
                id="members"
                maxLength="20"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="total">Total Members:</label>
              <input
                type="number"
                id="total"
                maxLength="10"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <h1>Machinery Status</h1>
            <div style={styles.inputGroup}>
              <select
                id="machinery-status"
                value={machineryStatus}
                onChange={(e) => setMachineryStatus(e.target.value)}
                style={styles.select}
              >
                <option value="idle">Idle</option>
                <option value="running">Running</option>
                <option value="broken">Broken</option>
              </select>
            </div>

            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  body: {
    fontFamily: "'Lato', sans-serif",
    backgroundColor: "#f0f4f8",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    width: "100%",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default EditDetails;
