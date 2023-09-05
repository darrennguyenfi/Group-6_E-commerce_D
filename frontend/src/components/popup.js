import React from "react";
import "../scss/components.scss";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <header class="header"></header>

      <div className="popup__inner">
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
        <button className="comfirmBtn">Xác nhận</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
