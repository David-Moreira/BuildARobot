<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            Build-a-Bot
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" active-class="foo" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Builder'}" class="nav-link" active-class="foo" exact>Robot Builder</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import HomePage from "./home/HomePage.vue";
import RobotBuilder from "./builder/RobotBuilder.vue";
import PartSelector from "./partSelector/PartSelector.vue";

export default {
  name: "app",
  components: {
    HomePage,
    RobotBuilder,
    PartSelector
  }, methods: {
    navToBuilder(){
      this.$router.push("/builder");
    }
  }
};
</script>

<style>
.nav-link {
  text-decoration: none;
  color:black;
}

.router-link-active{
  color: #fff;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
.foo{
  color:red;
}
</style>
