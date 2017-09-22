import React from 'react';

export default class CheckboxWithLabel extends React.Component {
  state = {isChecked: false};

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        <span className="txt-label">
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </span>
      </label>
    );
  }

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked});
  }

}
