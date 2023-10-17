import React from "react";
import uploadIMG from "../../assets/upload.svg";
import './Upload.css'

export const Upload = () => {
  return (
    <div className="uploadBody">
      <div className="fieldgroup">
        <input type="file" name="file[]" id="file" className="filefield" />
        <label for="file" className="filelabel background">
          <span>Envie seu arquivo</span>
          <img src={uploadIMG}/>
        </label>
      </div>
    </div>
  );
};
