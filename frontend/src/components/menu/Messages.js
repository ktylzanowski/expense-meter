import React, { useState } from "react";

const Messages = (props) => {
  const [isVisbile, setIsVisible] = useState(false);
  const timeVisible = () => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  return (
    <div>
      {isVisbile ? <p>{props.children}</p> : null} {timeVisible}
    </div>
  );
};

export default Messages;
