
import { remote } from 'electron';
import path from 'path';
const fs = require('fs-extra');

const baseConfig = `${__static}/userData/baseConfig.ini`;
const drawDir = path.join(remote.app.getPath('userData'), '/userData');
const docsDir = path.join(remote.app.getPath('userData'), '/userDocs');
const userDataFile = `${drawDir}/baseConfig.ini`;

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





export { drawDir, docsDir, userDataFile };