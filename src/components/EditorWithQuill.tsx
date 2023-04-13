import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import Quill from "quill";

Quill.register("modules/imageResize", ImageResize);

interface Props {
  placeholder?: string;
}

const Editor: React.FC<Props> = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const handleChange = (html: string) => {
    setEditorHtml(html);
    console.log(html);
  };

  const parchment: unknown = Quill.import("parchment");

  return (
    <ReactQuill
      theme="snow"
      onChange={handleChange}
      value={editorHtml}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
        imageResize: {
          parchment,
          modules: ["Resize", "DisplaySize"],
        },
      }}
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ]}
      bounds="#root"
      placeholder={placeholder}
    />
  );
};

export default Editor;
