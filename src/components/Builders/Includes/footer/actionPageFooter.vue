<template>
<footer class="toolbar toolbar-footer">
  <div class="toolbar-actions">
    <button @click="cancelEdit" class="btn btn-default">
      Cancel
    </button>

    <button class="btn btn-primary pull-right">
      Save
    </button>
  </div>
</footer>
</template>

<script>
   export default {
      name:"actionPageFooter",
     
      methods: {
        cancelEdit(){
          const oldDoc = this.$route.params.back;
          
          //this.$store.commit("singleDocumentDetails/setDocumentDetails", document);
        // this.$router.push({path: `/DocumentEditor/${document.docID}`});
        this.$router.push({path: `/documentControl/${oldDoc}`});
         return;
        }
      },
      computed: {
        selectedDocument() {
         
            return this.$store.getters["singleDocumentDetails/getDocumentDetails"];
         }
      }
   }
</script>

<style>

</style>