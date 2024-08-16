import React from "react";

export default class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "hello",
      email: "gmail.com",
    };
  }
  handleChage = (e) => {
    this.setState({ email: e.target.value });
  };
  render() {
    const { name, email } = this.state;
    return (
      <div>
        <input type="text" value={email} onChange={this.handleChage} />
        <h3>Class Email:-{email}</h3>
      </div>
    );
  }
}
