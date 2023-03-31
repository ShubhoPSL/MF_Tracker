import React, { useState } from "react";
import { typesList } from "./TypesList";
import {
  debt,
  equity,
  hybrid,
  others,
  solutionOriented,
} from "./SubTypes/SubTypeList";

function Types({ changeSelection }) {
  const [focus, setFocus] = useState("EQUITY");
  const handleClick = (typeName) => {
    return (event) => {
      setFocus(typeName);
      if (typeName === "EQUITY") {
        changeSelection(typeName, equity);
      } else if (typeName === "HYBRID") {
        changeSelection(typeName, hybrid);
      } else if (typeName === "DEBT") {
        changeSelection(typeName, debt);
      } else if (typeName === "SOLUTION ORIENTED") {
        changeSelection(typeName, solutionOriented);
      } else {
        changeSelection(typeName, others);
      }

      event.preventDefault();
    };
  };
  return (
    <div className="types-container-main">
      <div className="types-list-container">
        {typesList.map((item) =>
          focus === item.name ? (
            <button
              className="btn btn-green"
              onClick={handleClick(item.name)}
              key={item.name}
            >
              {item.name}
            </button>
          ) : (
            <button
              className="btn btn-white"
              onClick={handleClick(item.name)}
              key={item.name}
            >
              {item.name}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Types;
