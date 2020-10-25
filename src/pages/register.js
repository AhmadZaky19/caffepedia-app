import React from "react";
import { Link } from "react-router-dom";

import regstyle from "../css/register.css";
import Axios from "axios";

class Register extends React.Component {
  state = {
    user: {
      username: "",
      password: null,
    },
    status: null,
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
    const url = "http://34.205.76.141:8000/auth/register";
    Axios.post(url, this.state.user)
      .then((res) => {
        this.setState({
          status: res.data.isSuccess,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.clear();
  };

  render() {
    return (
      <>
        {console.log(this.state.status)}
        <main className="register">
          <div className="content-register">
            <div className="card no-gutters">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 register">
                    <h2>Create new account</h2>
                    <p className={this.state.status ? "success" : "warning"}>
                      {(() => {
                        switch (this.state.status) {
                          case false:
                            return "Username is already exist";
                          case true:
                            return "Register is success";
                          default:
                            return null;
                        }
                      })()}
                    </p>

                    <form className="form mt-5">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="username"
                          onChange={this.handleForm}
                          ref="blank2"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          onChange={this.handleForm}
                          ref="blank"
                          required
                        />
                      </div>
                      <div className="btn mt-3">
                        <button
                          type="submit"
                          className="btn btn-login"
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                      <Link className="link-account" to="/login">
                        Login
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
Register.bind(regstyle);

export default Register;
