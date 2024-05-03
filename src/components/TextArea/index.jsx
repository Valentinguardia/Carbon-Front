import React from "react";
import Editor from "@monaco-editor/react";

function TextArea({ file, labelS, handleEditorChange }) {
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

  return (
    <div>
      <Editor
        height="30vh"
        theme={theme}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue="const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)"
        onChange={handleEditorChange}
        options={editorOptions}
        // onMount={(editor) => {
        //   editorContainerRef.current = editor.getDomNode();
        // }}
      />
    </div>
  );
}

export default TextArea;



