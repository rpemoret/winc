import React from "react";

class InputField extends React.Component {
  state = {
    input: ""
  };

  // .value vervangen voor een this.state.author enz.
  // meerdere keren

  render() {
    const onInput = event => {
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

    // Wanneer je iets intypt wordt dit naar de setState van const onInput gestuurd, hierdoor
    // komt dit terug in de value.

    // this.state. specifiek maken of onChange veranderen, eerste is simpeler

    return (
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          type="search"
          value={this.state.input}
          onChange={onInput}
        ></input>
        <br />
        <input
          placeholder="Author"
          type="search"
          value={this.state.input}
          onChange={onInput}
        ></input>
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField;
