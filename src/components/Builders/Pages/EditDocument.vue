<template>
  <div class="pane">
    <div class="padded-more">
      <h1 class="title">Edit Area</h1>
      {{docPath}}
      {{docid}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'editDocument',
  components: {
  },
  data() {
    return {
      docPath: null,
      docid: null,
      documentContentTestListRemove: [],
      documentContentTestListRemoveSecond: [],
      origDocData: [],
    };
  },
  methods : {
    //Fetch Document Data
    fetchDocumentData () {
     
      const docPath = this.$route.params.path;
      const docID = this.$route.params.id;
     
    },
   
  },
  created() {
      this.fetchDocumentData();
     
    }
}
</script>

<style scoped>

</style>