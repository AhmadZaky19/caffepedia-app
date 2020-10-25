import React from "react";
import css from "../css/login.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    status: null,
    msg: null,
  };

  localStorage = () => {
    localStorage.setItem("token", this.state.status.data.token);
  };
  clear = () => {
    this.refs.blank.value = null;
    this.refs.blank2.value = null;
  };
  handleForm = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({
      user: newUser,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.user.username !== "" && this.state.user.password !== "") {
      const url = "http://34.205.76.141:8000/auth/login";
      Axios.post(url, this.state.user, {
        headers: { token: localStorage.getItem("token") },
      })
        .then((res) => {
          console.log(res.data);
          console.log(res.data);
          this.setState({
            status: res.data,
          });
          if (res.data.status === 200) {
            this.localStorage();
            this.props.history.push("/");
          }

          this.clear();
        })
        .catch((err) => {
          console.log(err);
        });
      this.clear();
    } else {
      this.setState({
        msg: "Username or Password cannot be empty",
      });
      this.clear();
    }
  };

  render() {
    return (
      <>
        {console.log("status", this.props.location.state)}
        <main className="login">
          <div className="content-login">
            <div className="card no-gutters">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 login">
                    {this.props.location.state === undefined ? (
                      <h2>Login</h2>
                    ) : (
                      <h2>{this.props.location.state.msg}</h2>
                    )}

                    <p>
                      {(() => {
                        if (this.state.status !== null) {
                          switch (this.state.status.isSuccess) {
                            case true:
                              return null;
                            case false:
                              return this.state.status.data;
                            default:
                              return null;
                          }
                        } else {
                          return this.state.msg;
                        }
                      })()}
                    </p>

                    <form className="form login mt-5">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={this.handleForm}
                          ref="blank"
                          name="username"
                          autoComplete="off"
                          required
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          input username here
                        </small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          onChange={this.handleForm}
                          ref="blank2"
                          name="password"
                          autoComplete="off"
                          required
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          input password here
                        </small>
                      </div>
                      <div className="btn">
                        <button
                          type="submit"
                          className="btn btn-login"
                          onClick={this.handleSubmit}
                        >
                          login
                        </button>
                      </div>
                      <Link className="link-account" to="/register">
                        Create account
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
Login.bind(css);
export default Login;
