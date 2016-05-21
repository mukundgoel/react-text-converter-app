/**
 * Convert input.
 */
import React from "react";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/lib/FormControl";
import { setConversionValue, fetchConversions } from "../actions/";

class UserInput extends React.Component {
  onChange(ev) {
    this.props.dispatch(setConversionValue(ev.target.value));
  }

  onKeyDown(ev) {
    if (ev.which === 13 /* Enter key */) {
      ev.preventDefault();
      const store = this.props;
      store.dispatch(fetchConversions(store.types, store.value));
    }
  }

  render() {
    return (
      <FormControl
        className="form-control e2e-input"
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        placeholder="Text to convert..."
        type="text"
        value={this.props.value}
      />
    );
  }
}

UserInput.propTypes = {
  dispatch: React.PropTypes.func,
  value: React.PropTypes.string
};

export default connect((state) => ({
  types: state.conversions.types,
  value: state.conversions.value
}))(UserInput);
