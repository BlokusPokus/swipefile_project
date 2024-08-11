import React from "react";
import SideBarItem from "./SideBarItem";
import { FileWithPreview } from "../UploadFolder/types";
import "../UploadFolder/FolderUpload.css";

function SidebarList({
  uploadedFiles,
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  return (
    <div className="sidebar-list">
      <div className="file-list-container">
        <ul className="file-list">
          {uploadedFiles.map((file, index) => (
            <SideBarItem key={index} fileName={file.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarList;