import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lat : null,
      err : ""
    };
  }

  componentDidMount(){
    this.getLocation()
  }

  showLoader(){
    return "Now it's loading"
  }

  getLocation(){
    window.navigator.geolocation.getCurrentPosition(
      location => this.setState({lat : location.coords.latitude}),
      err => this.setState({err : err.message})
    )
  }

  render(){
      if(this.state.err && !this.state.lat) {
        return <div>Error: {this.state.err} </div>
      }

      if(!this.state.err && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} />
      }

      return <div>{this.showLoader()}</div>
  }

}

ReactDOM.render(<App />, document.getElementById("root"));
