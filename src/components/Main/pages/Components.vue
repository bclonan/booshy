<template>
   <div class="pane">
      <h1>Lists</h1>
      <Lists /> <page-button :buttonClass="testButtonClass"/></div>
</template>

<script>

//Lists
import Lists from "@/components/UI/Photon/Lists/List.vue";
//Buttons
import Button from "@/components/UI/Photon/Buttons/Buttons.vue";
export default {
  name: 'Home',
  components: {
  
    Lists,
    "page-button" : Button
  },
  data() {
    return {

       testButtonClass: 'btn-large btn-primary'

    };
  },
}
</script>

<style scoped>

</style>