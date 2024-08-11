import React from "react";
import { FileWithPreview } from "./types";
import "./FolderUpload.css";
function UploadFolder({
  onFolderUploadChange,
  uploadedFiles,
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = files.filter(
      (file) =>
        !uploadedFiles.some((uploadedFile) => uploadedFile.name === file.name)
    );
    onFolderUploadChange([...uploadedFiles, ...newFiles]);
  };

  return (
    <div className="upload-folder">
      <label htmlFor="folder-upload">Upload Folder</label>
      <input
      accept="image/*"
        id="folder-upload"
        type="file"
        multiple
        onChange={handleFileChange}
        /* @ts-expect-error */
        directory="true"
        webkitdirectory=""
      />
    </div>
  );
}

export default UploadFolder;