// This file should be moved to main process or use IPC
// For now, commenting out direct fs usage
// import { remote } from 'electron';
// import path from 'path';
// const fs = require('fs-extra');

// const baseConfig = `${__static}/userData/baseConfig.ini`;
// const drawDir = path.join(remote.app.getPath('userData'), '/userData');
// const docsDir = path.join(remote.app.getPath('userData'), '/userDocs');
// const userDataFile = `${drawDir}/baseConfig.ini`;

console.log('createAppDir.js - File system operations need to be moved to main process');

// All file system operations commented out - need to be handled via IPC
/*
fs.ensureDir(docsDir)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

if (fs.existsSync(userDataFile)) {
    console.log('exists')
} else (
  fs.ensureFile(userDataFile, err => {
  console.log(err) // => null
  // file has now been created, including the directory it is to be placed in
  fs.copy(baseConfig, `${drawDir}/baseConfig.ini`)
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
})
)
*/

// Commented out export since variables are not defined (moved to main process)
// export { drawDir, docsDir, userDataFile };