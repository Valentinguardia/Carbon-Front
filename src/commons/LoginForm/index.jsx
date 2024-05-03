import React, { useState } from "react";
import Block from "../../assets/Block";
import SMS from "../../assets/SMS";
import style from "../../components/Login/style.module.scss";
import { dataLogin } from "../../services/dataLogin";
import CloseEye from "../../assets/CloseEye";
import OpenEye from "../../assets/OpenEye";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../hooks/user";
function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

 
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dataLogin(formData.email, formData.password);
      dispatch(setUser(response));
      navigate("/home");
    } catch (error) {
      console.error("Error del token",error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.divContainerL}>
        <div className={style.visual}>
          <div className={`${style.text3} ${style.row2}`}>
            <p className={style.green}>let</p> {"user = {"}
            <p className={style.rose}>{`'${formData.fullName}'`}</p>
          </div>
          <div className={`${style.text3} ${style.row2}`}>
            <p>email:</p>
            <p className={style.rose}>{`'${formData.email}'`}</p>
          </div>
          <div className={`${style.text3} ${style.row2}`}>
            <p>password:</p>
            {!showPassword ? (
              <p className={style.rose}>{`'${"*".repeat(
                formData.password.length
              )}'`}</p>
            ) : (
              <p className={style.rose}>{`'${formData.password}'`}</p>
            )}
            <p>{"}"}</p>
          </div>
        </div>
        <div className={style.data}>
          <SMS />
          <input
            className={style.none}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            title="Please enter your email address."
          />
        </div>
        <div className={style.data}>
          <Block />
          <input
            className={style.none}
            type={!showPassword ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            title="Please enter your password."
          />
          <div className={style.eye} onClick={handleToggleShowPassword}>
            {!showPassword ? <CloseEye /> : <OpenEye />}
          </div>
        </div>
        {/* <button
          className={`${style.btn2}`}
        >
          forgot your password()
        </button> */}
        <div>
          {submitted && error ? <p style={{ margin: 0 }}>{error}.</p> : ""}
        </div>
      </div>
      <div className={style.left}>
        <button className={`${style.text3} ${style.btn}`}>LOGIN</button>
        <button
          className={`${style.text3} ${style.btn}`}
          onClick={handleSignUpClick}
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
