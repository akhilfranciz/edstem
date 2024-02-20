import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./signup.css";

const SignUp = (props) => {
  const history = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };

    fetch("https://reqres.in/api/register", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          toast.success("Registration Success");
          localStorage.setItem("token", result.token);
          setTimeout(() => {
            history("/login");
          }, 3000);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  };
  return (
    <div>
      <div className="login_container">
        <form onSubmit={handleSubmit}>
          <div className="loginform">
            <h1>REGISTRATION</h1>
            <div className="formdiv">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="First Name"
                value={values.firstName}
                onChange={(e) =>
                  setValues({ ...values, firstName: e.target.value })
                }
              />
            </div>
            <div className="formdiv">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Last Name"
                value={values.lastName}
                onChange={(e) =>
                  setValues({ ...values, lastName: e.target.value })
                }
              />
            </div>
            <div className="formdiv">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="formdiv">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Password"
                value={values.password}
                type="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="btndiv">
              <Button
                onClick={() => history("/signup")}
                type="submit"
                variant="outlined"
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
