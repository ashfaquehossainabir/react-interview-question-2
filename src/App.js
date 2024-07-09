import React from "react";
import "./styles.css";

class App extends React.component{
  state = {
    num: 0,
  };


  handleClick() {
    this.setState((state) => ( {num: state.num + 1} ));
  }

  render() {
    return <><button onClick={this.handleClick.bind(this)}>Increment</button>
    <Counter number={this.state.num} />
    </>;
  }
}

export default App;