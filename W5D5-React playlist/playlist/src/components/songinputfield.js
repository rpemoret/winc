import React from "react";

class InputField extends React.Component {
  state = {
    input: ""
  };

  render() {
    const onInput = event => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const title = target.title;
      this.setState({
        input: event.target.value
      });
    };

    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.input);
      this.setState({
        input: ""
      });
    };

    return (
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          type="search"
          onChange={onInput}
          value={this.state.input}
        ></input>
        <br />
        <input
          placeholder="Author"
          type="search"
          onChange={onInput}
          value={this.state.input}
        ></input>
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField;
