// initial state
const state = {
    activeDocument: null
}

const getters = {
    getDocumentDetails: state => state.activeDocument
}

const actions = {}

const mutations = {
    setDocumentDetails: (state, payload) => {
        state.activeDocument = payload || null
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
