<template>
  <div class="pane">
    <div  v-if="!selectedDocument">
      <h1>Document Details</h1>
    </div>
    <div v-else>
      <h3>Document Details - <button class="btn btn-sm btn-default" @click="toggleEditMode">{{currentEditMode}}</button></h3>
      <form class="form-inline" v-if="editDetails" @submit.prevent="saveDocChanges">
        <label for="name">Name:</label>
        <input type="text" :placeholder="editedDoc.name" name="name"  v-model="editedDoc.name">
        <label for="projectName">Project:</label>
        <input type="text" :placeholder="editedDoc.docProject" name="projectName" v-model="editedDoc.docProject">
        <input type="text" :placeholder="editedDoc.projectFolder" name="projectFolder" v-model="editedDoc.projectFolder">
        <label for="lastModified">Last Modified:</label>
        <input type="text" :placeholder="editedDoc.lastEditedDate" name="lastModified" v-model="editedDoc.lastEditedDate">
        <br/>
        <button type="submit">Save Changes</button>
      </form>
      <div style="margin:1%;" v-else>
        <p>
          <span style="text-align:left;padding:5%;"> Name: {{editedDoc.name}}</span>
          <span style="text-align:right;" v-if="editedDoc.currentVersionName">Current Version: {{editedDoc.currentVersionName}}</span>
          <span style="text-align:right;" v-else>Current Version: {{editedDoc.currentVersionName}}</span>
        </p>
        <p >
          <span style="text-align:left;padding:5%;">Type: {{editedDoc.docType}}</span>
          <span style="text-align:right;">Folder Path:{{editedDoc.projectFolder}}</span>
        </p>
        
      </div>
      <h2>Versions</h2>
      <docVersionControl @createNewVersion="createNewVersion"/>
      <versionTable :docVersions="selectedDocument.docVersions"/>
    </div>
  </div>
</template>

<script>
//Document Versions Controls
import docVersionControl from "@/components/Main/Includes/table/tableControls/docVersionControl.vue";
import { readBaseIni, writeIniFile, writeIniNoCallback } from "@/dataMixins/files/readFile.js";

