<template>
  <div class="pane">
    <div class="padded-more">
      <quick-fill-table-control />
      <completed-quick-fill-table :quickFillDocuments="quickFillDocuments"/>
    </div>
  </div>
</template>

<script>

//Document Table Controls
import QuickFillTableControl from "@/components/Main/Includes/table/tableControls/QuickFillTableControl.vue";
//Completed Quick Fill Documents

import completedQuickFillTable from "@/components/Main/Includes/table/completedQuickFillTable.vue";
//Get User Documents Mixin
export default {
  name: 'Clients',
  //mixins: [getUserDocuments],
  components: {
  QuickFillTableControl,  
  completedQuickFillTable
  },
  data() {
    return {
      quickFillDocuments: [
        {
        name: "File Name",
        docType: "File Type",
        docID: "35kbz",
        forPerson: 'Joe',
        personID: 'randompersonID',
        fileType: "Email",
        docProject: "File Project",
        projectID: "randomnumberid",
        projectFolder: 'somefoldername',
        currentVersionName : 'versionname',
        currentVersionID : 'vid',
        lastEditedDate: '1/2/3',
        docVersions : [{
          name : 'versionName',
          versionID : 'randomdversionid',
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
      {
        name: "my project",
        docType: "md",
        docID: "35ksb",
        forPerson: 'Brad',
        personID: 'randoampersonID',
        fileType: "Email",
        docProject: "File Project",
        projectID: "randomngumberid",
        projectFolder: 'somefoldername',
        currentVersionName : 'versionname',
        currentVersionID : 'vid',
        lastEditedDate: '1/2/3',
        docVersions : [{
          name : 'versionName',
          versionID : 'randomwversionid',
          versionNumber: 'v1',
          versionDate : '1/1/1234',
          compiledFilePath : 'somepath',
          jsonFilePath : 'somepath',
          editFilePath : 'somepath',
        lastEditedDate: '1/2/3',
        },
        {
          name : 'versionName',
          versionID : 'randozmversionid',
          versionNumber: 'v2',
          versionDate : '1/1/1234',
          compiledFilePath : 'somepath',
          jsonFilePath : 'somepath',
          editFilePath : 'somepath',
        lastEditedDate: '1/2/3',
        }
        ]
        
      }
     
      ]
    };
  },
}
</script>

<style scoped>

</style>