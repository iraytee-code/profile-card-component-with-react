import React from "react";

function CardFooter() {
  return (
    <div className="media-body">
      <div className="icon-img">
        <img
          className="mr-3 rounded-circle"
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
          alt=""
        />
      </div>
      <div className="author">
        <p>Oz COruhlu</p>
        <small>Director of UI/UX</small>
      </div>
    </div>
  );
}

export default CardFooter;
