<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <RobotPreview :selectedRobot="this.selectedRobot"></RobotPreview>
      
      </CollapsibleSection>
    <button class="add-to-cart" @click="addToCart(selectedRobot)">Add To Cart!</button>  
    </div>
    

    <div class="top-row">
      <div class="top part">
        <PartSelector :selectedPart="this.selectedRobot.head" position="top"/>
        <!-- @partSelected="part => this.selectedRobot.head = part" -->
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <PartSelector :selectedPart="this.selectedRobot.leftArm" position="left"/>
        <!-- @partSelected="part => this.selectedRobot.leftArm = part" -->
      </div>

      <div class="center part">
        <PartSelector :selectedPart="this.selectedRobot.torso" position="center"/>
        <!-- @partSelected="part => this.selectedRobot.torso = part" -->
      </div>

      <div class="right part">
        <PartSelector position="right" :selectedPart="this.selectedRobot.rightArm"/>
        <!-- @partSelected="part => this.selectedRobot.rightArm = part" -->
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <PartSelector position="bottom" :selectedPart="this.selectedRobot.base"/>
        <!-- @partSelected="part => this.selectedRobot.base = part" -->
      </div>
    </div>
    <cart v-if="this.currentCart.length>0" :cart="this.currentCart"/>
  </div>
</template>
<script>
import PartSelector from "../partSelector/PartSelector.vue";
import CollapsibleSection from "../Shared/CollapsibleSection.vue";
import RobotPreview from "./RobotPreview.vue";
import Cart from "../cart/cart.vue";

export default {
  name: "RobotBuilder",
  components: {
    PartSelector,
    CollapsibleSection,
    RobotPreview,
    Cart
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const response = confirm(
        "You have not added your robot to your cart, are you sure you want to leave?"
      );
      next(response);
    }

    
  },
  created() {},
  methods: {
addToCart(robot){
  this.$store.commit("addToCart",{currentRobot:robot});
}
  },
  created() {},
  computed: {
    selectedRobot() {
      return this.$store.state.selectedRobot;
    },
    currentCart(){
      return this.$store.state.cart;
    },
    addedToCart(){return this.$store.state.addedToCart;}
  }
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}

.add-to-cart {
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
</style>
