<template>
  <div class="pane">
    <div class="padded-more">
      <doc-table-control @createNew="addNewDocument" />
      <doc-table :userDocuments="userDocuments"/>
    </div>
  </div>
</template>

<script>
import { readBaseIni, writeIniFile, writeIniNoCallback } from "@/dataMixins/files/readFile.js";

import path from 'path'
//Document Table Controls
import docTableControl from "@/components/Main/Includes/table/tableControls/docTableControl.vue";
//Document Table
import docTable from "@/components/Main/Includes/table/docTable.vue";
//Get User Documents Mixin
const fs = require('fs-extra');
const ini = require('ini');
const uuidv4 = require('uuid/v4');

export default {
    name: 'Documents',
    //mixins: [getUserDocuments],
    components: {
        docTableControl,
        docTable
    },
    data() {
        return {
            userDocuments: null,
            resData: null,
            placeHolderBlock : [{"blockID":"0","blockName":"Header Block","blockDescription":"H1 Tag","vueComponent":"headerBlock","HTMLTag":"h1","MDTag":"#","createdDate":"1543881325720","lastEditedDate":"1543881325720","content":{"0":{"id":"0","vueComponent":"basicText","content":"Click to Edit","HTMLTag":"span","createdDate":"1543881325720","lastEditedDate":"1543881325720"}}}]
        };
    },
    methods: {
        addNewDocument() {
           
            let docThrough = this.userDocuments[Object.keys(this.userDocuments)[Object.keys(this.userDocuments).length - 1]]
            let docCount = Number(docThrough.docID) + 1;
            
            let ranID = uuidv4();
            let nestedVersion = new Object();
            let versionObj = new Object();
            let newDocumentObj = new Object();
            let folderPath = path.join(this.$docsDir, ranID)
            nestedVersion.id = 0
            nestedVersion.number = 0
            nestedVersion.created = Date.now()
            nestedVersion.vueFile = "file placeholder"
            nestedVersion.jsonFile = "file placeholder"
            nestedVersion.inifFile = "0.ini"
            nestedVersion.qfFile = "file placeholder"
            nestedVersion.mdFile = "file placeholder";
            versionObj[0] = nestedVersion;
            newDocumentObj.name = "Project Name Placeholder"
            newDocumentObj.docID = docCount
            newDocumentObj.docType = "MD Document"
            newDocumentObj.fileType = ".md"
            newDocumentObj.docProject = "Place Holder Project"
            newDocumentObj.projectID = ranID
            newDocumentObj.projectFolder = folderPath
            newDocumentObj.currentVersionName = "Version One"
            newDocumentObj.currentVersionID = 0
            newDocumentObj.createdDate = Date.now()
            newDocumentObj.lastEditedDate = Date.now()

            newDocumentObj.docVersions = versionObj;


            
            this.userDocuments.push(newDocumentObj);
            
            //writeIniFile('/userData/baseConfig.ini', this.userDocuments, 'document', writeIniNoCallback(`/userDocs/${docCount}.ini`, this.placeHolderBlock, 'block'))
            

                
            //writeIniFile(this.$userDataFile, ndocs, 'document', writeIniNoCallback(`${this.$drawDir}/${docCount}.ini`, nverz))
//writeIniFile(this.$userDataFile, this.userDocuments, 'document', writeIniNoCallback(`${this.$docsDir}/${docCount}.ini`, this.placeHolderBlock, 'block'))
            writeIniFile(this.$userDataFile, this.userDocuments, 'document', this.createNewDir(ranID, 0))
            //return this.createNewDir(folderPath, 0);
        },
        createNewDir(folderID, versionNumber) {

            let filePath = path.join(this.$docsDir, folderID, versionNumber + '.ini')

            fs.outputFile(filePath, ini.stringify(this.placeHolderBlock, {
                    section: 'block'
                }))
                .then(() => {
                    this.fetchDocuments()
                })
                .catch(err => {
                    console.error(err)
                });



        },
        fetchDocuments() {
            readBaseIni(this.$userDataFile, this.setData)
            return;
        },
        setData(data){
            const resDocs = data.document;
            let tempHolder = [];
            Object.keys(resDocs).forEach(function(key) {
                tempHolder.push(resDocs[key])
            });
            this.userDocuments = tempHolder;
        return;
    }
    },
    created() {
        this.fetchDocuments();

    }
}
</script>

<style scoped>

</style>