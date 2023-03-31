import React, { useState } from "react";
import Types from "../Types/Types";
import Duration from "../Duration/Duration";
import SubTypes from "../Types/SubTypes/SubTypes";
import { equity } from "../Types/SubTypes/SubTypeList";
import Table from "../Table/Table";

function Common() {
  const [stockType, setStockType] = useState("EQUITY");
  const [stockSubType, setSubType] = useState(equity);
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");

  const updateUrl = (val, data) => {
    setUrl(val);
    setSubType(data);
  };
  const updateDuration = (val) => {
    setDuration(val);
  };

  const updateSelection = (type, data) => {
    setStockType(type);
    setSubType(data);
    setUrl("");
  };

  console.log(url, ":", duration);

  return (
    <div>
      <>
        <Types changeSelection={updateSelection} />
        <SubTypes
          type={stockType}
          data={stockSubType}
          getUrl={updateUrl}
          urlVal={url}
        />
        <Duration getDuration={updateDuration} durationVal={duration} />
        {url !== "" && duration !== "" ? (
          <Table urlValue={url} durationValue={duration} />
        ) : (
          <div className="note-para">
            <p>Please Select required Values to view stocks</p>
          </div>
        )}
      </>
    </div>
  );
}

export default Common;
