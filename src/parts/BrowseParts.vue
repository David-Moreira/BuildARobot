<template>
<div>
<h1>Browser Parts</h1>    
<ul class="menu">
    <li><router-link to="heads"> Heads </router-link></li>
    <li><router-link to="arms"> Arms </router-link></li>
    <li><router-link to="torsos"> Torsos </router-link></li>
    <li><router-link to="bases"> Bases </router-link></li>
</ul>

<router-view> </router-view>
</div>    
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
}
ul{
    list-style-type: none;
}
a{

    color:red;
}
</style>
