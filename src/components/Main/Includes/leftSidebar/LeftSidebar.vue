<template>
  <nav class="nav-group">
    <h5 class="nav-group-title">{{navTitle}}</h5>
    <router-link  v-for="item in navItems" 
      :key="item.id"
      exact-active-class="active" class="nav-group-item " :to="item.route">
      <Icon-Menu :iconName="item.icon"/>
      <span>{{item.text}}</span>
    </router-link>
    <h5 class="nav-group-title">{{searchTitle}}</h5>
    <search-menu />
  </nav>
</template>

<script>
//Nav Icons
import IconMenu from "@/components/Main/Includes/leftSidebar/menu/icon-menu.vue";
//Nav Search
import SearchMenu from "@/components/Main/Includes/leftSidebar/searchMenu/search-menu.vue";

export default {
  name: "leftSidebar",
  components: {
    IconMenu,
    SearchMenu
  },
  data() {
    return {
      navTitle: "Navigation",
      navItems: [{
          route: "/",
          text: "Home",
          icon: "icon-home"
        },
        {
          route: "/Documents",
          text: "Documents",
          icon: "icon-doc"
        },
        {
          route: "/Templates",
          text: "Templates",
          icon: "icon-docs"
        },
        {
          route: "/Clients",
          text: "Clients",
          icon: "icon-users"
        },
        {
          route: "/QuickFill",
          text: "Quick Fill",
          icon: "icon-doc-text"
        },
        {
          route: "/Assets",
          text: "Assets",
          icon: "icon-folder"
        },
        {
          route: "/Account",
          text: "Account",
          icon: "icon-user"
        },
                {
          route: "/Help",
          text: "Help",
          icon: "icon-help"
        },
        {
          route: "/Components",
          text: "Test Components",
          icon: "icon-tools"
        }


        
      ],
      searchTitle: "Documents",
    }
  },
}
</script>

<style>

</style>