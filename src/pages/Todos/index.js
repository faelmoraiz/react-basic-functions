import React from "react";

import "./Todos.css";

class Todos extends React.Component {
  state = {
    items: [],
    text: ""
  };

  // componentDidMount() {
  //   console.log("teste");
  // }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));

    // console.log(this.state.text.length);
  };

  render() {
    return (
      <div className="Todos">
        <div className="Todos-header">
          <h3>Tarefas</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">O que precisa ser feito?</label>
            <br />
            <br />
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>Adicionar #{this.state.items.length + 1}</button>
          </form>
        </div>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default Todos;
