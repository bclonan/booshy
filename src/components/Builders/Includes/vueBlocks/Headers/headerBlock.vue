<template>
  <h1 @click="editContent">
    <component v-if="content" v-for="blockContent in content" :key="blockContent.id" :is="blockContent.vueComponent"></component>
    </h1>
</template>

<script>
//text
import basicText from "@/components/Builders/Includes/vueBlocks/Text/basicText.vue";

  export default {
    name: 'textOne',

    props: ['content'],
    components : {
      basicText
    },
    methods: {
       editContent () {
          this.$emit('editBlock', 'h1')
       },
       editText(content){
          this.$emit('editText', content)
       }
    },

    computed: {
      
    }
  };
</script>

<style scoped>
</style>