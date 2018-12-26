<template>
  <div class="pane">
    <h1 class="title">Help</h1>

    <markdown-guide />
  </div>
</template>

<script>
//MD Previewer
import MDHelpDocs from "@/components/Main/Includes/helpPages/markdownGuide.vue";

export default {
  name: 'Help',
  components: {
    "markdown-guide" : MDHelpDocs
  },
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>

</style>