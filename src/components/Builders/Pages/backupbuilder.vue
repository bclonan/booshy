<template>
  <div class="pane">
    <div class="padded-more">
      <h1 class="title">Edit Area</h1>
      <md-view-holder>
        <template v-slot:content>
<draggable :currentDocumentData="currentDocumentData" class="dragArea" v-model="currentDocumentData"  :move="onMove" :options="dragOptions">
        <component v-for="blocks in currentDocumentData" :key="blocks.blockID" :is="blocks.vueComponent"  :content="blocks.content" :editable="editable" @editText="editText"/>
        </draggable>
</template>
      </md-view-holder>

      <md-view-holder :documentContents="contents"/>
    </div>
  </div>
</template>

<script>
//Third Party
import draggable from 'vuedraggable';
const fs = require('fs');
const ini = require('ini');
//mdEditContainer
import mdViewHolder from "@/components/Builders/Includes/editContainers/MD/view.vue";
//Header Blocks
import headerBlock from "@/components/Builders/Includes/vueBlocks/Headers/headerBlock.vue";
export default {
  name: 'editDocument',
  components: {
    "md-view-holder" : mdViewHolder,
    draggable,
    //blocks
    headerBlock
  },
  data() {
    return {
      contents: '',
      documentContentList: [],
      documentContentTestListRemove: [],
      documentContentTestListRemoveSecond: [],
      origDocData: [],
    };
  },
  methods : {
    //Fetch Document Data
    fetchDocumentData () {
     
      const docPath = this.$route.params.path;
      const docID = this.$route.params.id;
      const userDocs = ini.parse(fs.readFileSync(`${__static}/userDocs/${docPath}/${docID}.ini`, 'utf-8'));
      let tempHolder = [];
        Object.keys(userDocs.block).forEach(function(key) {
          tempHolder.push(userDocs.block[key])
        });

      this.origDocData = tempHolder;  
      this.documentContentTestListRemove = tempHolder;
      return;
    },
    fetchSecondDocumentData () {
      const docs = ini.parse(fs.readFileSync(`${__static}/userDocs/testDocHolder.ini`, 'utf-8'));

            const userdocs = docs.block;
            let tempHolder = [];
            Object.keys(docs.block).forEach(function(key) {
                tempHolder.push(docs.block[key])
            });

            this.documentContentTestListRemoveSecond = tempHolder;
            return;
    },
     onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
      },
      dropBlock(u) {
        this.currentDocumentData.push(u);
      },
      pullOrigionalData() {
        this.currentDocumentData = this.origionalDocumentData;
        return;
      },
    
      //dragable
      change(evt) {
        //return console.log(evt);
      },
      dragStart(evt) {},
      dragEnd(evt) {},
      //addblocks
      changeEditStyle() {
        this.draggediting = !this.draggediting;
        return;
      },
      editElement(block){
        console.log(block)
      },
      editText(content){
        console.log(content)
      }
  },
  computed : {
    dragOptions() {
        return {
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
          animation: 100
        };
    },
        currentDocumentData: {
         
      get() {
        return  this.$store.state.editDocument.documentContentList
      },
      set(newValue) {
         this.$store.commit("editDocument/updateBlocks", newValue);
      },
    },
    /*currentDocumentData() {
      let storeDocData = this.$store.state["editDocument/documentContentList"];
      this.documentContentList = storeDocData;
      return storeDocData;
    },*/
    origionalDocumentData() {
      return this.$store.getters["editDocument/getOrigionalDocument"];
    },
    getPathFolder(){
      return this.$store.getters["editDocument/getDocumentPathFolder"];
    },
    editable(){
      return this.$store.getters["editDocument/getBuilderEditMode"];
    },
    
  },
  created() {
      this.fetchDocumentData();
      this.fetchSecondDocumentData();
    }
}
</script>

<style scoped>

</style>