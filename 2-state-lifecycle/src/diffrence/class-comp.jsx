import React from "react";

// Class Component oluıştururken React.Component Class'Inı miras alırız
// Bu sayede oluşturduğumuz class  component yeteneklerine sahip olur
class ClassComp extends React.Component {
  // kurucu method
  constructor(props) {
    super(props); // construc kullanırsak prop'ların hata vermemsi için yazarız

    // state oluşturma
    // state'i güncellerken setState methodunu kullanırız
    this.state = {
      name: "Furkan",
      list: [],
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>

        <div>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>Azalt</button>

          <span>{this.state.count}</span>

          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Arttır</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
