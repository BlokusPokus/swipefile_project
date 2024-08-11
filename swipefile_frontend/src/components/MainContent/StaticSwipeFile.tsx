import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
import { FileWithPreview } from "../UploadFolder/types";
import "../UploadFolder/FolderUpload.css";

export default function StaticSwipeFile() {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([]);

  return (
    <div className="container">
      <SideBar
        uploadedFiles={uploadedFiles}
        onFolderUploadChange={setUploadedFiles}
      />
      <MainContent
        uploadedFiles={uploadedFiles}
        onFolderUploadChange={setUploadedFiles}
      />
    </div>
  );
}