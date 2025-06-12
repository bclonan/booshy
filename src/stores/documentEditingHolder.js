import { defineStore } from 'pinia'

export const useDocumentEditingHolderStore = defineStore('documentEditingHolder', {
  state: () => ({
    documentContentList: [],
    origionalDocument: [],
    secondDocumentBackup: [],
    documentPathFolder: null,
    builderEditMode: false
  }),
  actions: {
    addNewBlock(payload) {
      this.documentContentList.push(payload)
    },
    updateBlocks(list) {
      this.documentContentList = list
    },
    removeBlock(payload) {
      this.documentContentList = payload || null
    },
    moveBlock(payload) {
      this.documentContentList = payload || null
    },
    changeBlockContent(payload) {
      this.documentContentList = payload || null
    },
    changeBlockQuickFills(payload) {
      this.documentContentList = payload || null
    },
    toggleEditMode() {
      this.builderEditMode = !this.builderEditMode
    }
  },
  getters: {
    getDocumentPathFolder: (state) => state.documentPathFolder,
    getDocumentContent: (state) => state.documentContentList,
    getOrigionalDocument: (state) => state.origionalDocument,
    getBuilderEditMode: (state) => state.builderEditMode
  }
})
