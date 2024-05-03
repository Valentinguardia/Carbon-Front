import React, { useState } from "react";
import style from "./style.module.scss";
import CarbonCopy from "../../assets/CarbonCopy";
import Sun from "../../assets/Sun";
import Download from "../../assets/Download";
import Heart from "../../assets/Heart";
import Profile from "../../assets/Profile";
import DropdownColor from "../../commons/DropdownColor";
import TextArea from "../TextArea";
import Points from "../../assets/Points";
import { dataFavorites, verifyFavorite } from "../../services/dataFavorites";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../../commons/Notification";
import { addFav } from "../../hooks/favorites";
import html2canvas from "html2canvas";

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
  },
  "component.jsx": {
    name: "component.jsx",
    language: "javascript",
  },
  "data.json": {
    name: "data.json",
    language: "json",
  },
  "index.html": {
    name: "index.html",
    language: "html",
  },
};

const colors = [
  "#FFB800",
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
];

function Home() {
  const userId = useSelector((state) => state.user.id);
  const favorites = useSelector((state) => state.fav.favorites);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const styles = ["vs", "vs-dark", "hc-black", "hc-light"];
  const [file, setFile] = useState(files["script.js"]);
  const [labelS, setLabelS] = useState("Style");
  const [labelF, setLabelF] = useState("Format");
  const [labelC, setLabelC] = useState(colors[0]);

  const handleSelectStyle = (value) => {
    setSelectedStyle(value);
  };

  const handleSaveFavorite = async () => {
    try {
      if (!userId) {
        setNotification("Debes iniciar sesión para guardar favoritos");
        return;
      }

      if (!selectedStyle) {
        setNotification(
          "Debes seleccionar un estilo antes de guardar como favorito"
        );
        return;
      }

      const isStyleAlreadySaved = await verifyFavorite(
        userId,
        selectedStyle,
        file,
        labelC
      );
      if (isStyleAlreadySaved) {
        setNotification("Este estilo ya se encuentra en tus favoritos");
        return;
      }

      const response = await dataFavorites(userId, selectedStyle, file, labelC);
      if (response && response.id) {
        dispatch(addFav(response));
        setNotification("Estilo guardado correctamente.");
      } else {
        setNotification(
          "Error al guardar el estilo. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      setNotification(
        "Error al guardar estilos favoritos. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleEditorChange = (value, event) => {
    setEditorValue(value);
  };

  const handleDownloadImage = () => {
    const divToCapture = document.getElementById("textAreaContainer");
    html2canvas(divToCapture)
      .then((canvas) => {
        const roundedCanvas = document.createElement("canvas");
        const roundedContext = roundedCanvas.getContext("2d");
        const borderRadius = 32;

        roundedCanvas.width = canvas.width;
        roundedCanvas.height = canvas.height;

        roundedContext.beginPath();
        roundedContext.moveTo(borderRadius, 0);
        roundedContext.lineTo(roundedCanvas.width - borderRadius, 0);
        roundedContext.quadraticCurveTo(
          roundedCanvas.width,
          0,
          roundedCanvas.width,
          borderRadius
        );
        roundedContext.lineTo(
          roundedCanvas.width,
          roundedCanvas.height - borderRadius
        );
        roundedContext.quadraticCurveTo(
          roundedCanvas.width,
          roundedCanvas.height,
          roundedCanvas.width - borderRadius,
          roundedCanvas.height
        );
        roundedContext.lineTo(borderRadius, roundedCanvas.height);
        roundedContext.quadraticCurveTo(
          0,
          roundedCanvas.height,
          0,
          roundedCanvas.height - borderRadius
        );
        roundedContext.lineTo(0, borderRadius);
        roundedContext.quadraticCurveTo(0, 0, borderRadius, 0);
        roundedContext.closePath();
        roundedContext.clip();

        roundedContext.drawImage(canvas, 0, 0);

        const dataURL = roundedCanvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "editor_capture.png";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch((error) => {
        console.error("Error al capturar la pantalla:", error);
      });
  };

  console.log(editorValue);

  return (
    <div className={style.dad}>
      <div className={style.childContainer2}>
        <div className={style.sun}>
          <Download handleDownloadImage={handleDownloadImage} />
          {userId && <Heart onClick={handleSaveFavorite} />}
          <Sun />
          <Profile />
        </div>
        <div className={style.line}></div>
        <div className={style.child2}>
          <div className={style.svgContainer2}>
            <CarbonCopy width={"184"} height={"75"} />
            <p className={style.text}>Give style to your code</p>
            <DropdownColor
              label={labelS}
              setLabel={setLabelS}
              options={styles}
              selectedValue={selectedStyle}
              onSelectValue={handleSelectStyle}
            />
            <DropdownColor
              label={labelF}
              setLabel={setLabelF}
              files={files}
              options={Object.keys(files)}
              setFile={setFile}
            />
            <DropdownColor
              label={labelC}
              setLabel={setLabelC}
              options={colors}
            />
            <div
              id="textAreaContainer"
              className={style.textContainer}
              style={{ borderColor: labelC }}
            >
              <div className={style.abs}>
                <Points />
              </div>
              <TextArea
                file={file}
                labelS={labelS}
                handleEditorChange={handleEditorChange}
              />
            </div>
          </div>
        </div>
      </div>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default Home;
