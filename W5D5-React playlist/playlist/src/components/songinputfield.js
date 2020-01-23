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
        input: event.target.value,
        author: event.target.value
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
    // komt dit terug in de value. Zie 14 en 37, input is hier gekoppeld.

    // this.state. speciefiek maken of onChange veranderen, eerste is simpeler

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
          value={this.state.author}
        ></input>
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField;
