import React, { useRef, useState } from "react";
import "./UserForm.css";
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [age, setAge] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const messageRef = useRef();
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  function submitButton(e) {
    e.preventDefault();
    // alert(`
    //   username:${name},
    //   email:${email}
    // `);
    if (!name && !email && !password && !cpassword && !age) {
      messageRef.current.style.color = "red";
      messageRef.current.innerHTML = "All Fields are required";
      nameRef.current.style.color = "red";
      nameRef.current.innerHTML = "Enter your Name";
      emailRef.current.style.color = "red";
      emailRef.current.innerHTML = "Enter your Email";
      ageRef.current.style.color = "red";
      ageRef.current.innerHTML = "Enter your age";
      passwordRef.current.style.color = "red";
      passwordRef.current.innerHTML = "Enter your password";
      cpasswordRef.current.style.color = "red";
      cpasswordRef.current.innerHTML = "Enter your password";
    } else if (!name) {
      nameRef.current.style.color = "red";
      nameRef.current.innerHTML = "Enter your name";
      messageRef.current.innerHTML = "Signup unsuccessful";
      emailRef.current.innerHTML = "";
      passwordRef.current.innerHTML = "";
      cpasswordRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
    } else if (!email) {
      emailRef.current.style.color = "red";
      emailRef.current.innerHTML = "Enter your email";
      messageRef.current.innerHTML = "Signup unsuccessful";
      passwordRef.current.innerHTML = "";
      cpasswordRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      nameRef.current.innerHTML = "";
    } else if (!age) {
      ageRef.current.style.color = "red";
      ageRef.current.innerHTML = "Enter your age";
      messageRef.current.innerHTML = "Signup unsuccessful";
      passwordRef.current.innerHTML = "";
      cpasswordRef.current.innerHTML = "";
      nameRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else if (!password & name && age && email) {
      passwordRef.current.style.color = "red";
      passwordRef.current.innerHTML = "Enter your password";
      messageRef.current.innerHTML = "Signup unsucessful";

      nameRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else if (password.length < 5 && name && age && email) {
      passwordRef.current.style.color = "red";
      passwordRef.current.innerHTML = "Password is weak";
      messageRef.current.innerHTML = "Signup unsucessful";
      nameRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else if (
      regex.test(password) &&
      name &&
      age &&
      email &&
      password === cpassword
    ) {
      passwordRef.current.style.color = "green";
      passwordRef.current.innerHTML = "Password is strong";
      cpasswordRef.current.style.color = "green";
      cpasswordRef.current.innerHTML = "Password is strong";
      messageRef.current.innerHTML = "Signup successful";
      nameRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else if (
      password.length > 5 &&
      !regex.test(password) &&
      name &&
      age &&
      email &&
      password === cpassword
    ) {
      passwordRef.current.style.color = "red";
      passwordRef.current.innerHTML = "Password is moderate";
      cpasswordRef.current.style.color = "red";
      cpasswordRef.current.innerHTML = "Password is moderate";
      messageRef.current.innerHTML = "Signup unsuccessful";
      nameRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else if (password !== cpassword) {
      messageRef.current.innerHTML = "Password doesn't matched";
      passwordRef.current.style.color = "red";
      cpasswordRef.current.style.color = "red";
      passwordRef.current.innerHTML = "Password doesn't matched";
      cpasswordRef.current.innerHTML = "Password doesn't matched";
      nameRef.current.innerHTML = "";
      ageRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
    } else {
      messageRef.current.innerHTML = "Signup successful";
    }
  }
  return (
    <div>
      <form className="form">
        <h2 style={{ textAlign: "center", backgroundColor: "aliceblue" }}>
          Sign up
        </h2>

        <input
          type="text"
          id="username"
          className="input"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <div ref={nameRef}></div>
        <input
          type="email"
          id="email"
          className="input"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div ref={emailRef}></div>
        <input
          type="number"
          id="age"
          className="input"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <div ref={ageRef}></div>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div ref={passwordRef}></div>
        <input
          type="password"
          id="cpassword"
          className="input"
          value={cpassword}
          placeholder="Confirm Password"
          onChange={(e) => setCpassword(e.target.value)}
        />
        <div ref={cpasswordRef}></div>
        <div style={{ backgroundColor: "aliceblue" }}>
          <input type="checkbox" />{" "}
          <span style={{ backgroundColor: "aliceblue" }}>
            I accept the{" "}
            <a style={{ color: "blue", backgroundColor: "aliceblue" }}>
              Terms of Use
            </a>{" "}
            &{" "}
            <a style={{ color: "blue", backgroundColor: "aliceblue" }}>
              Privacy Policy
            </a>
          </span>
        </div>
        <div ref={messageRef}></div>
        <button onClick={submitButton}>Submit</button>
        <div className="account">
          Already have an account?{" "}
          <span style={{ color: "blue", backgroundColor: "aliceblue" }}>
            Login
          </span>{" "}
          here
        </div>
      </form>
    </div>
  );
}

export default UserForm;
