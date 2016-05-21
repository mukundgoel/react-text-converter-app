/**
 * Convert button.
 */
import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/lib/Button";
import { fetchConversions } from "../actions/";

class Convert extends React.Component {
  onClick(e) {
    e.preventDefault();
    const store = this.props;
    store.dispatch(fetchConversions(store.types, store.value));
  }

  render() {
    return (
      <Button className="e2e-convert" onClick={this.onClick.bind(this)}>
        Convert
      </Button>
    );
  }
}

export default connect((state) => ({
  types: state.conversions.types,
  value: state.conversions.value
}))(Convert);
