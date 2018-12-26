// initial state
const state = {
    documentContentList: [],
    origionalDocument: [],
    secondDocumentBackup : [],
    documentPathFolder : null,
    builderEditMode : false
};

// getters
const getters = {
    getDocumentPathFolder: state => state.documentPathFolder,
    getDocumentContent: state => state.documentContentList,
    getOrigionalDocument : state => state.origionalDocument,
    getBuilderEditMode : state => state.builderEditMode
};

// actions
const actions = {};

// mutations
const mutations = {
    addNewBlock : (state, payload) => {
        state.documentContentList.push(payload);
    },
    updateBlocks(state, documentContentList) {
      state.documentContentList = documentContentList
    },
    removeBlock : (state, payload) => {
         if (payload) {
            state.documentContentList = payload;
         } else {
            state.documentContentList = null;
         }
    },
    moveBlock : (state, payload) => {
         if (payload) {
            state.documentContentList = payload;
         } else {
            state.documentContentList = null;
         }
    },
    changeBlockContent : (state, payload) => {
         if (payload) {
            state.documentContentList = payload;
         } else {
            state.documentContentList = null;
         }
    },
    changeBlockQuickFills : (state, payload) => {
         if (payload) {
            state.documentContentList = payload;
         } else {
            state.documentContentList = null;
         }
    },
    toggleEditMode : (state) => {
        state.builderEditMode = !state.builderEditMode;
    },
    
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};