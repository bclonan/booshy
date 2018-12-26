<template>
<table class="table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Project</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in userDocuments" :key="item.fileID" @click="selectDocument(item)">
      <td>{{item.name}}</td>
      <td>{{item.docType}}</td>
      <td>{{item.docProject}}</td>
      <td>{{item.projectFolder}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
   export default {
      name: "docTable",
      props: ["userDocuments"],
      methods: {
         selectDocument(document) {
           //console.log(document)
         this.$store.commit("singleDocumentDetails/setDocumentDetails", document);
         this.$router.push({path: `/documentControl/${document.docID}`});
         return;
    }
  },
   }
</script>

<style scoped>

</style>