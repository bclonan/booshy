<template>
 <header class="toolbar toolbar-header">
  <h1 class="title">Your Documents</h1>

  <div class="toolbar-actions">
    <div class="btn-group">
      <button class="btn btn-default">
        <span class="icon icon-home"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-folder"></span>
      </button>
      <button class="btn btn-default" @click="createNewDocument">
        <span class="icon icon-plus"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-popup"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-shuffle"></span>
      </button>
    </div>

    <button class="btn btn-default">
      <span class="icon icon-home icon-text"></span>
      Filters
    </button>

    <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
  </div>
</header>  
</template>

<script>
   export default {
      name: "docTableControl",
      methods: {
        createNewDocument() {
          this.$emit('createNew')
        }
      },
   }
</script>

<style scoped>

</style>