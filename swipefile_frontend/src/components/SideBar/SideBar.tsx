import React from "react";
import UploadFolder from "../UploadFolder/UploadFolder";
import { FileWithPreview } from "../UploadFolder/types";
import "../UploadFolder/FolderUpload.css";
import SidebarList from "./SidebarList";

function SideBar({
  uploadedFiles,
  onFolderUploadChange,
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  return (
    <div className="side-bar">
      <UploadFolder
        uploadedFiles={uploadedFiles}
        onFolderUploadChange={onFolderUploadChange}
      />
      <div className="sidebar-content">
        <SidebarList
          uploadedFiles={uploadedFiles}
          onFolderUploadChange={onFolderUploadChange}
        />
      </div>
    </div>
  );
}

export default SideBar;