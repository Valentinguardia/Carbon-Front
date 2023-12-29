import React, { useEffect } from "react";
import style from "./style.module.scss";

function Notification({ message, onClose }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return <div className={style.notification}>{message}</div>;
}

export default Notification;
