<template>
<body>
     <!-- Main dashboard container -->
  <div class="window">
     <page-header :pageTitle="pageTitle" />
         <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <left-sidebar/>
        </div>
          <default-layout/>
      
      </div>
    </div>

   <!-- App's content -->
    <page-footer :footerText="footerText" />
  </div>
  </body>
</template>

<script>

//Main Navbar
import LeftSidebar from "@/components/Main/Includes/leftSidebar/LeftSidebar.vue";
//Header
import PageHeader from "@/components/UI/Photon/Bars/Header.vue";
//Content
import DefaultLayout from "@/components/Main/layouts/DefaultContent.vue";
//Footer
import PageFooter from "@/components/UI/Photon/Bars/Footer.vue";
   export default {
      name: "Dashboard",
      components: {
          "left-sidebar":LeftSidebar,
          "page-header":PageHeader,
         "default-layout": DefaultLayout,
          "page-footer":PageFooter,
      },
        data() {
    return {
       pageTitle: 'Home',
       footerText: 'XYZ Draw',
       testButtonClass: 'btn-large btn-primary'

    };
  },
      
   }
</script>

<style scoped>
@import url("../../styles/Photon/dist/css/photon.min.css");


</style>