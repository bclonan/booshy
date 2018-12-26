import { remote } from 'electron';
import path from 'path';
const fs = require('fs-extra');
const ini = require('ini');


function getFileContent(srcPath, callback) { 
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
        callback(data);
        }
    );
}

function readBaseIni(srcPath, callback) { 
  fs.readFile(srcPath, 'utf-8', function (err, data) {
   if (err) throw err;
        callback(ini.parse((data)));
        }
   );
}



function writeIniFile(srcPath, newData, sectionData, callback) { 
     
  fs.writeFileSync(srcPath, ini.stringify(newData, {
                section: sectionData
            }), function (err, data) {
   if (err) throw err;
        callback(data);
        }
   );
}

//Write Ini File With Callback


//Write Ini Promises
function writeIniNoCallback(srcPath, newData, sectionData) { 
   
fs.outputFile(srcPath, ini.stringify(newData, {
                    section: sectionData
                })).then(() => fs.readFile(srcPath, 'utf8'))
.then(data => {
  console.log(data) // => hello!
})
.catch(err => {
  console.error(err)
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