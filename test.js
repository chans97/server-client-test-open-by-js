// import axios from `axios`;
// const express = require("express");
const SetCookieec = async () => {
  const formData = new FormData();
  formData.append("email", "a@gmail.com");
  formData.append("password", "rose234!");
  axios.defaults.withCredentials = true;
  const response = await axios.post(
    // `http://localhost:4000/`,
    `http://13.124.176.247:8080/sign-in`,
    formData,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(response);
};

const SetCookie = async () => {
  const formData = new FormData();
  formData.append("email", "a@gmail.com");
  formData.append("password", "rose234!");
  axios.defaults.withCredentials = true;
  const response = await axios.post(
    `http://localhost:4000/`,
    //   `http://13.124.176.247:8080/sign-in`,
    formData,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(response);
};

const GetCookie = async () => {
  const formData = new FormData();
  formData.append("email", "a@gmail.com");
  formData.append("password", "rose234!");
  const response = await axios.post(
    `http://localhost:4000/test`,
    // `http://13.124.176.247:8080/sign-in`,
    formData,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      withCreadentials: true,
    }
  );
  console.log(response);
};
SetCookieec();
SetCookie();
// GetCookie();
