<template>
 <div class="pane-sm sidebar scrollPane">
  <nav class="nav-group">
    <h5 class="nav-group-title">{{navTitle}}</h5>
    <span v-for="item in filterMenus(navItems)" :key="item.id">
      <h5 class="nav-group-title">{{item.text}}</h5>
      <component :is="item.menuName" />
    </span>
  </nav>
  </div>
</template>

<script>
//Nav Icons
import IconMenu from "@/components/Builders/Includes/leftSidebar/menu/icon-menu.vue";
//Nav Search
import SearchMenu from "@/components/Builders/Includes/leftSidebar/searchMenu/search-menu.vue";
//Block Menu
import BlocksMenu from "@/components/Builders/Includes/leftSidebar/menu/blocks-menu.vue";
//Favorite Menu
import FavoritesMenu from "@/components/Builders/Includes/leftSidebar/menu/favorites-menu.vue";
// Help Menu
import HelpMenu from "@/components/Builders/Includes/leftSidebar/menu/help-menu.vue";
// settings menu
import SettingsMenu from "@/components/Builders/Includes/leftSidebar/menu/settings-menu.vue";
//templates menu
import TemplatesMenu from "@/components/Builders/Includes/leftSidebar/menu/templates-menu.vue";
//test menu
import TestMenu from "@/components/Builders/Includes/leftSidebar/menu/test-menu.vue";
//assets menu
import AssetsMenu from "@/components/Builders/Includes/leftSidebar/menu/assets-menu.vue";

export default {
  name: "editorLeftSidebar",
  props: ["navItems"],
  components: {
    IconMenu,
    SearchMenu,
    "blocks-menu": BlocksMenu,
     "templates-menu": TemplatesMenu,
      "favorites-menu": FavoritesMenu,
       "settings-menu": SettingsMenu,
        "assets-menu": AssetsMenu,
         "help-menu": HelpMenu,
          "test-menu": TestMenu,
  },
  data() {
    return {
      navTitle: "Editor",
      searchTitle: "Documents",
    }
  },
  methods: {
     filterMenus: function() {
    return this.navItems.filter(function(item) {
      return item.open;
    })
  }
  }
}
</script>

<style scoped>

.scrollPane {
  overflow-x: scroll;
}

</style>