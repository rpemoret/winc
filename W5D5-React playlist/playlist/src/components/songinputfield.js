import React from "react";

// the state of the inputfields is set

class InputField extends React.Component {
  state = {
    title: "",
    author: "",
    rating: ""
  };

  // the state when using an inputfield is set according to the name of the inputfield

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

    // each item separately

    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.title, this.state.author);
      this.setState({
        title: "",
        author: ""
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
          name="author"
          value={this.state.author}
          onChange={onInput}
        ></input>
        <button type="submit">Add to list</button>
      </form>
    );
  }
}

export default InputField;
