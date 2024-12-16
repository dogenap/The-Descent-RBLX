function download() {
    // make it download the file from the database inside of the releases-bat folder
    console.log("Download button clicked");
  
    // Replace 'releases-bat' with the actual folder name
    const folderName = "v1";
  
    // Replace 'filename.bat' with the actual file name
    const fileName = "filename.bat";
  
    // Construct the file path
    const filePath = `${folderName}/${fileName}`;
  
    // Create a link element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
  
    // Trigger a click event on the link element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  