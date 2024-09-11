import React from "react";

const IconButton = ({ onClick, Icon, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon />
    </button>
  );
};

export default IconButton;
