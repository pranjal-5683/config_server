import React, { useEffect, useState } from "react";
import parrow from "./parrow.png";
import narrow from "./narrow.png";

export const Team = ({ team }) => {
  const [result, setResult] = useState(team);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [page, setPage] = useState(1);

  let status = Math.ceil(team.length / 4);

  useEffect(() => {
    check();
    checkNext();
  }, [start]);
  useEffect(() => {
    check();
    checkNext();
  }, [team]);

  const Next = () => {
    setPage((previous) => previous + 1);
    setEnd((previous) => previous + 4);
    setStart((previous) => previous + 4);
  };

  const check = () => {
    setResult(team);
  };
  const checkNext = () => {
    setResult(team.slice(start, end));
  };

  const Previous = () => {
    setPage((previous) => previous - 1);
    setStart((previous) => previous - 4);
    setEnd((previous) => previous - 4);
  };
  return (
    <div id="team" className="text-center">
      <div className="container-fluid">
        <div className="col-8 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <button
              disabled={page == 1}
              onClick={Previous}
              style={{
                fontSize: "60px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={parrow} />
            </button>
          </div>
          <div id="row">
            {result
              ? result.map((item, i) => (
                  <div
                    key={`${item.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img
                        style={{
                          borderRadius: "40px",
                          height: "250px",
                          width: "350px",
                          objectFit: "cover",
                        }}
                        src={require(`../images/${item.image}`)}
                        height="100px"
                      />
                      <div className="caption">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
          <div>
            <button
              disabled={page + 1 > status}
              onClick={Next}
              style={{
                fontSize: "60px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={narrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
