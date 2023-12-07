import React, { useRef } from "react";

function handleUpload(event) {
  const files = event.target.files;
  if (files.length > 0) {
    // Xử lý các tệp tin
    console.log("Đã chọn", files.length, "tệp tin");
    for (let i = 0; i < files.length; i++) {
      console.log("Tên tệp tin:", files[i].name);
      console.log("Kích thước:", files[i].size, "bytes");
    }
  }
}

function FileInput() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button type="button" className="custom-button" onClick={handleClick}>
        Chọn tệp tin
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple
        onChange={handleUpload}
      />
    </div>
  );
}

export default FileInput;
