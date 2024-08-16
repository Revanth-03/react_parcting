import React from "react";
import FunctionComp from "./FunctionComp";
import ClassComp from "./ClassComp";
import TimerFun from "./TimerFun";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }
  componentDidMount() {
    console.log("componentMounted");
    return <h1>componentDidMount</h1>;
  }
  componentDidMount() {
    console.log("componentMounted2");
    return <h1>componentDidMount</h1>;
  }
  componentDidMount() {
    console.log("componentMounted3");
    return <h1>componentDidMount</h1>;
  }
  componentDidMount() {
    console.log("componentMounted-1");
    return <h1>componentDidMount</h1>;
  }
  componentDidMount() {
    console.log("componentMounted0");
    return <h1>componentDidMount</h1>;
  }

  // shouldComponentUpdate(nextprop, nextstate) {
  //   console.log("nextstate", nextstate);
  // }

  // componentDidMount() {
  //   console.log("Mounted");

  //   this.setState({ value: 2 });

  //   this.setState((prevState) => {
  //     return {
  //       value: prevState.value + 1,
  //     };
  //   });
  // }

  // componentDidUpdate() {
  //   console.log("Updated");
  // }

  render() {
    // console.log("Rendered");
    return (
      <div>
        <FunctionComp />
        <ClassComp />
        <TimerFun />
      </div>
    );
  }
}

export default App;
