<template>
  <div class="pane">
    <div class="pane-group">
      <div class="panel sidebar">
        <nav class="nav-group">
          <h5 class="nav-group-title">Document Name</h5>
          <span v-for="item in NavOptions" :key="item.id" @click="setActiveComponent(item.to)" class="nav-group-item" :class="[ isActiveComponent === item.to ? 'active' : '']">
          <span class="icon" :class="item.icon"></span>
          {{item.text}}
          </span>
          <router-link to="/Documents" class="nav-group-item">
          <span  class="icon icon-left"></span>
          Your Documents
          </router-link>
        </nav>
      </div>
      <!-- content pane -->
    <router-view></router-view>
      <component :is="isActiveComponent" :selectedDocument="selectedDocument" @editDocument="updateSelectedDoc" />
      <!-- content pane -->
    </div>
  </div>
</template>

<script>
import { readBaseIni, writeIniFile, writeIniNoCallback } from "@/dataMixins/files/readFile.js";

//Navigation Mixin
import {
    singleDocumentNavigation
} from "@/components/Main/Mixins/singleDocumentNavigation";
//Document Table Controls
import docTableControl from "@/components/Main/Includes/table/tableControls/docTableControl.vue";
//Document Details
import docDetails from "@/components/Main/Includes/singleDocument/docDetails.vue";
//Document Preview
import docPreview from "@/components/Main/Includes/singleDocument/docPreview.vue";
//Document Quick Fill
import docQuickFill from "@/components/Main/Includes/singleDocument/docQuickFill.vue";
//Document Settings
import docSettings from "@/components/Main/Includes/singleDocument/docSettings.vue";
//Document Download
import docDownload from "@/components/Main/Includes/singleDocument/docDownload.vue";
//Document Export
import docExport from "@/components/Main/Includes/singleDocument/docExport.vue";
//Document Share
import docShare from "@/components/Main/Includes/singleDocument/docShare.vue";
//Single Version Table controls
import docVersionControl from "@/components/Main/Includes/table/tableControls/docVersionControl.vue";

export default {
    name: 'Documents',
    mixins: ["singleDocumentNavigation"],
    components: {
        docTableControl,
        docDetails,
        docPreview,
        docQuickFill,
        docSettings,
        docDownload,
        docExport,
        docShare,
    },
    data() {
        return {
            selectedDocument: null,
            NavOptions: [{
                    to: "docDetails",
                    text: "Details",
                    icon: "icon-home"
                },
                {
                    to: "docPreview",
                    text: "Preview",
                    icon: "icon-search"
                },
                {
                    to: "docSettings",
                    text: "Settings",
                    icon: "icon-cog"
                },
                {
                    to: "docDownload",
                    text: "Download",
                    icon: "icon-download"
                },
                {
                    to: "docExport",
                    text: "Export",
                    icon: "icon-export"
                },
                {
                    to: "docShare",
                    text: "Share",
                    icon: "icon-share"
                },
            ],
            currentComponent: "docDetails"
        };
    },
    methods: {
        setActiveComponent(viewSelected) {
            this.currentComponent = viewSelected;
            return;
        },
        updateSelectedDoc() {
            readBaseIni(this.$userDataFile, this.setData)
            return;

        },
        fetchDocData() {
    
            readBaseIni(this.$userDataFile, this.setData)
            return;
        },
        setData(data){
           
            let docid = this.$route.params.id;
            let tempHolder = [];
            Object.keys(data.document).forEach(function(key) {
                tempHolder.push(data.document[key])
            });
            this.selectedDocument = tempHolder[docid];
        return;
    }
    },
    computed: {
        isActiveComponent() {
            return this.currentComponent;
        },
        /*selectedDocument() {
         
            return this.$store.getters["singleDocumentDetails/getDocumentDetails"];
         }*/
    },
    created() {
        this.fetchDocData();

    }
}
</script>

<style scoped>

</style>