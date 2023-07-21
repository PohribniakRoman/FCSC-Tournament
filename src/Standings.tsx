const StandingsData = [
  { name: "asd1", scroe: { wins: 1, loses: 8 } },
  { name: "asd2", scroe: { wins: 2, loses: 7 } },
  { name: "asd3", scroe: { wins: 3, loses: 6 } },
  { name: "asd4", scroe: { wins: 4, loses: 5 } },
  { name: "asd5", scroe: { wins: 10, loses: 4 } },
  { name: "asd6", scroe: { wins: 3, loses: 3 } },
  { name: "asd7", scroe: { wins: 2, loses: 2 } },
  { name: "asd8", scroe: { wins: 12, loses: 1 } },
];

const ScheduleData = [
  {
    date: 29.07,
    time: "12:00",
    participants: [StandingsData[1], StandingsData[2]],
    completed: true,
    score: [2, 0],
  },
  {
    date: 29.07,
    time: "12:00",
    participants: [StandingsData[2], StandingsData[1]],
    completed: true,
    score: [0, 2],
  },
  {
    date: 29.07,
    time: "12:00",
    participants: [StandingsData[3], StandingsData[2]],
    completed: true,
    score: [2, 0],
  },
  {
    date: 29.07,
    time: "12:00",
    participants: [StandingsData[4], StandingsData[3]],
    completed: false,
    score: [0, 0],
  },
  {
    date: 29.07,
    time: "12:00",
    participants: [StandingsData[5], StandingsData[4]],
    completed: false,
    score: [0, 0],
  },
];

export const Standings: React.FC = () => {
  const currentStandingsData = StandingsData.sort(
    (a, b) => b.scroe.wins - a.scroe.wins
  );

  return (
    <section className="standings">
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
            <div className="standings--item">
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
        {ScheduleData.map((e) => {
          return (
            <div className="standings--schedule-item">
              <div className="standings--schedule-container">
                <h1>{e.participants[0].name}</h1>
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
                <h1>{e.participants[1].name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
