<template>
  <div class="cart-table">
    <h1>Cart</h1>
    <div>
      <div class="cart-table-header"></div>

      <div class="flex-container">
        <div class="flex-col">
          <div class="cart-item" v-for="(robot, index) in cart" :key="index">
            <a
              :class="{active: index==selectedInd, 'cart-link': true}"
              @click="selectedInd = index"
            >{{robot.head.title}} {{robot.cost}} €</a>
            <a id="deleteBtn" class="cart-link delete" @click="deleteItem(index)">X</a>
          </div>
        </div>
        <div v-if="cart.length > 0">
          <div class="preview-cart">
            {{`Item: ${selectedInd} | ${cart[selectedInd].head.title}`}}
            <RobotPreview :selectedRobot="cart[selectedInd]"></RobotPreview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RobotPreview from "../builder/RobotPreview.vue";
export default {
  name: "Cart",
  components: {
    RobotPreview
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedInd: 0
    };
  },
  methods: {
    deleteItem(index) {
      if (this.cart !== null) {
        if (index == this.selectedInd) {
          if (this.selectedInd > 0)
            this.selectedInd--;
            
          }
      this.cart.splice(index, 1);}
    },
    selectIndex(index) {
      this.selectedInd = index;
    }
  }
};
</script>
<style lang="scss">
.cart-table {
  margin-top: 10px;
  padding: 5px;
  border: 1px solid;
  border-color: #e5e5e5 #dbdbdb #d2d2d2;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

  h1{
    margin-top:5px;
    margin-left:5px;
  }

  .cart-table-header {
    margin-bottom: 10px;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .flex-col {
    flex-direction: column;
  }
  .cart-item {
    margin-bottom: 5px;
  }
  .cart-link {
    margin: 10px;
    color: white;
    background-color: rgba(85, 122, 243, 1);
    padding: 5px;
    border: 2px solid black;
    border-radius: 15px;
    font-weight: bold;

    &:hover,
    &.active {
      cursor: pointer;
      background-color: white;
      color: rgba(85, 122, 243, 0.534);
    }
    &.delete{
      background-color:red;
    }
  }
  .preview-cart {
    position: relative;
    top: -20px;
    right: 0;
    width: 210px;
    height: 210px;
    padding: 5px;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .content {
    position: relative;
  }
  .preview-content {
    border: 1px solid #999;
  }
}
</style>


