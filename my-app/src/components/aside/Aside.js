import React from "react";
import "./Aside.css";
import GetIcon from "../GetIcon/GetIcon";

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
