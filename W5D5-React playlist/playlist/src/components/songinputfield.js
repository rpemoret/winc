import React from "react";

class InputField extends React.Component {
  state = {
    title: "",
    author: "",
    rating: ""
  };

  // .value vervangen voor een this.state.author enz.
  // meerdere keren

  render() {
    const onInput = e => {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    };

    // props worden toegevoegd

    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.title);
      this.setState({
        title: ""
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
          name="title"
          value={this.state.title}
          onChange={onInput}
        ></input>
        <br />
        <input
          placeholder="Author"
          type="search"
          name="title"
          value={this.state.author}
          onChange={onInput}
        ></input>
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField;
