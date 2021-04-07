import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Components
import { AUTH_LOGIN_ACCESS } from "../../redux/actions/types";
import "./style.css";

const Users = [
  { username: "nvn_tan", password: "123" },
];

for (let i = 0; i < 10; i++) {
  const index = i + 1;
  Users.push({ username: `user${index}`, password: "123" });
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checkUsername: "",
      checkPassword: "",

    };
    this.refPassword = React.createRef();
    this.refUsername = React.createRef();
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlerEnterUsername = (e) => {
    if (e.key === "Enter") {
      this.refPassword.current.focus();
    }
  }

  handleEnterLogin = (e) => {
    if (e.key === "Enter") {
      this.onLogin();
    }
  }

  onLogin = () => {
    const { history, login } = this.props;
    const { username, password } = this.state;

    let isValid = true;

    const stateModel = {
      checkUsername: "",
      checkPassword: "",
    };

    if (username.length === 0) {
      isValid = false;
      this.refUsername.current.focus();
      stateModel.checkUsername = "Vui lòng điền tên đăng nhập";
    }

    if (isValid && password.length === 0) {
      isValid = false;
      this.refPassword.current.focus();
      stateModel.checkPassword = "Vui lòng điền mật khẩu";
    }

    if (isValid) {
      const user = Users.find((x) => x.username === username);

      if (!user) {
        isValid = false;
        this.refUsername.current.focus();
        stateModel.checkUsername = "Sai tên đăng nhập";
      }

      if (isValid && user.password !== password) {
        isValid = false;
        this.refPassword.current.focus();
        stateModel.checkPassword = "Sai mật khẩu";
      }
    }

    if (isValid === false) {
      this.setState(stateModel);
      return;
    }

    login(username, password);

    history.replace("/home", { username });
  }

  render = () => {
    const { checkPassword, checkUsername } = this.state;
    return (
      <div>
        <form>
          <input type="text" name="username" className="app-input" onChange={this.onChangeValue} onKeyDown={this.handlerEnterUsername} ref={this.refUsername} />
          <div className="container-message-error">
            <p style={{ color: "red", margin: 0 }}>{checkUsername}</p>
          </div>
          <input type="password" name="password" className="app-input" onChange={this.onChangeValue} onKeyDown={this.handleEnterLogin} ref={this.refPassword} />
          <div className="container-message-error">
            <p style={{ color: "red", margin: 0 }}>{checkPassword}</p>
          </div>
          <button type="button" className="app-btn" onClick={this.onLogin}>Login</button>
        </form>
        <div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

const mapDispatchToProps = (dispatch) => {
console.log("mapDispatchToProps ~ dispatch", dispatch)
  return {
    login: (username, password) => {
      const loggedInUser = { username, password };
      dispatch({ type: AUTH_LOGIN_ACCESS, loggedInUser });
      localStorage.setItem("token", JSON.stringify(loggedInUser));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
