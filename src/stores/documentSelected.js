import { defineStore } from 'pinia'

export const useDocumentSelectedStore = defineStore('documentSelected', {
  state: () => ({
    activeDocument: null
  }),
  actions: {
    setDocumentDetails(payload) {
      this.activeDocument = payload || null
    }
  },
  getters: {
    getDocumentDetails: (state) => state.activeDocument
  }
})
