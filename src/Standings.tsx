import { useState } from "react";
import {BsFillGrid3X2GapFill} from "react-icons/bs";

// const StandingsData = [
// ];

const ScheduleData = [
] as any[];

export const Standings: React.FC = () => {
  // const [isVisible,setVisible] = useState(false);
  const currentStandingsData = [] as any[]; 
  // StandingsData.sort(
  //   (a, b) => b.scroe.wins - a.scroe.wins
  // );

  return (
    <>
      <div className="standings--toggle">
      {/* onClick={()=>setVisible(!isVisible)} */}
        <div className="standings--toggle-btn" >
          <a href="https://discord.gg/vAZ7MNRe5x"> FCSF + FRECS | Tournament | CS:GO</a>
      </div>
    </div>
    <section className={`standings ${false?"active":""}`}>
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
