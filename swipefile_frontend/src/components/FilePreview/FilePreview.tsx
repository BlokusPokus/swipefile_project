import React, { useState, useEffect } from "react";
import ActionButtons from "./ActionButtons";
import { FileWithPreview } from "../UploadFolder/types";
import "../UploadFolder/FolderUpload.css";
import placeholderImage from "../assets/icons8-document.svg";

const excelIcon =
  "https://img.icons8.com/color/48/000000/microsoft-excel-2019.png";

function FilePreview({
  uploadedFiles,
  onFolderUploadChange,
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const file = uploadedFiles[0];
      const reader = new FileReader();

      reader.onloadend = () => setFilePreview(reader.result as string);
      reader.onerror = () => setFilePreview(placeholderImage);

      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
        setFileType("image");
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setFilePreview(excelIcon);
        setFileType("excel");
      } else if (file.type.startsWith("text/") || file.name.endsWith(".ts")) {
        reader.readAsText(file);
        setFileType("text");
      } else {
        setFilePreview(placeholderImage);
        setFileType("other");
      }
    } else {
      setFilePreview(null);
      setFileType(null);
    }
  }, [uploadedFiles]);

  const currentFile = uploadedFiles[0];

  return (
    <div className="file-preview-wrapper">
      <div className="file-preview-container">
        {currentFile ? (
          <div>
            <div className="file-preview">
              <h2 className="file-name">{currentFile.name}</h2>
              {fileType === "image" && (
                <img
                  src={filePreview || placeholderImage}
                  alt={currentFile.name}
                />
              )}
              {fileType === "excel" && (
                <img src={filePreview || excelIcon} alt={currentFile.name} />
              )}
              {fileType === "text" && <pre>{filePreview}</pre>}
              {fileType === "other" && (
                <img src={placeholderImage} alt={currentFile.name} />
              )}
            </div>
            <p className="file-date">
              Last Modified:{" "}
              {new Date(currentFile.lastModified).toLocaleString()}
            </p>
          </div>
        ) : (
          <p>Pick a folder to clean!</p>
        )}
      </div>
      <ActionButtons
        uploadedFiles={uploadedFiles}
        onFolderUploadChange={onFolderUploadChange}
      />
    </div>
  );
}

export default FilePreview;
