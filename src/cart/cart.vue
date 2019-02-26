<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Cart",
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
</style>


