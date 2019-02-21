<template>
      <div class="content">
          <div class="preview">
            <CollapsibleSection>
                <div class="preview-content">
                  <div class="top-row">
                    <img :src="selectedRobot.head.src"/>
                  </div>
                  <div class="middle-row">
                    <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
                    <img :src="selectedRobot.torso.src"/>
                    <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
                  </div>
                  <div class="bottom-row">
                    <img :src="selectedRobot.base.src"/>
                  </div>
                </div>
              </CollapsibleSection>
          </div>

    <div class="top-row">
      <div class="top part">
      <PartSelector :parts="availableParts.heads" position="top"
       @partSelector="part => this.selectedRobot.head = part"/>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <PartSelector :parts="availableParts.arms" position="left"
         @partSelector="part => this.selectedRobot.leftArm = part"/>
      </div>

      <div class="center part">
          <PartSelector :parts="availableParts.torsos" 
          position="center"
           @partSelector="part => this.selectedRobot.torso = part"/>
      </div>

      <div class="right part">
        <PartSelector 
        :parts="availableParts.arms" 
        position="right"
         @partSelector="part => this.selectedRobot.rightArm = part"/>
      
      </div>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" position="bottom"
       @partSelector="part => this.selectedRobot.bases = part"/>
      </div>
  </div>

</template>
<script>
import availableParts from "../data/parts";
import PartSelector from "../partSelector/PartSelector.vue"
import CollapsibleSection from "../Shared/CollapsibleSection.vue"

export default {
    name:"RobotBuilder",
    components: {
        PartSelector,
        CollapsibleSection
    },
    created(){
    },
    data() { return { 
      availableParts, 
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
    }}},
    computed: {

    },
    methods: {
    },
    created(){
    }
}
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
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
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.content{
    position:relative;
}
.preview-content {
  border: 1px solid #999;

}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}


</style>
