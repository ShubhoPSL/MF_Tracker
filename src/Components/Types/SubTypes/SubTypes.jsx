import React from "react";

function SubTypes({ type, data, getUrl, urlVal }) {
  const toggleSubtype = (index, selection) => {
    return (e) => {
      const subtype = e.target.value;
      const idx = urlVal.indexOf(subtype);
      if (idx === -1) {
        urlVal += subtype + ",";
      } else {
        urlVal = urlVal.replace(subtype + ",", "");
      }
      getUrl(urlVal, [
        ...data.slice(0, index),
        { ...data[index], selected: !selection },
        ...data.slice(index + 1),
      ]);
    };
  };

  return (
    <div className="subtype-container-main">
      <div className="subtype-header">{type}</div>
      <div className="subtype-content">
        {data.map((item, idx) => (
          <div className="checkbox-div" key={item.id}>
            <input
              type="checkbox"
              name={item.value}
              className="subtypes-checkbox"
              id={item.value + item.id}
              value={item.value}
              onChange={toggleSubtype(idx, item.selected)}
              checked={item.selected}
            />
            <label htmlFor={item.id} className="subtypes-label">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubTypes;
