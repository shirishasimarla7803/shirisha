import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [email, setemail] = useState();
  const [password, setpass] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    axios
      .post("http://localhost:3000/api/signup", {
        fname,
        lname,
        email,
        password,
      })
      .then((res) => {
        // handle success
        console.log(res.data);
        navigate("/signin");
        //  console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  // useEffect(() => {

  // }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            News Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/signin"
                >
                  Signin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Signup">
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <div className="text-center mb-4">
                          <a href="#!">
                            <img
                              src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"
                              alt="BootstrapBrain Logo"
                              width="100"
                              height="100"
                            />
                          </a>
                        </div>
                        <h2 className="h4 text-center">Registration</h2>
                        <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                          Enter your details to register
                        </h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            required
                            onChange={(e) => setfname(e.target.value)}
                          />
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder="First Name"
                            required
                            onChange={(e) => setlname(e.target.value)}
                          />
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                            onChange={(e) => setemail(e.target.value)}
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            placeholder="password"
                            required
                            onChange={(e) => setpass(e.target.value)}
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
