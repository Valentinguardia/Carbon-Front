import React, { useState } from "react";
import style from "../../components/SingUp/style.module.scss";
import Human from "../../assets/Human";
import Block from "../../assets/Block";
import SMS from "../../assets/SMS";
import CloseEye from "../../assets/CloseEye";
import OpenEye from "../../assets/OpenEye";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataRegister } from "../../services/dataRegister";

function SingUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dataRegister(data);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.divContainerR}>
        <div className={style.visual}>
          <div className={`${style.text3} ${style.row2}`}>
            <p className={style.green}>let</p> {"user = {"}
            <p className={style.rose}>{`'${data.fullName}'`}</p>
          </div>
          <div className={`${style.text3} ${style.row2}`}>
            <p>email:</p>
            <p className={style.rose}>{`'${data.email}'`}</p>
          </div>
          <div className={`${style.text3} ${style.row2}`}>
            <p>password:</p>
            {!showPassword ? (
              <p className={style.rose}>{`'${"*".repeat(
                data.password.length
              )}'`}</p>
            ) : (
              <p className={style.rose}>{`'${data.password}'`}</p>
            )}
            <p>{"}"}</p>
          </div>
        </div>
        <div className={style.data}>
          <div className={style.circle}>
            <Human />
          </div>
          <input
            className={style.none}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Username"
            value={data.fullName}
            onChange={handleChange}
            title="Please enter your username."
          />
        </div>
        <div className={style.data}>
          <SMS />
          <input
            className={style.none}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={data.email}
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
            value={data.password}
            onChange={handleChange}
            title="Please enter your password."
          />
          <div className={style.eye} onClick={handleToggleShowPassword}>
            {!showPassword ? <CloseEye /> : <OpenEye />}
          </div>
        </div>
        <ul
          style={{ listStyleType: "disc", margin: "5px 0 0", color: "yellow" }}
        >
          <li>Mínimo 6 caracteres</li>
          <li>Solo letras y números</li>
        </ul>
        <div>
          {submitted && error ? <p style={{ margin: 0 }}>{error}.</p> : ""}
        </div>
      </div>
      <div className={style.left}>
        <button className={`${style.text3} ${style.btn}`}>SIGN UP</button>
        <button
          className={`${style.text3} ${style.btn}`}
          onClick={handleLoginClick}
        >
          LOGIN
        </button>
        <button
          className={`${style.text3} ${style.btn}`}
          onClick={handleHomeClick}
        >
          CODE
        </button>
      </div>
    </form>
  );
}

export default SingUpForm;
