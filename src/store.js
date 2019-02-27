import Vue from 'vue'
import Vuex from 'vuex'
import availableParts from "./data/parts";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availableParts: availableParts,
    selectedRobot: {
      head: availableParts.heads[0],
      leftArm: availableParts.arms[0],
      torso: availableParts.torsos[0],
      rightArm: availableParts.arms[0],
      base: availableParts.bases[0]
    },
    selectedIndex:{
      head: 0,
      leftArm:0,
      torso:0,
      rightArm:0,
      base:0
    },
    cart:[],
    addedToCart: false
  },
  mutations: {
    selectNextPart(state, {partType, position}){
      let parts = getParts(this.state.availableParts,partType);
      let pos = getPartPosition(position);

      const incrIndex = this.state.selectedIndex[pos] + 1;

      this.state.selectedIndex[pos] = incrIndex > parts.length - 1 ? 0 : incrIndex;
      this.state.selectedRobot[pos] = parts[this.state.selectedIndex[pos]];
    },
    selectPreviousPart(state, {partType, position}){
      let parts = getParts(this.state.availableParts,partType);
      let pos = getPartPosition(position);

      const prevIndex = this.state.selectedIndex[pos] - 1;

      this.state.selectedIndex[pos] = prevIndex < 0 ? parts.length - 1 : prevIndex;
      this.state.selectedRobot[pos] = parts[this.state.selectedIndex[pos]];

    },
    addToCart(state, {currentRobot}) {
      const robot = currentRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      this.state.cart.push({ ...robot, cost });
      this.state.addedToCart = true;
    }

  },
  actions: {

  },
  getters: {

  }
})

function getParts(availableParts, partType)
{
    switch (partType) {
        case "heads":
          return availableParts.heads
        case "arms":
          return availableParts.arms
        case "torsos":
          return availableParts.torsos
        case "bases":
          return availableParts.bases
        default:
            console.error(`Could not get part type: ${partType}`);
            return null;
            break;
    }
}

function getPartPosition(position)
{
    switch (position) {
        case "top":
          return "head"
        case "left":
          return "leftArm"
        case "right":
          return "rightArm"
        case "center":
          return "torso"
        case "bottom":
          return "base"
        default:
            console.error(`Could not get position: ${position}`);
            return null;
            break;
    }
}

