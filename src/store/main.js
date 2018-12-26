import Vue from 'vue'
import Vuex from 'vuex'
const remote = require('electron').remote;
const app = remote.app;
//console.log(app.getPath('userData'));
//Document Modules
import singleDocumentDetails from './modules/documents/documentSelected.js';
//Document Editing
import editDocument from './modules/documents/documentEditingHolder.js';

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
        singleDocumentDetails,
        editDocument
       
    }
});

export default store;