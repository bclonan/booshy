<template>
  <div class="pane">
    <div class="padded-more">
      <asset-table-control />
      <asset-table :userAssets="userAssets"/>
    </div>
  </div>
</template>

<script>
//Document Table Controls
import assetTableControl from "@/components/Main/Includes/table/tableControls/assetTableControl.vue";
//Document Table
import assetTable from "@/components/Main/Includes/table/assetTable.vue";
//Get User Documents Mixin
export default {
  name: 'Assets',
  //mixins: [getUserDocuments],
  components: {
  assetTableControl,  
  assetTable
  },
  data() {
    return {
      userAssets: [
        {
        name: "File Name",
        assetType: "File Type",
        assetLocation: "35kbz",
        assetID: "ranid",
        
        },
]
        
        
      
      
     
      
    };
  },
}
</script>

<style scoped>

</style>