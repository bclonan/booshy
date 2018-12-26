<template>
<body>
     <!-- Main dashboard container -->
  <div class="window">
     <action-page-header :navItems="navItems" :pageTitle="pageTitle" @toggleMenu="toggleMenu" />
         <div class="window-content">
      <div class="pane-group">
        <editor-left-sidebar :navItems="navItems"/>
        <default-layout/>
      
      </div>
    </div>

   <!-- App's content -->
    <action-page-footer />
  </div>
  </body>
</template>

<script>

//Main Navbar
import EditorLeftSidebar from "@/components/Builders/Includes/leftSidebar/EditorLeftSidebar.vue";
//Header
import ActionPageHeader from "@/components/Builders/Includes/header/actionHeader.vue";
//Content
import DefaultLayout from "@/components/Builders/layouts/defaultBuilder.vue";
//Footer
import ActionPageFooter from "@/components/Builders/Includes/footer/actionPageFooter.vue";
   export default {
      name: "Dashboard",
      components: {
          "editor-left-sidebar":EditorLeftSidebar,
          "action-page-header":ActionPageHeader,
         "default-layout": DefaultLayout,
          "action-page-footer":ActionPageFooter,
      },
        data() {
    return {
       pageTitle: 'Document Editor',
       footerText: 'XYZ Draw',
       testButtonClass: 'btn-large btn-primary',
       openMenus: [],
       navItems: [{
          menuName: "blocks-menu",
          text: "Blocks",
          icon: "icon-doc",
          open: true
        },
        {
          menuName: "templates-menu",
          text: "Templates",
          icon: "icon-docs",
          open: false
        },
        {
          menuName: "favorites-menu",
          text: "Favorites",
          icon: "icon-heart",
          open: false
        },
        {
          menuName: "settings-menu",
          text: "Settings",
          icon: "icon-cog",
          open: false
        },
        {
          menuName: "assets-menu",
          text: "Assets",
          icon: "icon-folder",
          open: false
        },
        {
          menuName: "help-menu",
          text: "Help",
          icon: "icon-help",
          open: false
        },
        {
          menuName: "test-menu",
          text: "Test Components",
          icon: "icon-tools",
          open: false
        }
      ],

    };
  },
  methods : {
    toggleMenu(menuName) {
      let menus = this.navItems;
      var menuFilter = menus.filter(function (menu) {
        if (menu.menuName === menuName) {
          return menu.open = !menu.open;
        }
        
      });

  
    }
  },
      
   }
</script>

<style scoped>
@import url("../../styles/Photon/dist/css/photon.min.css");


</style>