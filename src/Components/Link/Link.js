import React, { Component } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'my-normals',
};

const styleLink = {
  color: 'red',
  textTransform: 'uppercase'
};

export default class Link extends Component {
  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        style={styleLink}
        className={this.state.class}
        href={this.props.page || '/'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
