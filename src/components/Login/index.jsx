
import React from "react";
import CarbonCopy from "../../assets/CarbonCopy";
import style from "./style.module.scss";
import Sun from "../../assets/Sun";
import Points from "../../assets/Points";
import LoginForm from "../../commons/LoginForm";

function Login() {
  return (
    <div className={style.dad}>
      <div className={style.childContainer2}>
        <div className={style.sun}>
          <Sun />
        </div>
        <div className={style.line}></div>
        <div className={style.child2}>
          <div className={style.svgContainer2}>
            <CarbonCopy width={"184"} height={"75"} />
            <p className={style.text}>Give style to your code</p>
            <div className={style.row}>
              <Points /> <p className={style.text2}>Login</p>
            </div>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;