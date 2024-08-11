import "../UploadFolder/FolderUpload.css";


function SideBarItem({ fileName }: { fileName: string }) {
  return (
    <div>
      <li>{fileName}</li>
    </div>
  );
}

export default SideBarItem;