import React from "react";

const item = ({ list }) => {
  return (
    <li className="nav-item active">
      <a className="nav-link" href={list.link}>
        {list.name} <span className="sr-only">(current)</span>
      </a>
    </li>
  );
};

export default item;
