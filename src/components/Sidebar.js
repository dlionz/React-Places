import React, { Component } from "react";
import Info from "./Info";
import Map from "./Map";
class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-head">
          <h2>Damien</h2>
        </div>
        <div
          className="sidebar-button"
          onClick={() => this.props.click(this.props.info.eat.isActive, this.props.info.eat)}
        >
          <h3>{this.props.info.eat.isActive ? this.props.info.eat.desc : this.props.info.eat.title}</h3>
        </div>
        <div
          className="sidebar-button"
          onClick={() => this.props.click(this.props.info.study.isActive,this.props.info.study)}
        >
          <h3>{this.props.info.study.isActive ? this.props.info.study.desc : this.props.info.study.title}</h3>
        </div>
        <div
          className="sidebar-button"
          onClick={() => this.props.click(this.props.info.play.isActive,this.props.info.play)}
        >
          <h3>{this.props.info.play.isActive ? this.props.info.play.desc : this.props.info.play.title}</h3>
        </div>
      </div>
    );
  }
}

export default Sidebar;
