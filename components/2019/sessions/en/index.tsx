import { Profile } from "@/components/2019/common/profile";
import { profiles } from "@/constants/2019/speakers/en/";
import { timetable } from "@/constants/2019/timetable/en/";
import { Session } from "../session";

export function Sessions() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="top">SESSIONS</h2>
        </div>
      </div>

      <div className="container">
        <ul className="nav nav-pills justify-content-end">
          <li className="nav-item">
            <a href="/2019/sessions/en/" className="nav-link active">
              EN
            </a>
          </li>
          <li className="nav-item">
            <a href="/2019/sessions/" className="nav-link">
              JA
            </a>
          </li>
        </ul>
      </div>
      <div className="jumbotron-white jumbotron-fluid">
        <div className={"container"}>
          <h2>TIMETABLE</h2>
          <p>Registration is open at 9:30 am. </p>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Room A</th>
                <th>Room B</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((t) => (
                <tr key={`timetable_${t.startTime}`}>
                  <td>
                    <p>{t.startTime}</p>
                  </td>
                  <td>
                    <Session {...t.roomA} />
                  </td>
                  <td>
                    <Session {...t.roomB} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">There might be a change in schedule.</p>
        </div>
        <div className={"container"}>
          <h2>SPEAKERS</h2>
        </div>
        <div className="container profile_area">
          {profiles.map((p) => {
            return <Profile key={`Profile_${p.name}`} {...p} />;
          })}
        </div>
      </div>
    </>
  );
}
