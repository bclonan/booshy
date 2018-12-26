<template>
  <div class="pane">Account

<p>{{resdata}}</p>
<p>{{restwo}}</p>
<button @click="getthepath">find path </button>
    <button @click="readSomeFile">Click me </button>
  </div>
</template>

<script>
import { readBaseIni } from "@/dataMixins/files/readFile.js";
import path from 'path'
import { remote } from 'electron'

export default {
  name: 'Account',
  components: {
  
  },
  data() {
    return {
      resdata: null,

      restwo: null,
      userDocuments: null
    };
  },
  methods : {
    readSomeFile(srcPath, callback) {
      let path = `${__static}/userData/baseConfig.ini`;
      let newdata = readBaseIni(path, this.resultFunc);

     
    },
    readUserDocs(srcPath, callback) {
       let path = `${__static}/userData/baseConfig.ini`;
      let docs = readBaseIni(path, this.resultDocsFunc);
    },
    resultDocsFunc(data){
       const userdocs = data.document;
      let tempHolder = [];
      Object.keys(data.document).forEach(function(key) {
        tempHolder.push(data.document[key])
      });
      this.userDocuments = tempHolder;
    },
    resultFunc(data){
      this.resdata = data;
      console.log(data)
    },
    getthepath(){
      let res = this.$docsDir;
      this.restwo = this.$drawDir;
      this.resdata = res;
    }  }
}
</script>

<style scoped>

</style>