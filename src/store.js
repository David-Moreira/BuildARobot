import Vue from 'vue'
import Vuex from 'vuex'
import availableParts from "../data/parts";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availableParts: availableParts
  },
  mutations: {
    selectNextPart(state, {part,selectedIndex}){
      const incrIndex = this.selectedPartIndex + 1;
      this.selectedPartIndex =
        incrIndex > this.parts.length - 1 ? 0 : incrIndex;
    },
    selectPreviousPart(state, {part,selectedIndex}){

    }

  },
  actions: {

  },
  getters: {

  }
})
