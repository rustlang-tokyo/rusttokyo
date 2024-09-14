import { volunteers } from "@/constants/2019/volunteers/";

export function Volunteers() {
  return (
    <div id="volunteers" className="jumbotron-white jumbotron-fluid">
      <div className="container">
        <h2>Volunteers</h2>
      </div>
      <div className="container volunteers_area">
        {volunteers.map((v) => {
          return (
            <div key={`volunteer_${v.name}`} className="volunteer_box">
              <figure>
                {v.twitter.id !== "" ? (
                  <a
                    href={`https://twitter.com/${v.twitter.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="volunteer_pic" src={v.image} alt={v.name} />
                  </a>
                ) : (
                  <img className="volunteer_pic" src={v.image} alt={v.name} />
                )}
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
