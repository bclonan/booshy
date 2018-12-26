export const singleDocumentNavigation = {
    data() {
        return {
            currentComponent: "docDetails"
        };
    },
    methods: {
        setActiveComponent(viewSelected) {
            this.currentComponent = viewSelected;
            return;
        }
    },
    computed: {
        isActiveComponent() {
            return this.currentComponent;
        }
    }
};