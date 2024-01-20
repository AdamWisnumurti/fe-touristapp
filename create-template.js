const fs = require('fs');
const path = require('path');

const folderName = process.argv[2];

if (!folderName) {
  console.error('Please provide a folder name as an argument.');
  process.exit(1);
}

const folderPath = `./src/modules/${folderName}`;
const fileName = 'index.tsx';
const folderPathContainer = `./src/modules/${folderName}/container`;
const folderPathComponent = `./src/modules/${folderName}/component`;
const folderPathHook = `./src/modules/${folderName}/hook`;
const folderPathData = `./src/modules/${folderName}/data`;
const folderPathType = `./src/modules/${folderName}/type`;
const folderPathUtil = `./src/modules/${folderName}/util`;

const fileContainer = path.join(folderPathContainer, fileName);
const fileComponent = path.join(folderPathComponent, fileName);
const fileHook = path.join(folderPathHook, fileName);
const fileData = path.join(folderPathData, fileName);
const fileType = path.join(folderPathType, fileName);
const fileUtil = path.join(folderPathUtil, fileName);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  fs.mkdirSync(folderPathContainer);
  fs.mkdirSync(folderPathComponent);
  fs.mkdirSync(folderPathHook);
  fs.mkdirSync(folderPathData);
  fs.mkdirSync(folderPathType);
  fs.mkdirSync(folderPathUtil);

  const fileContent = '';
  fs.writeFileSync(fileContainer, fileContent);
  fs.writeFileSync(fileComponent, fileContent);
  fs.writeFileSync(fileHook, fileContent);
  fs.writeFileSync(fileData, fileContent);
  fs.writeFileSync(fileType, fileContent);
  fs.writeFileSync(fileUtil, fileContent);
  console.log(`Folder '${folderName}' created successfully.`);
} else {
  console.log(`Folder '${folderName}' already exists.`);
}
