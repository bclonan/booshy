import { createStore } from 'vuex'
import singleDocumentDetails from './modules/documents/documentSelected.js'
import editDocument from './modules/documents/documentEditingHolder.js'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    singleDocumentDetails,
    editDocument
  }
})

export default store
