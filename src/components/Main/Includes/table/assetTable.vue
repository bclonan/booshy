<template>
<table class="table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in userAssets" :key="item.assetID">
      <td>{{item.name}}</td>
      <td>{{item.assetType}}</td>
      <td>{{item.assetLocation}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
   export default {
      name: "docTable",
      props: ["userAssets"],
      methods: {
         selectDocument(document) {
         this.$store.commit("singleDocumentDetails/setDocumentDetails", document);
         this.$router.push({path: `/documentControl/${document.docID}`});
         return;
    }
  },
   }
</script>

<style scoped>

</style>