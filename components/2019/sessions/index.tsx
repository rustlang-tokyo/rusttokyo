import { profiles } from "@/constants/2019/speakers/";
import { timetable } from "@/constants/2019/timetable/";
import { Profile } from "../common/profile";
import { Session } from "./session/";

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
            <a href="/2019/sessions/en/" className="nav-link">
              EN
            </a>
          </li>
          <li className="nav-item">
            <a href="/2019/sessions/" className="nav-link active">
              JA
            </a>
          </li>
        </ul>
      </div>
      <div className="jumbotron-white jumbotron-fluid">
        <div className={"container"}>
          <h2>タイムテーブル</h2>
          <p>9:30から受付開始となります</p>
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
          <p className="note">※タイムテーブルは変更する可能性があります</p>
        </div>
        <div className={"container"}>
          <h2>登壇者</h2>
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
