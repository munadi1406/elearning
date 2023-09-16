import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor({ setValueData,placeholder }) {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link",],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  useEffect(() => {
    setValueData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="w-full flex flex-wrap flex-col p-2 max-h-[90vh] overflow-y-auto">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        style={{maxHeight:"90vh",width:"100%"}}
        placeholder={placeholder}
      />
    </div>
  );
}
TextEditor.propTypes = {
  setValueData: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
