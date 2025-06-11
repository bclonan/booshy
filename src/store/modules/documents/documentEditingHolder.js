// initial state
const state = {
    documentContentList: [],
    origionalDocument: [],
    secondDocumentBackup: [],
    documentPathFolder: null,
    builderEditMode: false
}

const getters = {
    getDocumentPathFolder: state => state.documentPathFolder,
    getDocumentContent: state => state.documentContentList,
    getOrigionalDocument: state => state.origionalDocument,
    getBuilderEditMode: state => state.builderEditMode
}

const actions = {}

const mutations = {
    addNewBlock: (state, payload) => {
        state.documentContentList.push(payload)
    },
    updateBlocks(state, documentContentList) {
        state.documentContentList = documentContentList
    },
    removeBlock: (state, payload) => {
        state.documentContentList = payload || null
    },
    moveBlock: (state, payload) => {
        state.documentContentList = payload || null
    },
    changeBlockContent: (state, payload) => {
        state.documentContentList = payload || null
    },
    changeBlockQuickFills: (state, payload) => {
        state.documentContentList = payload || null
    },
    toggleEditMode: (state) => {
        state.builderEditMode = !state.builderEditMode
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
