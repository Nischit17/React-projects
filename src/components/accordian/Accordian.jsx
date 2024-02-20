import React, { useState } from "react";
import data from "../data";
import "./styles.css";

const Accordian = () => {
  const [select, setSelect] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelect(getCurrentId === select ? null : getCurrentId);
  };

  return (
    <>
      {/* <h1 className="acc">Accordian</h1> */}
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((items) => (
              <div className="item" key={items.id}>
                <div
                  onClick={() => handleSingleSelection(items.id)}
                  className="title"
                >
                  <h3>{items.question}</h3>
                  <span>+</span>
                </div>
                {select === items.id ? (
                  <div className="content">{items.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="data">No Data Found :(</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
