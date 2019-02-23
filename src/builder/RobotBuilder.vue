<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <RobotPreview :selectedRobot="this.selectedRobot"></RobotPreview>
      </CollapsibleSection>
    </div>

    <div class="top-row">
      <div class="top part">
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => this.selectedRobot.head = part"
        />
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <PartSelector
          :parts="availableParts.arms"
          position="left"
          @partSelected="part => this.selectedRobot.leftArm = part"
        />
      </div>

      <div class="center part">
        <PartSelector
          :parts="availableParts.torsos"
          position="center"
          @partSelected="part => this.selectedRobot.torso = part"
        />
      </div>

      <div class="right part">
        <PartSelector
          :parts="availableParts.arms"
          position="right"
          @partSelected="part => this.selectedRobot.rightArm = part"
        />
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <PartSelector
          :parts="availableParts.bases"
          position="bottom"
          @partSelected="part => this.selectedRobot.base = part"
        />
      </div>
    </div>
  </div>
</template>
<script>

import PartSelector from "../partSelector/PartSelector.vue";
import CollapsibleSection from "../Shared/CollapsibleSection.vue";
import RobotPreview from "./RobotPreview.vue";

export default {
  name: "RobotBuilder",
  components: {
    PartSelector,
    CollapsibleSection,
    RobotPreview
  },
  created() {},
  data() {
    return {
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
      }
    };
  },
  computed: {
    availableParts(){
      return this.$store.state.availableParts
    }

  },
  methods: {},
  created() {}
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


</style>
