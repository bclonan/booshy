<template>
<table class="table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>For</th>
      <th>Type</th>
      <th>Project</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in quickFillDocuments" :key="item.fileID">
      <td>{{item.name}}</td>
      <td>{{item.forPerson}}</td>
      <td>{{item.docType}}</td>
      <td>{{item.docProject}}</td>
      <td>{{item.projectFolder}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
   export default {
      name: "quickDocTable",
      props: ["quickFillDocuments"],
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