import React from "react";

class InputField extends React.Component {
  state = {
    input: ""
  };

  // .value vervangen voor een this.state.author enz.
  // meerdere keren

  render() {
    const onInput = event => {
      const target = event.target;
      const value = target.value;
      const forminput = target.forminput;
      this.setState({
        [forminput]: value
      });
    };

    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
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
          placeholder="Name"
          type="search"
          forminput="title"
          value={this.state.title}
          onChange={onInput}
        ></input>
        <br />
        <input
          placeholder=""
          type="search"
          forminput="author"
          value={this.state.author}
          onChange={onInput}
        ></input>
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField;
