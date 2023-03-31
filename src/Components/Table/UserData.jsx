import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((current_user) => {
        return (
          <tr key={current_user.schemeName} className="tableBodyRow">
            {Object.values(current_user).map((val, index) => (
              <td className="tableCol" key={index}>
                {val}
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