import path from 'path'
const fs = require('fs-extra');
const ini = require('ini');
//Version Table
import versionTable from "@/components/Main/Includes/table/docVersionTable.vue";
export default {
    name: "docDetails",
    props: ["selectedDocument"],
    data() {
        return {
            editDetails: false,
            editedDoc: this.selectedDocument ?
                {
                    ...this.selectedDocument,
                } :
                {
                    name: '',
                    currentVersionName: '',
                    docType: '',
                    projectFolder: '',
                    lastEditedDate: ''
                }
        }
    },
    methods: {
        createNewVersion() {
            const userDocs =  readBaseIni(this.$userDataFile, this.setData);

        },
        saveDocChanges() {
            readBaseIni(this.$userDataFile, this.writeDocChanges);
            return;
        },
        setData(data){
            let docid = this.$route.params.id;
            let oldDocHolder = [];
            Object.keys(data.document).forEach(function(key) {
                oldDocHolder.push(data.document[key])
            });
            //this.selectedDocument = tempHolder[docid];
            
            let docCheck = oldDocHolder[docid].docVersions;
            let docThrough = docCheck[Object.keys(docCheck)[Object.keys(docCheck).length - 1]];
            
            let lastNumber = Number(docThrough.id) + 1;
            let projectPathID = oldDocHolder[docid].projectID;
            let folderPath = path.join(this.$docsDir, projectPathID, lastNumber + '.ini');
            

            //object for updating the whole document
            let nestedVersion = new Object();
            let versionObj = new Object();
            nestedVersion.id = lastNumber
            nestedVersion.number = lastNumber
            nestedVersion.created = Date.now()
            nestedVersion.vueFile = "file placeholder";
            nestedVersion.jsonFile = "file placeholder";
            nestedVersion.inifFile = `${lastNumber}.ini`;
            nestedVersion.qfFile = "file placeholder";
            nestedVersion.mdFile = "file placeholder";
            nestedVersion.versionName = "Placeholder";
            versionObj[lastNumber] = nestedVersion;


            //object for updating whole document    
            //Objects for new version file
            let newVersionDoc = new Object();
            let contentObj = new Object();
            let nestedContentObj = new Object();

            nestedContentObj.id = lastNumber
            nestedContentObj.vueComponent = "basicText"
            nestedContentObj.content = "Click to Edit"
            nestedContentObj.HTMLTag = "span"
            nestedContentObj.createdDate = Date.now()
            nestedContentObj.lastEditedDate = Date.now()
            contentObj[lastNumber] = nestedContentObj;
            newVersionDoc.blockID = lastNumber
            newVersionDoc.blockName = "Header Block"
            newVersionDoc.blockDescription = "H1 Tag"
            newVersionDoc.vueComponent = "headerBlock"
            newVersionDoc.HTMLTag = "h1"
            newVersionDoc.MDTag = "#"
            newVersionDoc.createdDate = Date.now()
            newVersionDoc.lastEditedDate = Date.now()
            newVersionDoc.content = contentObj;

            let versHolder = [];
            Object.keys(oldDocHolder[docid].docVersions).forEach(function(key) {
                versHolder.push(oldDocHolder[docid].docVersions[key])
            });

            var obj = Object.assign(versHolder, versionObj);
            
            oldDocHolder[docid].docVersions = Object.assign(docCheck, versionObj);
            oldDocHolder[docid].lastEditedDate = Date.now();
            writeIniFile(this.$userDataFile, oldDocHolder, 'document', 
             writeIniFile(folderPath, newVersionDoc, 'block', 
             this.$emit('editDocument', docid))
             )
        return;
            
    },
        toggleEditMode() {
            this.editDetails = !this.editDetails;
            return;
        },
        writeDocChanges(data) {
            const name = this.editedDoc.name,
                currentVersionName = this.editedDoc.currentVersionName,
                docProject = this.editedDoc.docProject,
                projectFolder = this.editedDoc.projectFolder,
                lastEditedDate = Date.now();
            let docid = this.$route.params.id;
            
            let tempHolder = [];
            Object.keys(data.document).forEach(function(key) {
                tempHolder.push(data.document[key])
            });
            tempHolder[docid].name = name;
            tempHolder[docid].currentVersionName = currentVersionName;
            tempHolder[docid].docProject = docProject
            tempHolder[docid].projectFolder = projectFolder;
            tempHolder[docid].lastEditedDate = lastEditedDate;


            writeIniFile(this.$userDataFile, tempHolder, 'document', this.fetchDocuments);
            return;
        },
        fetchDocuments() {
            readBaseIni(this.$userDataFile, this.resetData)
            return;
        },
        resetData(data){
             let docid = this.$route.params.id;
            const resDocs = data.document;
            let tempHolder = [];
            Object.keys(resDocs).forEach(function(key) {
                tempHolder.push(resDocs[key])
            });
            this.editedDoc = tempHolder[docid];
        return;
    }
    },
    components: {
        versionTable,
        docVersionControl
    },
    computed: {
        documentVersions() {
            return this.selectedDocument;
        },
        currentEditMode() {
            const view = 'View';
            const edit = 'Click to edit';
            let retText = 'Edit';
            var currentMode = this.editDetails;
            if (!currentMode) {
                retText = edit;
            } else {
                retText = view;
            }
            return retText;
        }
    },
    created() {
        this.fetchDocuments();

    }
}
</script>

<style scoped>
/* Style the form - display items horizontally */
.form-inline { 
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}

/* Add some margins for each label */
.form-inline label {
  margin: 5px 10px 5px 0;
}

/* Style the input fields */
.form-inline input {
  vertical-align: middle;
  margin: 10px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

/* Style the submit button */
.form-inline button {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
}

.form-inline button:hover {
  background-color: royalblue;
}

/* Add responsiveness - display the form controls vertically instead of horizontally on screens that are less than 800px wide */
@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>