import React from "react";
const contests = [
  {
    platform: "Codeforces",
    name: "Codeforces Round #1001",
    time: "Tomorrow 8:00 PM"
  },
  {
    platform: "LeetCode",
    name: "Weekly Contest 500",
    time: "Sunday 8:00 AM"
  },
  {
    platform: "CodeChef",
    name: "Starters 200",
    time: "Wednesday 8:00 PM"
  }
];

export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Contest Reminder App</h1>
      <p>Track upcoming coding contests easily.</p>

      {contests.map((contest, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "15px"
          }}
        >
          <h2>{contest.name}</h2>
          <p><strong>Platform:</strong> {contest.platform}</p>
          <p><strong>Time:</strong> {contest.time}</p>
        </div>
      ))}
    </div>
  );
}