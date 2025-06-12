import { useDocumentSelectedStore } from './stores/documentSelected'
import { useDocumentEditingHolderStore } from './stores/documentEditingHolder'

export function installStoreBridge(app) {
  const docSel = useDocumentSelectedStore()
  const editDoc = useDocumentEditingHolderStore()

  app.config.globalProperties.$store = {
    commit(type, payload) {
      const [module, action] = type.split('/')
      if (module === 'singleDocumentDetails' && action === 'setDocumentDetails') {
        docSel.setDocumentDetails(payload)
      } else if (module === 'editDocument' && typeof editDoc[action] === 'function') {
        editDoc[action](payload)
      }
    },
    getters: new Proxy({}, {
      get(_, key) {
        switch (key) {
          case 'singleDocumentDetails/getDocumentDetails':
            return docSel.getDocumentDetails
          case 'editDocument/getDocumentPathFolder':
            return editDoc.getDocumentPathFolder
          case 'editDocument/getDocumentContent':
            return editDoc.getDocumentContent
          case 'editDocument/getOrigionalDocument':
            return editDoc.getOrigionalDocument
          case 'editDocument/getBuilderEditMode':
            return editDoc.getBuilderEditMode
          default:
            return undefined
        }
      }
    })
  }
}
