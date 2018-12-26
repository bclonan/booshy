<template>
<nav class="nav-group">
  <h5 class="nav-group-title">{{navTitle}}</h5>
   <a v-for="item in navItems" 
      :key="item.id"
      :class="[activeItem === item.route ? 'active' : '']"
      @click.prevent="setActive(item.route)" class="nav-group-item ">
      <icon-item :iconName="item.icon"/>
      
    <span @click="navigateToRoute(item.route)">{{item.text}}</span>
  </a>


</nav>
</template>

<script>
 import { activeNavItem } from "@/components/UI/Mixins/Photon/navigation/activeNavItem.js";
 //Nav Icons
 import icon from "@/components/UI/Photon/Icons/Icon.vue";

   export default {
      name: "navBar",
      mixins: [activeNavItem],
     // props: ["navTitle", "navItems"],
      components: {
        "icon-item" : icon
      },data() {
        return {
                 navTitle: "Navigation",
       navItems: [{
          route: "/",
          text: "Home",
          icon: "icon-home"
        },
        {
          route: "/Assets",
          text: "Assets",
          icon: "icon-home"
        }
      ]
        }
      },
   }
</script>

<style>

</style>