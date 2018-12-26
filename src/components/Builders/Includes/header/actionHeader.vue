<template>
<header class="toolbar toolbar-header">
<h1 class="title">{{pageTitle}}</h1>

  <div class="toolbar-actions">
    <div class="btn-group">
      <button v-for="item in navItems" :key="item.id" class="btn btn-default" :class="[ item.open === true ? 'active' : '']" @click.stop="toggleMenu(item.menuName)">
        <span class="icon" :class="item.icon"></span>
      </button>
    </div>
    <button class="btn btn-default" @click="toggleEditMode">
      <span class="icon icon-home icon-text"></span>
      {{builderEditMode}}
    </button>
    <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
  </div>
</header>
</template>

<script>
   export default {
      name:"actionHeader",
      props: ["pageTitle", "navItems"],
      data() {
        return {
        }
      },
      methods: {
        toggleMenu(menuName) {
          this.$emit('toggleMenu', menuName);
        },
        toggleEditMode() {
          this.$store.commit("editDocument/toggleEditMode");
           return;
        }
      },
      computed: {
        builderEditMode(){
          const drag = 'Drag';
          const edit = 'Edit';
          let retText = 'Edit';
          var currentMode = this.$store.getters["editDocument/getBuilderEditMode"];
          if(!currentMode){
             retText = edit;
          } else {
             retText = drag;
          }
          return retText;
     },
    }
   }
</script>

<style>

</style>