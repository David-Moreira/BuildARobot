<template>
  <div class="cart-table">
    <h1>Cart</h1>
    <table>
      <thead class="cart-table-header">
        <tr>
          <th class="subTitle">Robot</th>
          <th class="cost"></th>
        </tr>
        <th style="width: auto; background: none;">&nbsp;</th>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <a class="cart-link" @click="selectedInd = index"> <td>{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td></a>

          <td v-if="index == 0" :rowspan="cart.length">
            <div class="preview-cart">
              {{`Item: ${selectedInd} | ${cart[selectedInd].head.title}`}}
               <RobotPreview :selectedRobot="cart[selectedInd]"></RobotPreview> 
            </div>
          </td>
          
        </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script>
import RobotPreview from "../builder/RobotPreview.vue";
export default {
  name: "Cart",
  components:{
    RobotPreview
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      selectedInd:0
    };
  }, methods:{
    selectIndex(index){
      this.selectedInd = index;
    }
  }
};
</script>
<style>
.cart-table-header{
  margin-bottom:10px;
}
.cart-link{
    margin: 10px;
    color: rgba(85, 122, 243, 0.534);
    background-color: white;
    padding: 5px;
    border: 2px solid black;
    border-radius: 15px;
    font-weight: bold;
}
.cart-link:hover{
  cursor:pointer;
  color:white;
  background-color: rgba(85, 122, 243, 0.534);
}
.cost {
  text-align: left;
}
.subTitle {
  text-align: left;
}
.cart-table {
  margin-top: 10px;
  padding: 5px;
  border: 1px solid;
  border-color: #e5e5e5 #dbdbdb #d2d2d2;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
}

.preview-cart {
  position: relative;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.content {
  position: relative;
}
.preview-content {
  border: 1px solid #999;
}
.preview-cart  img {
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


