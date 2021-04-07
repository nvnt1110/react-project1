import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AUTH_LOGIN_LOGOUT, TEST_SUM } from "../../redux/actions/types";
import "./style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localNumber: 0
    };
  }

  onLogout = () => {
    const { history } = this.props;
    history.replace("/");
  }

  render = () => {
    const { testRedux, plus } = this.props;
    const { localNumber } = this.state;
    return (
      <div>
        <div className="container-home">
          <h1 style={{ textAlign: "center" }}>{testRedux.sum}</h1>
          <h1 style={{ textAlign: "center" }}>{localNumber}</h1>
          <button type="button" className="app-btn" onClick={this.onLogout}>Logout</button>
          <button type="button" className="app-btn" onClick={() => plus()}>Plus</button>
          <button type="button" className="app-btn" onClick={() => this.setState({ localNumber: localNumber + 1 })}>Plus local number</button>
          <Link className="app-btn" to="/product">go to Product</Link>
        </div>
      </div>
    );
  };
}

Home.propTypes = {
  history: PropTypes.instanceOf(Object),
  testRedux: PropTypes.instanceOf(Object),
  plus: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    testRedux: state.TestRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: AUTH_LOGIN_LOGOUT });
      localStorage.clear();
    },
    plus: () => {
      dispatch({ type: TEST_SUM });
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
