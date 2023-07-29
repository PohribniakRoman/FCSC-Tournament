import { useState } from "react";
import {BsFillGrid3X2GapFill} from "react-icons/bs";

const StandingsData = [
  { name: "AVGAN", scroe: { wins: 0, loses: 1 } },
  { name: "Пивний удар", scroe: { wins: 0, loses: 0 } },
  { name: "Sniffers", scroe: { wins: 0, loses: 0 } },
  { name: "Team Bobr", scroe: { wins: 0, loses: 1 } },
  { name: "НЕТРЕБА PLS", scroe: { wins: 1, loses: 0 } },
  { name: "DNRInside", scroe: { wins: 0, loses: 0 } },
  { name: "322 BEZERKER TEAM", scroe: { wins: 0, loses: 0 } },
  { name: "An4ous Kaban4ika", scroe: { wins: 1, loses: 0 } },
];

const ScheduleData = [
  {
    date: 29.07,
    time: "15:00",
    participants: [StandingsData[7], StandingsData[0]],
    completed: true,
    score: [0, 1],
  },
  {
    date: 29.07,
    time: "15:00",
    participants: [StandingsData[4], StandingsData[3]],
    completed: true,
    score: [1, 0],
  },
  {
    date: 29.07,
    time: "17:00",
    participants: [StandingsData[2], StandingsData[5]],
    completed: false,
    score: [0, 0],
  },
  {
    date: 29.07,
    time: "17:00",
    participants: [StandingsData[6], StandingsData[1]],
    completed: false,
    score: [0, 0],
  },
];

export const Standings: React.FC = () => {
  const [isVisible,setVisible] = useState(false);
  const currentStandingsData = StandingsData.sort(
    (a, b) => b.scroe.wins - a.scroe.wins
  );

  return (
    <>
      <div className="standings--toggle">
        <div className="standings--toggle-btn" onClick={()=>setVisible(!isVisible)}>
          <BsFillGrid3X2GapFill/>
      </div>
    </div>
    <section className={`standings ${isVisible?"active":""}`}>
      <div className="standings--score-container">
        <div className="standings--item">
          <h1>
            <i>Team</i>
          </h1>
          <span>
            <i>Scroe</i>
          </span>
        </div>
        {currentStandingsData.map((e) => {
          return (
            <div key={e.name} className="standings--item">
              <p className="standings--item-title">
                <i>{e.name}</i>
              </p>
              <p className="standings--item-score">
                <i>{e.scroe.wins * 2}</i>
                <span>-</span>
                <b>{e.scroe.loses * 2}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div className="standings--schedule">
        <div className="standings--schedule-item">
          <div className="standings--schedule-container">
            <h1>Team 1</h1>
          </div>
          <div className="standings--schedule-time">Time / Score</div>
          <div className="standings--schedule-container right">
            <h1>Team 2</h1>
          </div>
        </div>
        {ScheduleData.map((e,i) => {
          return (
            <div key={i} className="standings--schedule-item">
              <div className="standings--schedule-container">
                <h1>{typeof e.participants[0] === "string"?e.participants[0]:e.participants[0].name}</h1>
              </div>
              <div
                className={`standings--schedule-time ${
                  e.completed ? "row" : ""
                }`}
              >
                {e.completed ? (
                  <>
                    <p className="standings--schedule-scroe green">
                      {e.score[0]}
                    </p>
                    <span className="standings--schedule-dash">-</span>
                    <p className="standings--schedule-scroe red">
                      {e.score[1]}
                    </p>
                  </>
                ) : (
                  <>
                    <i>{e.date}</i>
                    <b>{e.time}</b>
                  </>
                )}
              </div>
              <div className="standings--schedule-container right">
                <h1>{typeof e.participants[1] === "string"?e.participants[1]:e.participants[1].name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};
