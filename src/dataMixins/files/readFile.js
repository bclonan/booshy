// Removed direct Node.js imports - will use electron API instead
// const ini = require('ini'); // Commented out - use electron API instead

function getFileContent(srcPath, callback) { 
    // Use electron API instead of direct fs access
    window.electronAPI.readFile(srcPath)
        .then(data => callback(data))
        .catch(err => {
            console.error('Error reading file:', err);
            throw err;
        });
}

function readBaseIni(srcPath, callback) { 
    // Use electron API instead of direct fs and ini access
    window.electronAPI.readIni(srcPath)
        .then(data => callback(data))
        .catch(err => {
            console.error('Error reading ini file:', err);
            throw err;
        });
}

function writeIniFile(srcPath, newData, sectionData, callback) { 
    // Use electron API instead of direct fs and ini access
    window.electronAPI.writeIni(srcPath, newData, { section: sectionData })
        .then(data => callback(data))
        .catch(err => {
            console.error('Error writing ini file:', err);
            throw err;
        });
}

//Write Ini Promises
function writeIniNoCallback(srcPath, newData, sectionData) { 
    // Use electron API instead of direct fs and ini access
    return window.electronAPI.writeIni(srcPath, newData, { section: sectionData })
        .then(() => window.electronAPI.readFile(srcPath))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.error('Error in writeIniNoCallback:', err);
            throw err;
        });
}





export { getFileContent, readBaseIni, writeIniFile, writeIniNoCallback };



/* read write
function copyData(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile (savPath, data, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
}

*/