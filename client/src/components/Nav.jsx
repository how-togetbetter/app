import React from "react";

import NavItem from "./NavItem";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { items } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar collapse navbar-collapse">
          <a className="navbar-brand" href="#">
            iPersonalTrainer
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {items.map((item, idx) => (
              <NavItem key={idx} list={item} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
