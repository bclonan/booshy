export const activeNavItem = {
    data() {
        return {
            activeNavItem: ''
        }
    },
    methods: {
        setActive(i) {
            this.activeNavItem = i;
            return
        },
            navigateToRoute(destination) {
      //this.$store.commit("mainPushMenu/resetPushMenu");
      console.log(this.$router.currentRoute.path)
      this.$router.push(destination);
      return;
    }
    },
    computed: {
        activeItem() {
            return this.activeNavItem
        }
    }
};