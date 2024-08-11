import React, { useCallback, useEffect } from "react";
import "../UploadFolder/FolderUpload.css";
import { FileWithPreview } from "../UploadFolder/types";
function ActionButtons({
  uploadedFiles,
  onFolderUploadChange,
}: {
  uploadedFiles: FileWithPreview[];
  onFolderUploadChange: (files: FileWithPreview[]) => void;
}) {
  // Handle file actions: delete or keep
  const handleFileAction = async (action: string) => {
    if (!uploadedFiles.length) return; // Exit if no files

    const file = uploadedFiles[0];
    const formData = new FormData();
    formData.append("file_path", encodeURIComponent(file.webkitRelativePath));
    formData.append("action", action);

    try {
      await fetch("/handle_file_action/", { method: "POST", body: formData });

      // Update state if action is delete or keep
      if (["delete", "keep"].includes(action)) {
        onFolderUploadChange(uploadedFiles.filter((f) => f !== file));
      }
    } catch (error) {
      console.error("Error handling file action:", error);
    }
  };

  const isDisabled = !uploadedFiles.length; // Disable buttons if no files

  // Handle keyboard events for file actions
  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      if (event.key === "ArrowLeft") handleFileAction("delete");
      else if (event.key === "ArrowRight") handleFileAction("keep");
    },
    [handleFileAction]
  );

  // Add and clean up event listener for keydown
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="action-buttons">
      <button
        aria-label="Delete"
        onClick={() => handleFileAction("delete")}
        disabled={isDisabled}
        className={isDisabled ? "disabled" : ""}
      >
        Delete
      </button>

      <button
        aria-label="Keep"
        onClick={() => handleFileAction("keep")}
        disabled={isDisabled}
        className={isDisabled ? "disabled" : ""}
      >
        Keep
      </button>
    </div>
  );
}

export default ActionButtons;