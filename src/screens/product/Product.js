import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { TEST_SUM } from "../../redux/actions/types";
import "./style.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  onBack = () => {
    const { history } = this.props;
    console.log("history", history)
    history.goBack();
  }

  render = () => {
    const { testRedux } = this.props;
    return (
      <div>
        <div className="container-product">
          <h1>{testRedux.sum}</h1>
          <button type="button" className="app-btn" onClick={this.onBack}>Back</button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  history: PropTypes.instanceOf(Object),
  testRedux: PropTypes.instanceOf(Object),
};

const mapStateToProps = (state) => {
  return {
    testRedux: state.TestRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch({ type: TEST_SUM });
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
