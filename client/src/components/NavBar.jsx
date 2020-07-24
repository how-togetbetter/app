import React from "react";
import { GrTrophy } from "react-icons/gr";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler({ target }) {
    if (target.innerText === "About") {
      this.props.handleClick();
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <GrTrophy />
        </a>
        {/* <a style={{ fontWeight: "bold", paddingRight: "3px" }}>MS</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {this.props.items.map((item, idx) => (
              <li className="nav-item" key={idx} onClick={this.clickHandler}>
                <a className="nav-link" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
