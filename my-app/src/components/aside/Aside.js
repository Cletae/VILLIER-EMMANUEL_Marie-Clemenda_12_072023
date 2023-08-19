import React from "react";
import GetIcon from "../icons/GetIcons";

function Aside() {
  return (
    <aside>
      <div className="aside-icon">
        <GetIcon icon="yoga" />
        <GetIcon icon="swim" />
        <GetIcon icon="bike" />
        <GetIcon icon="dumbbell" />
      </div>
      <p>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Aside;
