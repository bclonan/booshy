<template>
<table class="table-striped">
 
  <thead>
    <tr>
      <th>Name</th>
      <th>Release</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in docVer" :key="item.id" >
      <td>{{item.id}}</td>
      <td>{{item.created}}</td>
      <td>{{item.number}}</td>
    </tr>
  </tbody>
  

</table>
</template>

<script>
   export default {
      name: "docTable",
      props: ["docVersions"],
      methods: {
         selectDocument(document) {
         //TODO: Push doc info to store

         
         this.$router.push({path: `/documentControl/${document.fileID}`});
         return;
      },
    },
    computed: {
      docVer() {
        let selDocument = this.docVersions;
        let tempHolder = [];
      Object.keys(selDocument).forEach(function(key) {
        tempHolder.push(selDocument[key])
      });
     
      //this.userDocuments.push(newDocumentObj)
        return tempHolder;
      }
    },
   }
</script>

<style scoped>

</style>