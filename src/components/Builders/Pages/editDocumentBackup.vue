<template>
  <div class="pane">
    <div class="padded-more">
      <h1 class="title">Edit Area</h1>
      <md-view-holder>
        <template v-slot:content>
<draggable :documentContentList="currentDocumentData" class="dragArea" v-model="currentDocumentData"  :move="onMove" :options="dragOptions">
        <component v-for="blocks in currentDocumentData" :key="blocks.id" :is="blocks.blockVueComponent" :contentClass="blocks.blockClass" :contentStyle="blocks.blockStyle" :content="blocks.blockContent" :editable="editable" @editText="editText"/>
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
// Removed direct fs and ini imports - will use electron API instead
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
  },  methods : {
    //Fetch Document Data
    async fetchDocumentData () {
      try {
        const data = await window.electronAPI.readFile(`${__static}/userDocs/testDoc.ini`);
        const ini = require('ini');
        const docs = ini.parse(data);

        const userdocs = docs.block;
        let tempHolder = [];
        Object.keys(docs.block).forEach(function(key) {
            tempHolder.push(docs.block[key])
        });

        this.documentContentTestListRemove = tempHolder;
        return;
      } catch (error) {
        console.error('Error reading file:', error);
      }
    },
    async fetchSecondDocumentData () {
      try {
        const data = await window.electronAPI.readFile(`${__static}/userDocs/testDocHolder.ini`);
        const ini = require('ini');
        const docs = ini.parse(data);

        const userdocs = docs.block;
        let tempHolder = [];
        Object.keys(docs.block).forEach(function(key) {
            tempHolder.push(docs.block[key])
        });

        this.documentContentTestListRemoveSecond = tempHolder;
        return;
      } catch (error) {
        console.error('Error reading file:', error);
      }
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