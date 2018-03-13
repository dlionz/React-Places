import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

class App extends Component {
  state = {
    eat: {
      title: "Eat",
      desc: "Xin Jiang BBQ: Becuase nothing is better than chinese street food",
      lat: 29.7057,
      lng: -95.5465,
      isActive: false
    },
    study: {
      title: "Study",
      desc: "Tout Suite: Great coffee great atmosphere",
      lat: 29.7587,
      lng: -95.3506,
      isActive: false
    },
    play: {
      title: "Play",
      desc: "Montag's games: for DND and good times!",
      lat: 29.5584,
      lng: -95.3724,
      isActive: false
    }
  };

  handleClick = (isActive, name) => {
    //show info for specific button pressed
    let eat = {...this.state.eat}
    const study = {...this.state.study}
    const play = {...this.state.play}
    //handle eat state
    if (
      !isActive && name === this.state.eat
    ) {
      eat.isActive = true;
      this.setState({eat});
      study.isActive = false;
      play.isActive = false;
      this.setState({play,study});
    } else{
      eat.isActive = false;
      this.setState({eat});
    }
    //handle study
    if (
      !isActive && name === this.state.study
    ) {
      study.isActive = true;
      this.setState({study});
    } else{
      study.isActive = false;
      this.setState({study});
    }
    //handle play
    if (
      !isActive && name === this.state.play
    ) {
      play.isActive = true;
      this.setState({play});
    } else{
      play.isActive = false;
      this.setState({play});
    }

  };

  render() {
    return (
      <div className="mainApp">
        <Sidebar click={this.handleClick} info={this.state} />
        <Map className="map" cords={this.state} />
      </div>
    );
  }
}

export default App;
