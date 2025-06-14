<template>
  <div class="pane">
    <div class="padded-more">
      <doc-table-control @createNew="addNewDocument" />
      <doc-table :userDocuments="userDocuments"/>
    </div>
  </div>
</template>

<script>
// Removed direct fs and ini imports - will use electron API instead
//Document Table Controls
import docTableControl from "@/components/Main/Includes/table/tableControls/docTableControl.vue";
//Document Table
import docTable from "@/components/Main/Includes/table/docTable.vue";
//Get User Documents Mixin
export default {
  name: 'Documents',
  //mixins: [getUserDocuments],
  components: {
  docTableControl,  
  docTable
  },
  data() {
    return {
      userDocuments: null
    };
  },  methods: {
    async addNewDocument() {
      let docCount = Object.keys(this.userDocuments).length;

      let nestedVersion = new Object();
      let versionObj = new Object();
      let newDocumentObj = new Object();
      nestedVersion.id=0
      nestedVersion.number=0
      nestedVersion.created=Date.now()
      nestedVersion.name="Place holder Name"
      nestedVersion.vueFile="file placeholder"
      nestedVersion.jsonFile="file placeholder"
      nestedVersion.inifFile="file placeholder"
      nestedVersion.qfFile="file placeholder"
      nestedVersion.mdFile="file placeholder"
      ;
      versionObj[0] = nestedVersion;

      newDocumentObj.name="Place Holder Name"
      newDocumentObj.docID=docCount
      newDocumentObj.docType="MD Document"
      newDocumentObj.fileType=".md"
      newDocumentObj.docProject="Place Holder Project"
      newDocumentObj.projectID="randomID"
      newDocumentObj.projectFolder="randomID"
      newDocumentObj.currentVersionName="Place Holder Name"
      newDocumentObj.currentVersionID=0
      newDocumentObj.createdDate=Date.now()
      newDocumentObj.lastEditedDate=Date.now()

      newDocumentObj.docVersions = versionObj;      try {
        const publicPath = await window.electronAPI.getPublicPath()
        const configPath = `${publicPath}/userData/baseConfig.ini`
        const config = await window.electronAPI.readIni(configPath)
        
        const tempHolder = [];
        Object.keys(config.document).forEach(function(key) {
          tempHolder.push(config.document[key])
        });
       
        this.userDocuments.push(newDocumentObj)
        tempHolder.push(newDocumentObj)
       
        await window.electronAPI.writeIni(configPath, { document: tempHolder })
      } catch (error) {
        console.error('Error adding new document:', error)
      }
    },    async fetchDocuments () {
      try {
        const publicPath = await window.electronAPI.getPublicPath()
        const configPath = `${publicPath}/userData/baseConfig.ini`
        const docs = await window.electronAPI.readIni(configPath)
       
        const userdocs = docs.document;
        let tempHolder = [];
        Object.keys(docs.document).forEach(function(key) {
          tempHolder.push(docs.document[key])
        });
        this.userDocuments = tempHolder;
        return;
      } catch (error) {
        console.error('Error fetching documents:', error)
        this.userDocuments = []
      }
    }
  },
  computed : {
   
  },  created() {
    this.fetchDocuments();
  }
}
</script>

<style scoped>

</style>