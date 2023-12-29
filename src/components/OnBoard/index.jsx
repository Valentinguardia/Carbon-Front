import React from "react";
import style from "./style.module.scss";
import CarbonCopy from "../../assets/CarbonCopy";
import Carbon from "../../assets/Images/carbon.png";
import LogoP5 from "../../assets/Images/logoP5.png";
import Arrow from "../../assets/Arrow";
import Smile from "../../assets/Smile";
import Tag from "../../assets/Tag";
import { useNavigate } from "react-router-dom";

function OnBoard() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={style.dad}>
      <div className={style.childContainer}>
        <div className={style.child}>
          <div className={style.absolute}>
            <div className={style.smile}>
              <Smile />
            </div>
            <div className={style.tag}>
              <Tag />
            </div>
          </div>
          <div className={style.lines}></div>
          <div className={style.svgContainer}>
            <CarbonCopy width={"285px"} height={"117px"} />
          </div>
        </div>
      </div>
      <div className={style.block}>
        <div>
          <p className={style.text5}>Proyecto educativo inspirado en</p>
          <img className={style.carbon} src={Carbon} alt="Carbon logo" />
        </div>
        <button className={style.btn3} onClick={handleRegister}>
          <div className={style.arrowContainer}>
            <div className={style.line}></div>
            <div className={style.arrow}>
              <Arrow />
            </div>
          </div>
        </button>
      </div>
      <img className={style.p5} src={LogoP5} alt="Plataforma5 logo" />
    </div>
  );
}

export default OnBoard;