<template>
  <div class="pane">Templates

    <h1>DB Data</h1>
    <span style="color:blue;">{{dbData}}</span>
    <br />
    <br />
      <br/>
          <h1>currentuserdocs Data</h1>
          
<div v-for="(value, key, index) in tryData" :key="key">
  {{ index }}. {{ key }}: {{ value }}
</div>


    <span style="color:red;"><div v-for="(value, key, index) in userDocuments" :key="key">
  {{ index }}. {{ key }}: {{ value }}
</div> </span>
    <br />
    <br />
      <br/>
              <h1>Document Model</h1>
    <span style="color:red;">   {{documentModel}}</span>
    <br />
    <br />
      <br/>
 
    <button class="btn" @click="updateDocs"> click me to update docs</button>
     <button class="btn" @click="logdata">click to log</button>
    
     <button class="btn" @click="changeNameTrying"> click me to read </button>
  </div>
</template>

<script>
const fs = require('fs');
const ini = require('ini');


import {readFolder} from "@/dataMixins/files/fsReaddir.js";

//let id = 1

export default {
  name: 'Templates',
  components: {
  
  },
  data() {
    return {
      baseConfigFile : null,
      baseDocumentModel : null,
      //currentUserDocuments: null,
      tryData : null,
testNewDocument: {
        name: "yooooo",
        docType: "uie",
        docID: "tt",
        fileType: "asd",
        docProject: "File Project",
        projectID: "randomnumberid",
        projectFolder: 'somefoldername',
        currentVersionName : 'versionname',
        currentVersionID : 'vid',
        lastEditedDate: '1/2/3',
        docVersions : [{
          name : 'versionName',
          versionID : 'vid',
          versionNumber: 'v1',
          versionDate : '1/1/1234',
          compiledFilePath : 'somepath',
          jsonFilePath : 'somepath',
          editFilePath : 'somepath',
        lastEditedDate: '1/2/3',
        },
        {
          name : 'versionName',
          versionID : 'randomvergsionid',
          versionNumber: 'v2',
          versionDate : '1/1/1234',
          compiledFilePath : 'somepath',
          jsonFilePath : 'somepath',
          editFilePath : 'somepath',
        lastEditedDate: '1/2/3',
        }
        ]
        
      },
      testnewDataResult : null,
      userDocuments: null,
      updatedInfo : null
    };
  },
  methods: {
    changeNameTrying() {

     let docid = '1';
     console.log(this.userDocuments[docid])
     let newname = 'yeah its over';
     this.userDocuments[docid].name = newname;
     this.userDocuments[docid].docType = 'html';
     
fs.writeFileSync(`${__static}/userData/baseConfig.ini`, ini.stringify(this.userDocuments, { section: 'document' }))
    
  
    },
    readupdatedfile() {
      const config = ini.parse(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
      const degreeType = config;
      this.currentUserDocuments = degreeType;
      /*
var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
currentUserDocuments

fs.appendFile('empirestate.txt', '\nRight there up on Broadway', (err) => {  
    if (err) throw err;
    console.log('The lyrics were updated!');
});
      */
      return;
    },

    
    logdata() {
const config = ini.decode(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
      
      console.log(config)
    },
    updateDocs() {
      let tryingtoaddstuff = this.documentModel;

let nestedVersion = new Object();
let versionObj = new Object();
let newDocumentObj = new Object();
nestedVersion.id=0
nestedVersion.number=0
nestedVersion.created=Date.now()
nestedVersion.vueFile="file placeholder"
nestedVersion.jsonFile="file placeholder"
nestedVersion.inifFile="file placeholder"
nestedVersion.qfFile="file placeholder"
nestedVersion.mdFile="file placeholder"
;
versionObj[0] = nestedVersion;

newDocumentObj.name="Place Holder Name"
newDocumentObj.docID="randomID"
newDocumentObj.docType="MD Document"
newDocumentObj.fileType=".md"
newDocumentObj.docProject="Place Holder Project"
newDocumentObj.projectID="randomID"
newDocumentObj.projectFolder="randomID"
newDocumentObj.currentVersionName="Place Holder Name"
newDocumentObj.currentVersionID=0
newDocumentObj.createdDate=Date.now()
newDocumentObj.lastEditedDate=Date.now()

newDocumentObj.docVersions = versionObj;


const config = ini.parse(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
      const degreeType = config;
      const players = config.document;
      let tempHolder = [];
      Object.keys(config.document).forEach(function(key) {
        tempHolder.push(config.document[key])
      });
     
      this.tryData.push(newDocumentObj)
      tempHolder.push(newDocumentObj)

fs.writeFileSync(`${__static}/userData/baseConfigz.ini`, ini.stringify(tempHolder, { section: 'document' }))
    console.log(tempHolder)
     },
       fetchDocuments () {
      const docs = ini.parse(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
     
      const userdocs = docs.document;
      let tempHolder = [];
      Object.keys(docs.document).forEach(function(key) {
        tempHolder.push(docs.document[key])
      });
      this.userDocuments = tempHolder;
      return;
    }
  },
  computed : {
    dbData () {
      const config = ini.parse(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
      const degreeType = config;
        let docid = 1;
      
         //console.log(  Object.values(config.document[docid]))
        console.log(config.document[docid].createdDate)
        /*const players = config;
        console.log(players)
        let newarray = [];
        Object.keys(config.document).forEach(function(key) {

          console.log(key)
          if (key = docid) {
              newarray.push(config.document[key])
          } else {

          }
 
});
      this.tryData = config.document[docid];
      */
      /*
var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});

Object.keys(obj).forEach(function(key) {

  console.log(key, obj[key]);

});

      */
     this.tryData = config.document[docid];
      return;
    },
    appConfig() {
      const config = ini.parse(fs.readFileSync(`${__static}/userData/baseConfig.ini`, 'utf-8'));
 const degreeType = config.userDocs;
      /*
var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});


      */
      return degreeType;
    },
    documentModel() {
      const model = ini.parse(fs.readFileSync(`${__static}/userData/documentModel.ini`, 'utf-8'));
      this.baseDocumentModel = model.userDocumentModel;

      return model;
    }, 
  },
    created() {
    this.fetchDocuments();

  }
}
</script>

<style scoped>

</style>