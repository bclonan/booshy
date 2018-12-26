// initial state
const state = {
    activeDocument: null,
};

// getters
const getters = {
    getDocumentDetails: state => state.activeDocument
};

// actions
const actions = {};

// mutations
const mutations = {
    setDocumentDetails: (state, payload) => {
         if (payload) {
            state.activeDocument = payload;
         } else {
            state.activeDocument = null;
         }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};