import FilePreview from "../FilePreview/FilePreview";
import { FileWithPreview } from "../UploadFolder/types";
import "../UploadFolder/FolderUpload.css";
function MainContent({
  uploadedFiles,
  onFolderUploadChange
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  return (
    <div className="main-content">
      <div >
      <FilePreview uploadedFiles={uploadedFiles} onFolderUploadChange={onFolderUploadChange}/>
      </div>
    </div>
  );
}

export default MainContent;