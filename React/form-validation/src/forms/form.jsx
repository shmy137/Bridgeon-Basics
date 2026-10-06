import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    interest: [],
    password: "",
  });

  const [erros, setErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isvalid = validateForm();
    if (isvalid) {
      console.log("true", data);
    } else {
      console.log("failed");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const isValidNum = (num) => {
    const numRegex = /^\d{10}$/;
    return numRegex.test(num);
  };

  const isValidPassword = (pass) => {
    const symbolRegex = /^\!@#$%^&*()_-+=[]{}:;"',.?$/;
    const numRegex = /[0-9]/;
    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(pass) &&
      numRegex.test(pass) &&
      upperRegex.test(pass) &&
      lowerRegex.test(pass)
    );
  };

  const validAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    let updateInterest = [...data.interest];

    if (checked) {
      updateInterest.push(name);
    } else {
      updateInterest = updateInterest.filter((interest) => interest !== name);
    }
    setData({
      ...data,
      interest: updateInterest,
    });
    console.log(setData);
  };

  const validateForm = () => {
    let newError = {};

    if (!data.firstName) {
      newError.firstName = "enter first name";
    }
    if (!data.password) {
      newError.firstName = "enter password";
    } else if (!isValidPassword(data.password)) {
      newError.password = "enter with appropriate data";
    }

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  return (
    <>
      <p className="text-3xl">helo</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            placeholder="enter your first name "
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            placeholder="enter your first name "
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="enter your first password "
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="interest">Interest</label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={data.interest.includes("coding")}
              onChange={handleCheckboxChange}
            />
            coding
          </label>
          <label>
            <input
              type="checkbox"
              name="editing"
              checked={data.interest.includes("editing")}
              onChange={handleCheckboxChange}
            />
            editing
          </label>
          <label>
            <input
              type="checkbox"
              name="videography"
              checked={data.interest.includes("videography")}
              onChange={handleCheckboxChange}
            />
            videography
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
