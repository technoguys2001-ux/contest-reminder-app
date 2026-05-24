import React from "react";
import "./App.css";

function App() {
  const contests = [
    {
      platform: "Codeforces",
      name: "Codeforces Round #1001",
      time: "Tomorrow 8 PM",
      date: "25 May 2026",
      color: "#1f8ef1",
    },
    {
      platform: "LeetCode",
      name: "Weekly Contest 500",
      time: "Sunday 8 AM",
      date: "26 May 2026",
      color: "#ffa116",
    },
    {
      platform: "CodeChef",
      name: "Starters 200",
      time: "Wednesday 8 PM",
      date: "29 May 2026",
      color: "#5b4638",
    },
    {
      platform: "AtCoder",
      name: "Beginner Contest 400",
      time: "Saturday 6:30 PM",
      date: "31 May 2026",
      color: "#00c853",
    },
  ];

  return (
    <div className="app">
      <h1 className="title">🚀 Contest Reminder App</h1>

      <p className="subtitle">
        Track upcoming coding contests across platforms
      </p>

      <div className="contest-container">
        {contests.map((contest, index) => (
          <div
            className="card"
            key={index}
            style={{ borderTop: `5px solid ${contest.color}` }}
          >
            <h2>{contest.name}</h2>

            <p className="platform">
              <span>Platform:</span> {contest.platform}
            </p>

            <p className="time">
              <span>Time:</span> {contest.time}
            </p>

            <p className="date">
              <span>Date:</span> {contest.date}
            </p>

            <button
              onClick={() => {
                Notification.requestPermission().then((perm) => {
                  if (perm === "granted") {
                    new Notification("Contest Reminder ⏰", {
                      body: `${contest.name} starts on ${contest.date}`,
                    });
                  }
                });
              }}
            >
              Set Reminder ⏰
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;