import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import html2canvas from "html2canvas";

function TextArea({ file, labelS }) {
  const editorContainerRef = useRef(null);
  const editorOptions = {
    minimap: { enabled: false },
    lineNumbers: "off",
    glyphMargin: false,
    renderLineHighlight: "none",
    scrollbar: {
      horizontal: "hidden",
      vertical: "hidden",
      verticalScrollbarSize: "0px",
    },
    wordWrap: "on",
    padding: { top: 40 },
    lineDecorationsWidth: 0,
  };

  const theme = labelS !== "Style" ? labelS : "vs-dark";

  const handleCaptureAsImage = async () => {
    if (editorContainerRef.current) {
      const canvas = await html2canvas(editorContainerRef.current);
      const imageURL = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imageURL;
      downloadLink.download = "editor_capture.png";
      downloadLink.click();
    }
  };

  return (
    <div>
      <Editor
        height="30vh"
        theme={theme}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue="const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)"
        options={editorOptions}
        onMount={(editor) => {
          editorContainerRef.current = editor.getDomNode();
        }}
      />
      <button onClick={handleCaptureAsImage}>Capture and Download as Image</button>
      
    </div>
  );
}

export default TextArea;
