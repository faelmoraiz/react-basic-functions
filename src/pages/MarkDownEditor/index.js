import React, { Component } from "react";
import Remarkable from "remarkable";

import "./MarkDownEditor.css";

export default class MarkDownEditor extends Component {
  state = {
    value: "Olá ~~mundo~~!"
  };

  componentDidMount() {
    console.log("Aplicação iniciada.");
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  getRawMarkup = e => {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  };

  render() {
    return (
      <div className="MarkdownEditor">
        <div className="MarkDownEditor-header">
          <h3>Entrada</h3>
          <label htmlFor="markdown-content">Edite seu texto</label>
          <br />
          <textarea
            id="mkardown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <h3>Saída</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      </div>
    );
  }
}
