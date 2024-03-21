import React, { useEffect, useState } from "react";
import parrow from "./parrow.png";
import narrow from "./narrow.png";

export const Features = ({ features }) => {
  const [result, setResult] = useState(features);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [page, setPage] = useState(1);

  const checkNext = () => {
    setResult(features.slice(start, end));
  };

  let status = Math.ceil(features.length / 4);

  useEffect(() => {
    checkNext();
  }, [start]);

  useEffect(() => {
    checkNext();
  }, [features]);

  const Next = () => {
    setPage((previous) => previous + 1);
    setEnd((previous) => previous + 4);
    setStart((previous) => previous + 4);
  };

  const Previous = () => {
    setPage((previous) => previous - 1);
    setStart((previous) => previous - 4);
    setEnd((previous) => previous - 4);
  };
  return (
    <div id="features">
      <div className="col-10 section-title">
        <h2 className="text-center">Features</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="row" style={{ width: "100%", marginLeft: "5px" }}>
          {result
            ? result.map((item, i) => (
                <div key={`${item.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <img
                    style={{ borderRadius: "20px" }}
                    src={require(`../images/${item.image}`)}
                    height="220px"
                    width="100%"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description.slice(0, 80)}...</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
