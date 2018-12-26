<template>
      <div class="pane">
         <div class="padded-more" v-if="!previewDoc">
         </div>
         <div class="padded-more" v-else>
            <div class="btn-group pull-right">
          <button class="btn btn-large btn-default">
          <span class="icon icon-home"></span>
          </button>
          <button class="btn btn-large btn-default">
          <span class="icon icon-link"></span>
          </button>
          <button class=" btn btn-large btn-default">
          <span class="icon icon-list-add"></span>
          </button>
          <button @click="editDocument" class=" btn btn-large btn-default">
          <span class="icon icon-pencil"></span>
          </button>
          <button class=" btn btn-large btn-default">
          <span class="icon icon-share"></span>
          </button>
          <button class=" btn btn-large btn-default">
          <span class="icon icon-trash"></span>
          </button>
          <button class=" btn btn-large btn-default">
          <span class="icon icon-download"></span>
          </button>
          <button class=" btn btn-large btn-default">
          <span class="icon icon-export"></span>
          </button>
           
        </div>
        {{previewDoc}}
        <md-previewer/>
         </div>
       


       
      </div>
</template>

<script>
import { readBaseIni, writeIniFile, writeIniNoCallback } from "@/dataMixins/files/readFile.js";
const fs = require('fs-extra');
const ini = require('ini');
import path from 'path'
//MD Previewer
import mdPreviewContainer from "@/components/Main/Includes/previewContainer/markdownPreview.vue";

   export default {
      name: "docPreview",
      props: ["selectedDocument"],
      components: {
        "md-previewer" : mdPreviewContainer
      },
      data() {
        return {
          docmd: null,
          previewDoc: null,
          currentVersion: null,
          folderPath: null
        }
      },
      methods: {
        editDocument(){
          let folderPath = this.folderPath;
          let docNumber = this.currentVersion;
          let filename = path.join(this.$docsDir, folderPath, docNumber + '.ini');
          let callback = this.setDocument;
fs.readFileSync(filename, 'utf-8', function (err, data) {
   if (err) throw err;
        callback(ini.parse((data)));
        }
   );

          //readBaseIni(filename, this.setDocument);
        },
        setDocument(data){
let docNumber = this.currentVersion;
          let tempHolder = [];
            Object.keys(data.block).forEach(function(key) {
                tempHolder.push(data.block[key])
            });
          console.log(tempHolder)
          this.$store.commit("editDocument/addNewBlock", tempHolder);
          this.$router.push({path: `/DocumentEditor/${this.previewDoc.id}/${this.folderPath}/${docNumber}`});
         return;
        },
        
        fetchPreview() {
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
            this.previewDoc = tempHolder[docid];
            this.currentVersion = tempHolder[docid].currentVersionID;
            this.folderPath = tempHolder[docid].projectID
        return;
    }
      },
      
   }
</script>

<style scoped>

</style>