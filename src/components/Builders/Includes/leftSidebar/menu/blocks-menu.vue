<template>
<ul class="list-group">
  <li class="list-group-header">
    <input class="form-control" type="text" placeholder="Search for documents">
  </li>
  <li class="list-group-item" v-for="block in blockList" :key="block.blockName">
    <div class="media-body" @click.stop="addBlock(block)">
      <strong>{{block.blockName}}</strong>
      <p>{{block.blockDescription}}</p>
    </div>
  </li>
</ul>
</template>

<script>
const fs = require('fs');
const ini = require('ini');
const uuidv4 = require('uuid/v4');
   export default {
      name:"blocksMenu",
      data() {
        return {
          ranOD : uuidv4(),
          documentLength: 0,

          blockList: [
            {
              blockID : this.ranOD,
              blockName : "Header Block",
              vueComponent : "headerBlock",
              HTMLTag : "h1",
              MDTag: "#",
              createdDate : this.ranOD,
              lastEditedDate : this.ranOD,
              content : {
                "0": {
                  "id":this.documentLength + 1,
                  "vueComponent":"basicText",
                  "content":"Click to Edit",
                  "HTMLTag":"span",
                  "createdDate":this.ranOD,
                  "lastEditedDate":this.ranOD
                  }
              },
              blockDescription:"H1 Tag"

            }
          ]
        }
      },
      methods: {
      addBlock(blockData) {
        //this.$emit('addNewBlock', blockData);
       
        this.$store.commit("editDocument/addNewBlock", blockData);
      return;
      },
      fetchDocumentData () {
     
      const docPath = this.$route.params.path;
      const docID = this.$route.params.id;
      const userDocs = ini.parse(fs.readFileSync(`${__static}/userDocs/${docPath}/${docID}.ini`, 'utf-8'));
      let tempHolder = [];
        Object.keys(userDocs.block).forEach(function(key) {
          tempHolder.push(userDocs.block[key])
        });
        console.log(tempHolder.length)

      this.documentLength = tempHolder.length;  
      
      return;
    },
    computed : {
      dateNow() {
        return Date.now();
      }
    }
    },
    created() {
      this.fetchDocumentData();
    }
   }
</script>

<style>

</style>