<template>
      <div class="pane">
         <div class="padded-more" v-if="!selectedDocument">
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
          <button @click="editDocument(currentDocumentVersionData)" class=" btn btn-large btn-default">
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
        {{currentDocumentVersionData}}
        <md-previewer/>
         </div>
       


       
      </div>
</template>

<script>
// Removed direct fs, ini and path imports - will use electron API instead
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
          
        }
      },
      methods: {
        editDocument(document){
           console.log(this.selectedDocument.projectID)
          console.log(this.currentDocumentVersionData.inifFile)
          let folderPath = this.selectedDocument.projectID;
          let docNumber = this.currentVersion;
           let filename = path.join(this.$docsDir, folderPath, docNumber + '.ini');
           const userDocs = ini.parse(fs.readFileSync(filename, 'utf-8'));

            let tempHolder = [];
            Object.keys(userDocs.block).forEach(function(key) {
                tempHolder.push(userDocs.block[key])
            });
            
            this.$store.commit("editDocument/addNewBlock", tempHolder);
     
           // console.log(tempHolder)
           // this.selectedDocument = tempHolder[docid];
          //this.$store.commit("singleDocumentDetails/setDocumentDetails", document);
         this.$router.push({path: `/DocumentEditor/${this.selectedDocument.id}/${folderPath}/${docNumber}`});
         return;
        }
      },
      computed: {
        currentDocumentVersionData () {
          let liveVersion = this.currentVersion;
          //let versionArray = this.selectedDocument;
          let selDocument = this.selectedDocument.docVersions;
          let tempHolder = [];
          Object.keys(selDocument).forEach(function(key) {
            tempHolder.push(selDocument[key])
          });
          console.log(tempHolder[liveVersion])
          /*var docVersions = versionArray.filter(function (version) {
          return version.versionID === liveVersion;
          });*/
          return tempHolder[liveVersion];
         
        },
        currentVersion() {
          console.log(this.selectedDocument.currentVersionID)
          return this.selectedDocument.currentVersionID;
        }
      }
      
   }
</script>

<style scoped>

</style>